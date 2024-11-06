// src/db.ts
import Dexie, { Table } from 'dexie';

// Definindo a interface para o esquema
export interface Field {
    name: string;
    component: string;
    inputComponent: string;
}

export interface Schema {
    id?: number;
    resourceName: string;
    fields: Field[];
}

// Criando a classe Dexie Database
export class AppDatabase extends Dexie {
    schemas!: Table<Schema>;

    constructor() {
        super("AppDatabase");
        this.version(1).stores({
            schemas: "++id, resourceName"  // '++id' define o ID autoincremental
        });
    }
}

export const db = new AppDatabase();