// src/cache/GeradorDatabase.ts

import Dexie, { Table } from 'dexie';
import { RaRecord, CreateResult } from 'react-admin';
import("ra-core")

// Definindo a interface para o esquema
export interface IField {
    name: string;
    component: string;
    inputComponent: string;
}

// Ajuste do Schema para estender RaRecord
export interface IDatabaseSchema extends RaRecord<any> {  // Garante que id seja um número
    resourceName: string;
    fields: IField[];
}

// Criando a classe Dexie Database
export class GeradorDatabase extends Dexie {
    
    async create(schema: IDatabaseSchema): Promise<CreateResult> {
        const id = await this.schemas.add(schema); // Dexie autoincrementa o ID
        return { data: { ...schema, id } };
    }
    
    async update(schema: IDatabaseSchema): Promise<CreateResult> {
        const existingRecord = await this.schemas.get(schema.id);
        
        if (existingRecord) {
            await this.schemas.update(schema.id, schema);
            return { data: schema };
        } else {
            throw new Error(`Registro com ID ${schema.id} não encontrado.`);
        }
    }

    schemas!: Table<IDatabaseSchema>;

    constructor() {
        super("GeradorDatabase");
        this.version(1).stores({
            schemas: "++id, resourceName"  // '++id' define o ID autoincremental
        });
    }
}

export const db = new GeradorDatabase();