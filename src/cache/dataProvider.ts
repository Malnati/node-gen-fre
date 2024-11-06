// src/cache/dataProvider.ts

import { DataProvider, GetListResult, GetOneResult, GetManyResult, CreateResult, GetManyReferenceResult, UpdateResult, UpdateManyResult, DeleteResult, DeleteManyResult } from 'react-admin';
import { db, Schema } from './db';

type RecordType = any; // Define RecordType or import it if defined elsewhere

const dataProvider: DataProvider = {
    
    async getList(resource, params): Promise<GetListResult<RecordType>> {
        const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
        const start = (page - 1) * perPage;
        const end = start + perPage;

        const allSchemas = await db.schemas.toArray();
        const schemas = allSchemas.slice(start, end);

        return {
            data: schemas,
        };
    },

    async getOne(resource, params): Promise<GetOneResult<RecordType>> {
        const schema = await db.schemas.get(params.id);
        if (!schema) throw new Error('Schema not found');
        return {
            data: schema,
        };
    },

    async getMany(resource, params): Promise<GetManyResult<RecordType>> {
        const schemas = await db.schemas.bulkGet(params.ids);
        return {
            data: schemas.filter(Boolean) as Schema[], // Remove qualquer valor `undefined`
        };
    },

    async getManyReference(resource, params): Promise<GetManyReferenceResult<RecordType>> {
        const { page, perPage } = params.pagination;
        const start = (page - 1) * perPage;
        const end = start + perPage;

        const allSchemas = await db.schemas
            .where(params.target)
            .equals(params.id)
            .toArray();
        const schemas = allSchemas.slice(start, end);

        return {
            data: schemas,
            total: allSchemas.length,
        };
    },

    async create(resource, params): Promise<CreateResult<RecordType>> {
        const schemaData: Schema = {
            resourceName: params.data.resourceName,
            fields: params.data.fields,
            ...params.data,
        };
        const id = await db.schemas.add(schemaData);
        return {
            data: { ...params.data, id },
        };
    },

    async update(resource, params): Promise<UpdateResult<RecordType>> {
        await db.schemas.update(params.id, params.data);
        const updatedSchema = await db.schemas.get(params.id);
        if (!updatedSchema) throw new Error('Schema not found after update');
        return {
            data: updatedSchema,
        };
    },

    async updateMany(resource, params): Promise<UpdateManyResult<RecordType>> {
        const updatedIds = await Promise.all(
            params.ids.map((id) => db.schemas.update(id, params.data))
        );
        return {
            data: updatedIds,
        };
    },

    async delete(resource, params): Promise<DeleteResult<RecordType>> {
        await db.schemas.delete(params.id);
        return {
            data: { id: params.id },
        };
    },

    async deleteMany(resource, params): Promise<DeleteManyResult<RecordType>> {
        await db.schemas.bulkDelete(params.ids);
        return {
            data: params.ids,
        };
    },
};

export default dataProvider;