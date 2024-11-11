// src/cache/FieldProvider.ts

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
import { db, IField } from './IndexDB';

const FieldProvider: DataProvider = {
    getList: async function <RecordType extends RaRecord = any>(resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
        const fields = await db.fields.toArray();
        return { data: fields as unknown as RecordType[], total: fields.length };
    },
    getOne: async function <RecordType extends RaRecord = any>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
        const field = await db.fields.get(Number(params.id));
        if (!field) throw new Error(`Field with id ${params.id} not found`);
        return { data: field as unknown as RecordType };
    },
    getMany: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        const fields = await db.fields.bulkGet(params.ids.map(id => Number(id)));
        return { data: fields.filter(f => f !== undefined) as unknown as RecordType[] };
    },
    getManyReference: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        const fields = await db.fields.toArray();
        const filteredFields = fields.filter(field => field[params.target as keyof IField] === params.id);
        return { data: filteredFields as unknown as RecordType[], total: filteredFields.length };
    },
    update: function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        const updated: IField = {
            id: Number(params.id),
            name: resource,
            type: params.data.type,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>),
        };
        return db.updateField(Number(params.id), updated).then((id) => ({ data: { ...params.data, id } } as UpdateResult<RecordType>));
    },
    updateMany: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        const updates: Partial<IField> = {
            name: resource,
            type: params.data.type,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>)
        };
    
        const numericIds = params.ids.map(id => Number(id));
        const updatedIds = await db.updateManyFields(numericIds, updates);
        return { data: updatedIds };
    },
    create: function <RecordType extends Omit<RaRecord, 'id'> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
        const created: IField = {
            id: Date.now(),
            name: resource,
            type: params.data.type,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>),
        };
        return db.createField(created).then((id) => ({ data: { ...params.data, id } } as CreateResult<ResultRecordType>));
    },
    delete: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        await db.deleteField(Number(params.id));
        if (!params.previousData) {
            throw new Error(`Previous data for id ${params.id} not found`);
        }
        return { data: params.previousData };
    },
    deleteMany: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        const numericIds = params.ids.map(id => Number(id));
        await db.deleteManyFields(numericIds);
        return { data: numericIds };
    }
};

export default FieldProvider;