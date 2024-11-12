// src/cache/IndexDB.ts

import Dexie, { Table } from 'dexie';

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
    
    constructor() {
        super("DB");
        this.version(1).stores({
            apps: "++id, app, host, port, database, user, dbType",
            fields: "++id, name, type",
            screens: "++id, name, *fields",
            frontends: "++id, name, *screens"
        });
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

        // Adiciona os dados usando `put`, para substituir se o registro já existir
        await this.fields.put({ id: 1, name: 'Field 1', type: 'string', specifications: { maxLength: 255 } });
        await this.fields.put({ id: 2, name: 'Field 2', type: 'number', specifications: { max: 1000 } });

        await this.screens.put({ id: 1, name: 'Screen 1', fields: [1, 2], specifications: { layout: 'grid' } });
        await this.screens.put({ id: 2, name: 'Screen 2', fields: [2], specifications: { layout: 'list' } });

        await this.frontends.put({ id: 1, name: 'Frontend 1', screens: [1], specifications: { responsive: true } });
        await this.frontends.put({ id: 2, name: 'Frontend 2', screens: [2], specifications: { responsive: false } });
    }

    // CRUD functions for IApp
    async getListApps(): Promise<IApp[]> {
        return await this.apps.toArray();
    }

    async getOneApp(id: number): Promise<IApp | undefined> {
        return await this.apps.get(id);
    }

    async createApp(app: IApp): Promise<number> {
        return await this.apps.add(app);
    }

    async updateApp(id: number, updates: Partial<IApp>): Promise<number> {
        return await this.apps.update(id, updates);
    }

    async updateManyApps(ids: number[], updates: Partial<IApp>): Promise<number[]> {
        const updatedIds: number[] = [];
        await this.transaction('rw', this.apps, async () => {
            for (const id of ids) {
                await this.apps.update(id, updates);
                updatedIds.push(id);
            }
        });
        return updatedIds;
    }

    async deleteApp(id: number): Promise<void> {
        await this.apps.delete(id);
    }

    async deleteManyApps(ids: number[]): Promise<void> {
        await this.apps.bulkDelete(ids);
    }

    // CRUD functions for IField
    async getListFields(): Promise<IField[]> {
        return await this.fields.toArray();
    }

    async getOneField(id: number): Promise<IField | undefined> {
        return await this.fields.get(id);
    }

    async createField(field: IField): Promise<number> {
        return await this.fields.add(field);
    }

    async updateField(id: number, updates: Partial<IField>): Promise<number> {
        return await this.fields.update(id, updates);
    }

    async updateManyFields(ids: number[], updates: Partial<IField>): Promise<number[]> {
        const updatedIds: number[] = [];
        await this.transaction('rw', this.fields, async () => {
            for (const id of ids) {
                await this.fields.update(id, updates);
                updatedIds.push(id);
            }
        });
        return updatedIds;
    }

    async deleteField(id: number): Promise<void> {
        await this.fields.delete(id);
    }

    async deleteManyFields(ids: number[]): Promise<void> {
        await this.fields.bulkDelete(ids);
    }

    // CRUD functions for IScreen
    async getListScreens(): Promise<IScreen[]> {
        return await this.screens.toArray();
    }

    async getOneScreen(id: number): Promise<IScreen | undefined> {
        return await this.screens.get(id);
    }

    async createScreen(screen: IScreen): Promise<number> {
        return await this.screens.add(screen);
    }

    async updateScreen(id: number, updates: Partial<IScreen>): Promise<number> {
        return await this.screens.update(id, updates);
    }

    async updateManyScreens(ids: number[], updates: Partial<IScreen>): Promise<number[]> {
        const updatedIds: number[] = [];
        await this.transaction('rw', this.screens, async () => {
            for (const id of ids) {
                await this.screens.update(id, updates);
                updatedIds.push(id);
            }
        });
        return updatedIds;
    }

    async deleteScreen(id: number): Promise<void> {
        await this.screens.delete(id);
    }

    async deleteManyScreens(ids: number[]): Promise<void> {
        await this.screens.bulkDelete(ids);
    }

    // CRUD functions for IFrontend
    async getListFrontends(): Promise<IFrontend[]> {
        return await this.frontends.toArray();
    }

    async getOneFrontend(id: number): Promise<IFrontend | undefined> {
        return await this.frontends.get(id);
    }

    async createFrontend(frontend: IFrontend): Promise<number> {
        return await this.frontends.add(frontend);
    }

    async updateFrontend(id: number, updates: Partial<IFrontend>): Promise<number> {
        return await this.frontends.update(id, updates);
    }

    async updateManyFrontends(ids: number[], updates: Partial<IFrontend>): Promise<number[]> {
        const updatedIds: number[] = [];
        await this.transaction('rw', this.frontends, async () => {
            for (const id of ids) {
                await this.frontends.update(id, updates);
                updatedIds.push(id);
            }
        });
        return updatedIds;
    }

    async deleteFrontend(id: number): Promise<void> {
        await this.frontends.delete(id);
    }

    async deleteManyFrontends(ids: number[]): Promise<void> {
        await this.frontends.bulkDelete(ids);
    }
}

export const db = new DB();