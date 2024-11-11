// src/cache/MainDataProvider.ts

import { CreateParams, CreateResult, DataProvider, DeleteParams, DeleteResult, Identifier, RaRecord } from "react-admin";
import initialData from "./gen.json";

const LOCAL_STORAGE_KEY = "geradorData";

const loadData = (resource: string) => {
    const allData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");

    if (!allData[resource]) {
        allData[resource] = initialData.apps; 
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allData));
    }

    return allData[resource];
};

const saveData = (resource: string, data: any[]) => {
    const allData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");
    allData[resource] = data;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allData));
};

export const MainDataProvider: DataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
        const { field, order } = params.sort || { field: "defaultField", order: "ASC" };
        let data = loadData(resource);

        data = data.sort((a: any, b: any) => 
            order === "ASC" 
                ? a[field] > b[field] ? 1 : -1 
                : a[field] < b[field] ? 1 : -1
        );

        const paginatedData = data.slice((page - 1) * perPage, page * perPage);

        return Promise.resolve({
            data: paginatedData,
            total: data.length,
        });
    },

    getOne: (resource, params) => {
        console.log("Requested ID:", params.id);
        const data = loadData(resource);
        const record = data.find((item: any) => item.id === params.id);
        
        if (record) {
            return Promise.resolve({ data: record });
        } else {
            console.error("Record not found:", params.id);
            return Promise.reject(new Error("Not found"));
        }
    },

    getMany: (resource, params) => {
        const data = loadData(resource).filter((item: any) => params.ids.includes(item.id));
        return Promise.resolve({ data });
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        let data = loadData(resource).filter((item: any) => item[params.target] === params.id);

        data = data.sort((a: any, b: any) => 
            order === "ASC" 
                ? a[field] > b[field] ? 1 : -1 
                : a[field] < b[field] ? 1 : -1
        );

        const paginatedData = data.slice((page - 1) * perPage, page * perPage);

        return Promise.resolve({
            data: paginatedData,
            total: data.length,
        });
    },

    update: (resource, params) => {
        const data = loadData(resource);
        const index = data.findIndex((item: any) => item.id === params.id);
        if (index === -1) return Promise.reject(new Error("Not found"));
        
        data[index] = { ...data[index], ...params.data };
        saveData(resource, data);

        return Promise.resolve({ data: data[index] });
    },

    updateMany: (resource, params) => {
        const data = loadData(resource);
        params.ids.forEach(id => {
            const index = data.findIndex((item: any) => item.id === id);
            if (index !== -1) data[index] = { ...data[index], ...params.data };
        });
        saveData(resource, data);

        return Promise.resolve({ data: params.ids });
    },

    create: <RecordType extends Omit<RaRecord, "id"> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(resource: string, params: CreateParams<RecordType>): Promise<CreateResult<ResultRecordType>> => {
        const data = loadData(resource);
        const newRecord: ResultRecordType = { ...params.data, id: `app${Date.now()}` } as unknown as ResultRecordType;
        data.push(newRecord);
        saveData(resource, data);

        return Promise.resolve({ data: newRecord });
    },

    delete: <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> => {
        let data = loadData(resource);
        const deletedRecord = data.find((item: any) => item.id === params.id) as RecordType;
        data = data.filter((item: any) => item.id !== params.id);
        saveData(resource, data);
    
        return Promise.resolve({ data: deletedRecord });
    },

    deleteMany: (resource, params) => {
        let data = loadData(resource);
        data = data.filter((item: any) => !params.ids.includes(item.id));
        saveData(resource, data);

        return Promise.resolve({ data: params.ids });
    }
};