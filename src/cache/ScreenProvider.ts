// src/cache/ScreenProvider.ts

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
import { db, IScreen } from './IndexDB';

const ScreenProvider: DataProvider = {
    getList: async function <RecordType extends RaRecord = any>(resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
        const screens = await db.screens.toArray();
        return { data: screens as unknown as RecordType[], total: screens.length };
    },
    getOne: async function <RecordType extends RaRecord = any>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
        const screen = await db.screens.get(Number(params.id));
        if (!screen) throw new Error(`Screen with id ${params.id} not found`);
        return { data: screen as unknown as RecordType };
    },
    getMany: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        const screens = await db.screens.bulkGet(params.ids.map(id => Number(id)));
        return { data: screens.filter(f => f !== undefined) as unknown as RecordType[] };
    },
    getManyReference: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        const screens = await db.screens.toArray();
        const filteredScreens = screens.filter(screen => screen[params.target as keyof IScreen] === params.id);
        return { data: filteredScreens as unknown as RecordType[], total: filteredScreens.length };
    },
    update: function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        const updated: IScreen = {
            id: Number(params.id),
            name: resource,
            fields: params.data.fields,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>),
        };
        return db.updateScreen(Number(params.id), updated).then((id) => ({ data: { ...params.data, id } } as UpdateResult<RecordType>));
    },
    updateMany: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        const updates: Partial<IScreen> = {
            name: resource,
            fields: params.data.fields,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>)
        };
    
        const numericIds = params.ids.map(id => Number(id));
        const updatedIds = await db.updateManyScreens(numericIds, updates);
        return { data: updatedIds };
    },
    create: function <RecordType extends Omit<RaRecord, 'id'> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
        const created: IScreen = {
            id: undefined,
            name: resource,
            fields: params.data.fields,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>),
        };
        return db.createScreen(created).then((id) => ({ data: { ...params.data, id } } as CreateResult<ResultRecordType>));
    },
    delete: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        await db.deleteScreen(Number(params.id));
        if (!params.previousData) {
            throw new Error(`Previous data for id ${params.id} not found`);
        }
        return { data: params.previousData };
    },
    deleteMany: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        const numericIds = params.ids.map(id => Number(id));
        await db.deleteManyScreens(numericIds);
        return { data: numericIds };
    }
};

export default ScreenProvider;