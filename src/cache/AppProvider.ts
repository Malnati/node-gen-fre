// src/cache/AppProvider.ts

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
import { db, IApp } from './IndexDB';

const AppProvider: DataProvider = {
    getList: async function <RecordType extends RaRecord = any>(resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
        const apps = await db.apps.toArray();
        const result = { data: apps as unknown as RecordType[], total: apps.length };
        console.log('AppProvider.getList', JSON.stringify(result, null, 2));
        return result;
    },
    getOne: async function <RecordType extends RaRecord = any>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
        const app = await db.apps.get(Number(params.id));
        if (!app) throw new Error(`App with id ${params.id} not found`);
        const result = { data: app as unknown as RecordType };
        console.log('AppProvider.getOne', JSON.stringify(result, null, 2));
        return result;
    },
    getMany: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        const apps = await db.apps.bulkGet(params.ids.map(id => Number(id)));
        const result = { data: apps.filter(f => f !== undefined) as unknown as RecordType[] };
        console.log('AppProvider.getMany', JSON.stringify(result, null, 2));
        return result;
    },
    getManyReference: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        const apps = await db.apps.toArray();
        const filteredApps = apps.filter(app => app[params.target as keyof IApp] === params.id);
        const result = { data: filteredApps as unknown as RecordType[], total: filteredApps.length };
        console.log('AppProvider.getManyReference', JSON.stringify(result, null, 2));
        return result;
    },
    update: function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        const updated: IApp = {
            id: Number(params.id),
            app: resource,
            host: params.data.host,
            port: params.data.port,
            database: params.data.database,
            user: params.data.user,
            dbType: params.data.dbType,
        };
        return db.updateApp(Number(params.id), updated).then((id) => ({ data: { ...params.data, id } } as UpdateResult<RecordType>));
    },
    updateMany: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        const updates: Partial<IApp> = {
            app: resource,
            host: params.data.host,
            port: params.data.port,
            database: params.data.database,
            user: params.data.user,
            dbType: params.data.dbType,
        };
        const numericIds = params.ids.map(id => Number(id));
        const updatedIds = await db.updateManyApps(numericIds, updates);
        return { data: updatedIds };
    },
    create: function <RecordType extends Omit<RaRecord, 'id'> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
        const created: IApp = {
            id: Date.now(),
            app: resource,
            host: params.data.host,
            port: params.data.port,
            database: params.data.database,
            user: params.data.user,
            dbType: params.data.dbType,
        };
        return db.createApp(created).then((id) => ({ data: { ...params.data, id } } as CreateResult<ResultRecordType>));
    },
    delete: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        await db.deleteApp(Number(params.id));
        if (!params.previousData) {
            throw new Error(`Previous data for id ${params.id} not found`);
        }
        return { data: params.previousData };
    },
    deleteMany: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        const numericIds = params.ids.map(id => Number(id));
        await db.deleteManyApps(numericIds);
        return { data: numericIds };
    }
};

export default AppProvider;