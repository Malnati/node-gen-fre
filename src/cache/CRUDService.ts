// src/cache/CRUDService.ts

import { Table, UpdateSpec } from 'dexie';

export default class CRUDService<T> {
    constructor(private table: Table<T>) {}

    async getAll(): Promise<T[]> {
        return await this.table.toArray();
    }

    async getOne(id: number): Promise<T | undefined> {
        return await this.table.get(id);
    }

    async create(item: T): Promise<number> {
        return await this.table.add(item);
    }

    async update(id: number, updates: Partial<T>): Promise<number> {
        return await this.table.update(id, updates as UpdateSpec<T>);
    }

    async updateMany(ids: number[], updates: Partial<T>): Promise<number[]> {
        const updatedIds: number[] = [];
        await this.table.db.transaction('rw', this.table, async () => {
            for (const id of ids) {
                await this.table.update(id, updates as UpdateSpec<T>);
                updatedIds.push(id);
            }
        });
        return updatedIds;
    }

    async delete(id: number): Promise<void> {
        await this.table.delete(id);
    }

    async deleteMany(ids: number[]): Promise<void> {
        await this.table.bulkDelete(ids);
    }
}