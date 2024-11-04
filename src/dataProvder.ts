// in src/dataProvider.ts

import { CreateParams, CreateResult, DataProvider, DeleteParams, DeleteResult, Identifier, RaRecord } from "react-admin";
import initialData from "./gen.json";

const LOCAL_STORAGE_KEY = "myAppData";

const loadData = (resource: string) => {
    const allData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");

    // Inicializa os dados se não existirem
    if (!allData[resource]) {
        allData[resource] = initialData.apps; // Inicializa a chave "apps" com os dados de gen.json
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allData));
    }

    return allData[resource];
};

const saveData = (resource: string, data: any[]) => {
    const allData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");
    allData[resource] = data;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allData));
};

export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
        const { field, order } = params.sort || { field: "defaultField", order: "ASC" };
        let data = loadData(resource);

        // Ordenação
        data = data.sort((a: any, b: any) => 
            order === "ASC" 
                ? a[field] > b[field] ? 1 : -1 
                : a[field] < b[field] ? 1 : -1
        );

        // Paginação
        const paginatedData = data.slice((page - 1) * perPage, page * perPage);

        return Promise.resolve({
            data: paginatedData,
            total: data.length,
        });
    },

    getOne: (resource, params) => {
        const data = loadData(resource);
        const record = data.find((item: any) => item.app === params.id);
        return record ? Promise.resolve({ data: record }) : Promise.reject(new Error("Not found"));
    },

    getMany: (resource, params) => {
        const data = loadData(resource).filter((item: any) => params.ids.includes(item.app));
        return Promise.resolve({ data });
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        let data = loadData(resource).filter((item: any) => item[params.target] === params.id);

        // Ordenação
        data = data.sort((a: any, b: any) => 
            order === "ASC" 
                ? a[field] > b[field] ? 1 : -1 
                : a[field] < b[field] ? 1 : -1
        );

        // Paginação
        const paginatedData = data.slice((page - 1) * perPage, page * perPage);

        return Promise.resolve({
            data: paginatedData,
            total: data.length,
        });
    },

    update: (resource, params) => {
        const data = loadData(resource);
        const index = data.findIndex((item: any) => item.app === params.id);
        if (index === -1) return Promise.reject(new Error("Not found"));
        
        data[index] = { ...data[index], ...params.data };
        saveData(resource, data);

        return Promise.resolve({ data: data[index] });
    },

    updateMany: (resource, params) => {
        const data = loadData(resource);
        params.ids.forEach(id => {
            const index = data.findIndex((item: any) => item.app === id);
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
        const deletedRecord = data.find((item: any) => item.app === params.id) as RecordType;
        data = data.filter((item: any) => item.app !== params.id);
        saveData(resource, data);
    
        return Promise.resolve({ data: deletedRecord });
    },

    deleteMany: (resource, params) => {
        let data = loadData(resource);
        data = data.filter((item: any) => !params.ids.includes(item.app));
        saveData(resource, data);

        return Promise.resolve({ data: params.ids });
    }
};