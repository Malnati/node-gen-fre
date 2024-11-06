// src/cache/IndexDBDataProvider.ts

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
import { db, IDatabaseSchema as IDataProviderSchema, IDatabaseSchema } from './GeradorDatabase';

const componentMapping: Record<string, string> = {
    string: 'TextField',
    number: 'NumberField',
    integer: 'NumberField',
    boolean: 'BooleanField',
};

const inputMapping: Record<string, string> = {
    string: 'TextInput',
    number: 'NumberInput',
    integer: 'NumberInput',
    boolean: 'BooleanInput',
};

interface IDataProviderSchema {
    id: Identifier;
    resourceName: string;
    fields: Array<{
        name: string;
        component: string;
        inputComponent: string;
    }>;
}

const IndexDBDataProvider: DataProvider = {
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
        const updatedSchema: IDatabaseSchema = {
            id: params.id,
            resourceName: resource,
            fields: Object.keys(params.data).map((key) => {
                const fieldType = params.data[key].type;
                return {
                    name: key,
                    component: componentMapping[fieldType] || 'TextField',
                    inputComponent: inputMapping[fieldType] || 'TextInput',
                };
            })
        };
        return db.update(updatedSchema);
    },

    updateMany: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        // Cria um array de Promises para atualizar cada registro individualmente
        const updatedIds = await Promise.all(
            params.ids.map(async (id) => {
                const schema: IDataProviderSchema = {
                    id,
                    resourceName: resource,
                    fields: Object.keys(params.data).map((key) => {
                        const fieldType = typeof params.data[key];
                        return {
                            name: key,
                            component: componentMapping[fieldType] || 'TextField',
                            inputComponent: inputMapping[fieldType] || 'TextInput',
                        };
                    }),
                };
    
                // Atualiza cada registro individualmente
                await db.update(schema);
                return id; // Retorna o ID atualizado
            })
        );
    
        return { data: updatedIds };
    },
    create: function <RecordType extends Omit<RaRecord, 'id'> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier; }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
        const createdSchema: IDatabaseSchema = {
            id: Date.now(),
            resourceName: resource,
            fields: Object.keys(params.data).map((key) => {
                const fieldType = params.data[key].type;
                return {
                    name: key,
                    component: componentMapping[fieldType] || 'TextField',
                    inputComponent: inputMapping[fieldType] || 'TextInput',
                };
            })
        };
        return db.create(createdSchema);
    },
    delete: function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    deleteMany: function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    }
};

export default IndexDBDataProvider;