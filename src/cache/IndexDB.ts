// src/cache/IndexDB.ts

import Dexie, { Table } from 'dexie';
import CRUDService from './CRUDService';

export interface ISpecification {
    id: number;
    type: 'field' | 'screen' | 'frontend' | 'app';  // Define o tipo de item relacionado
    referenceId: number; // ID do item relacionado (field, screen, frontend, app)
    key: string;         // Chave da especificação, por exemplo, "maxLength" ou "layout"
    value: any;          // Valor da especificação, que pode variar conforme o tipo
}

export interface IField {
    id: number;
    name: string;
    type: string;
    specifications?: Record<string, any>;
}

export interface IScreen {
    id: number;
    name: string;
    fields: number[];
    specifications?: Record<string, any>;
}

export interface IFrontend {
    id: number;
    name: string;
    screens: number[];
    specifications?: Record<string, any>;
}

export interface IApp {
    id: number;
    app: string;
    host: string;
    port: string;
    database: string;
    user: string;
    dbType: string;
}

export class DB extends Dexie {
    apps!: Table<IApp>;
    fields!: Table<IField>;
    screens!: Table<IScreen>;
    frontends!: Table<IFrontend>;
    specifications!: Table<ISpecification>;

    appService!: CRUDService<IApp>;
    fieldService!: CRUDService<IField>;
    screenService!: CRUDService<IScreen>;
    frontendService!: CRUDService<IFrontend>;
    specificationService!: CRUDService<ISpecification>;

    constructor() {
        super("DB");
        this.version(1).stores({
            apps: "++id, app, host, port, database, user, dbType, *specifications",
            fields: "++id, name, type, *specifications",
            screens: "++id, name, *fields, *specifications",
            frontends: "++id, name, *screens, *specifications",
            specifications: "++id, type, referenceId, key" 
        });
        
        // Instanciando CRUDService para cada tabela
        this.appService = new CRUDService(this.apps);
        this.fieldService = new CRUDService(this.fields);
        this.screenService = new CRUDService(this.screens);
        this.frontendService = new CRUDService(this.frontends);
        this.specificationService = new CRUDService(this.specifications);
    }

    async clearDatabase() {
        await db.apps.clear();
        await db.fields.clear();
        await db.screens.clear();
        await db.frontends.clear();
    }

    async seedData() {
        // Adiciona os dados usando `put`, para substituir se o registro já existir
        await this.apps.put({ id: 1, app: 'App 1', host: 'localhost', port: '5432', database: 'postgres', user: 'postgres', dbType: 'postgres' });
        await this.apps.put({ id: 2, app: 'App 2', host: 'localhost', port: '5432', database: 'postgres', user: 'postgres', dbType: 'postgres' });

        // Adiciona os dados de fields
        await this.fields.put({ id: 1, name: 'Field 1', type: 'string' });
        await this.fields.put({ id: 2, name: 'Field 2', type: 'number' });

        // Adiciona os dados de screens
        await this.screens.put({ id: 1, name: 'Screen 1', fields: [1, 2] });
        await this.screens.put({ id: 2, name: 'Screen 2', fields: [2] });

        // Adiciona os dados de frontends
        await this.frontends.put({ id: 1, name: 'Frontend 1', screens: [1] });
        await this.frontends.put({ id: 2, name: 'Frontend 2', screens: [2] });

        // Exemplo de carga inicial para cada tipo
        await this.specifications.bulkPut([
            { id: 1, type: 'field', referenceId: 1, key: 'maxLength', value: 255 },
            { id: 2, type: 'field', referenceId: 2, key: 'max', value: 1000 },
            { id: 3, type: 'screen', referenceId: 1, key: 'layout', value: 'grid' },
            { id: 4, type: 'screen', referenceId: 2, key: 'layout', value: 'list' },
            { id: 5, type: 'frontend', referenceId: 1, key: 'responsive', value: true },
            { id: 6, type: 'frontend', referenceId: 2, key: 'responsive', value: false },
            { id: 7, type: 'app', referenceId: 1, key: 'theme', value: true },
            { id: 8, type: 'app', referenceId: 1, key: 'theme', value: true },
            { id: 9, type: 'app', referenceId: 1, key: 'sso', value: true },
            { id: 10, type: 'app', referenceId: 2, key: 'sso', value: false }
        ]);
    }
}

export const db = new DB();