// src/schemaService.ts
import { db, IDatabaseSchema } from './GeradorDatabase';

// Função para adicionar um novo schema
export async function addSchema(schema: IDatabaseSchema): Promise<number> {
    return await db.schemas.add(schema);
}

// Função para obter todos os schemas
export async function getAllSchemas(): Promise<IDatabaseSchema[]> {
    return await db.schemas.toArray();
}

// Função para obter um schema por ID
export async function getSchemaById(id: number): Promise<IDatabaseSchema | undefined> {
    return await db.schemas.get(id);
}

// Função para atualizar um schema
export async function updateSchema(id: number, updatedSchema: Partial<IDatabaseSchema>): Promise<number> {
    return await db.schemas.update(id, updatedSchema);
}

// Função para deletar um schema
export async function deleteSchema(id: number): Promise<void> {
    await db.schemas.delete(id);
}