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
import { db, IFrontend, IScreen, IField } from './FrontendDB';

const FieldProvider: DataProvider = {
    getList: function <RecordType extends RaRecord = any>(resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    getOne: function <RecordType extends RaRecord = any>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    getMany: function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    getManyReference: function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    update: function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        const updated: IField = {
            id: params.id,
            name: resource,
            type: params.data.type,
            specifications: Object.keys(params.data).reduce((specs, key) => {
                if (key !== 'type') {
                    specs[key] = params.data[key];
                }
                return specs;
            }, {} as Record<string, any>),
        };
        return db.updateField(params.id, updated).then((id) => ({ data: { ...params.data, id } } as UpdateResult<RecordType>));
    },
    updateMany: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        // Define as atualizações comuns a todos os registros usando Partial<IField>
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
    
        // Executa a atualização em lote e retorna os IDs atualizados
        const numericIds = params.ids.map(id => Number(id));
        const updatedIds = await db.updateManyFields(numericIds, updates);
        return { data: updatedIds };
    },
    create: function <RecordType extends Omit<RaRecord, 'id'> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
        const created: IField = {
            id: undefined,
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
    delete: function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    deleteMany: function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    }
};

export default FieldProvider;