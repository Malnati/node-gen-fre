// src/cache/AppDataProvider.ts

import {
    RaRecord,
    Identifier,
    DataProvider,
    CreateParams,
    CreateResult,
    DeleteManyParams,
    DeleteManyResult,
    DeleteParams,
    DeleteResult,
    GetListParams,
    GetListResult,
    GetManyParams,
    GetManyReferenceParams,
    GetManyReferenceResult,
    GetManyResult,
    GetOneParams,
    GetOneResult,
    QueryFunctionContext,
    UpdateManyParams,
    UpdateManyResult,
    UpdateParams,
    UpdateResult,
} from 'react-admin';
import { db, IFrontend } from './IndexDB';

const AppDataProvider: DataProvider = {
    getList: async function <RecordType extends RaRecord = any>(resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
        const frontends = await db.frontends.toArray();
        const result = { data: frontends as unknown as RecordType[], total: frontends.length };
        console.log('AppDataProvider.getList', JSON.stringify(result, null, 2));
        return result;
    },
    getOne: async function <RecordType extends RaRecord = any>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
        const frontend = await db.frontends.get(Number(params.id));
        if (!frontend) throw new Error(`Frontend with id ${params.id} not found`);
        const result = { data: frontend as unknown as RecordType };
        console.log('AppDataProvider.getOne', JSON.stringify(result, null, 2));
        return result;
    },
    getMany: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        const frontends = await db.frontends.bulkGet(params.ids.map(id => Number(id)));
        const result = { data: frontends.filter(f => f !== undefined) as unknown as RecordType[] };
        console.log('AppDataProvider.getMany', JSON.stringify(result, null, 2));
        return result;
    },
    getManyReference: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        const frontends = await db.frontends.toArray();
        const filteredFrontends = frontends.filter(frontend => frontend[params.target as keyof IFrontend] === params.id);
        const result = { data: filteredFrontends as unknown as RecordType[], total: filteredFrontends.length };
        console.log('AppDataProvider.getManyReference', JSON.stringify(result, null, 2));
        return result;
    },
    update: function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        const updated: IFrontend = {
            id: Number(params.id),
            name: resource,
            screens: params.data.screens,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>),
        };
        return db.updateFrontend(Number(params.id), updated).then((id) => ({ data: { ...params.data, id } } as UpdateResult<RecordType>));
    },
    updateMany: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        const updates: Partial<IFrontend> = {
            name: resource,
            screens: params.data.screens,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>)
        };
    
        const numericIds = params.ids.map(id => Number(id));
        const updatedIds = await db.updateManyFrontends(numericIds, updates);
        return { data: updatedIds };
    },
    create: function <RecordType extends Omit<RaRecord, 'id'> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
        const created: IFrontend = {
            id: Date.now(),
            name: resource,
            screens: params.data.screens,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>),
        };
        return db.createFrontend(created).then((id) => ({ data: { ...params.data, id } } as CreateResult<ResultRecordType>));
    },
    delete: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        await db.deleteFrontend(Number(params.id));
        if (!params.previousData) {
            throw new Error(`Previous data for id ${params.id} not found`);
        }
        return { data: params.previousData };
    },
    deleteMany: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        const numericIds = params.ids.map(id => Number(id));
        await db.deleteManyFrontends(numericIds);
        return { data: numericIds };
    }
};

export default AppDataProvider;