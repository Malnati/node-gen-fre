// src/cache/DataProviderFactory.ts

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
    UpdateManyParams,
    UpdateManyResult,
    UpdateParams,
    UpdateResult,
    QueryFunctionContext,
} from 'react-admin';
import CRUDService from '../cache/CRUDService';

const TableDataProviderFactory = <T extends RaRecord>(service: CRUDService<T>): DataProvider => ({
    getList: async function <RecordType extends RaRecord = T>(resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
        const items = await service.getAll();
        return { data: items as unknown as RecordType[], total: items.length };
    },
    getOne: async function <RecordType extends RaRecord = T>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
        const item = await service.getOne(Number(params.id));
        if (!item) throw new Error(`${resource} with id ${params.id} not found`);
        return { data: item as unknown as RecordType };
    },
    getMany: async function <RecordType extends RaRecord = T>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        const items = await service.bulkGet(params.ids.map(id => Number(id)));
        return { data: items.filter(i => i !== undefined) as unknown as RecordType[] };
    },
    getManyReference: async function <RecordType extends RaRecord = T>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        const items = await service.getAll();
        const filteredItems = items.filter(item => item[params.target as keyof T] === params.id);
        return { data: filteredItems as unknown as RecordType[], total: filteredItems.length };
    },
    update: async function <RecordType extends RaRecord = T>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        const updates = params.data as Partial<T>;
        await service.update(Number(params.id), updates);
        return { data: { ...params.data, id: params.id } as RecordType };
    },
    updateMany: async function <RecordType extends RaRecord = T>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        const updates = params.data as Partial<T>;
        const numericIds = params.ids.map(id => Number(id));
        const updatedIds = await service.updateMany(numericIds, updates);
        return { data: updatedIds };
    },
    create: async function <RecordType extends Omit<RaRecord, 'id'> = T, ResultRecordType extends RaRecord = RecordType & { id: Identifier }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
        const item = params.data as T;
        const id = await service.create(item);
        return { data: { ...params.data, id } as unknown as ResultRecordType };
    },
    delete: async function <RecordType extends RaRecord = T>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        await service.delete(Number(params.id));
        if (!params.previousData) {
            throw new Error(`Previous data for id ${params.id} not found`);
        }
        return { data: params.previousData };
    },
    deleteMany: async function <RecordType extends RaRecord = T>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        const numericIds = params.ids.map(id => Number(id));
        await service.deleteMany(numericIds);
        return { data: numericIds };
    }
});

export default TableDataProviderFactory;