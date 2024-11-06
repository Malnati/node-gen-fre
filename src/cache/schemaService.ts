// src/schemaService.ts
import { db, Schema } from './db';

// Função para adicionar um novo schema
export async function addSchema(schema: Schema): Promise<number> {
    return await db.schemas.add(schema);
}

// Função para obter todos os schemas
export async function getAllSchemas(): Promise<Schema[]> {
    return await db.schemas.toArray();
}

// Função para obter um schema por ID
export async function getSchemaById(id: number): Promise<Schema | undefined> {
    return await db.schemas.get(id);
}

// Função para atualizar um schema
export async function updateSchema(id: number, updatedSchema: Partial<Schema>): Promise<number> {
    return await db.schemas.update(id, updatedSchema);
}

// Função para deletar um schema
export async function deleteSchema(id: number): Promise<void> {
    await db.schemas.delete(id);
}