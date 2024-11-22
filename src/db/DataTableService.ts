// src/db/DataTableService.ts

import { Table, UpdateSpec } from 'dexie';

/**
 * Classe que fornece serviços para manipulação de dados em uma tabela do banco de dados Dexie.
 * 
 * Esta classe define métodos para operações CRUD (Create, Read, Update, Delete) em uma tabela de dados.
 * 
 * @template T - O tipo de dados armazenados na tabela.
 * 
 * @example
 * const dataTableService = new DataTableService<MyDataType>(myTable);
 * 
 * // Obter todos os registros
 * const allItems = await dataTableService.getAll();
 * 
 * // Obter um registro pelo ID
 * const item = await dataTableService.getOne(1);
 * 
 * // Criar um novo registro
 * const newItemId = await dataTableService.create({ name: 'New Item' });
 * 
 * // Atualizar um registro
 * const updatedItemId = await dataTableService.update(1, { name: 'Updated Item' });
 * 
 * // Deletar um registro
 * await dataTableService.delete(1);
 * 
 * @see {@link https://dexie.org/docs/Table/Table|Dexie Table}
 */
export default class DataTableService<T> {
    
    /**
     * Cria uma instância de DataTableService.
     * 
     * @param table - A tabela do Dexie que será manipulada por esta instância.
     */
    constructor(private table: Table<T>) {}

    /**
     * Obtém todos os registros da tabela.
     * 
     * @returns Uma Promise que resolve com um array de todos os registros.
     */
    async getAll(): Promise<T[]> {
        return await this.table.toArray();
    }

    /**
     * Obtém um registro da tabela pelo ID.
     * 
     * @param id - O ID do registro a ser obtido.
     * @returns Uma Promise que resolve com o registro, ou undefined se não for encontrado.
     */
    async getOne(id: number): Promise<T | undefined> {
        return await this.table.get(id);
    }

    /**
     * Obtém múltiplos registros da tabela pelos IDs.
     * 
     * @param ids - Um array de IDs dos registros a serem obtidos.
     * @returns Uma Promise que resolve com um array de registros, ou undefined para IDs não encontrados.
     */
    async bulkGet(ids: number[]): Promise<(T | undefined)[]> {
        return await this.table.bulkGet(ids);
    }
    
    /**
     * Cria um novo registro na tabela.
     * 
     * @param item - O registro a ser criado.
     * @returns Uma Promise que resolve com o ID do novo registro.
     */
    async create(item: T): Promise<number> {
        return await this.table.add(item);
    }

    /**
     * Atualiza um registro na tabela pelo ID.
     * 
     * @param id - O ID do registro a ser atualizado.
     * @param updates - Um objeto contendo os campos a serem atualizados.
     * @returns Uma Promise que resolve com o número de registros atualizados.
     */
    async update(id: number, updates: Partial<T>): Promise<number> {
        return await this.table.update(id, updates as UpdateSpec<T>);
    }

    /**
     * Atualiza múltiplos registros na tabela pelos IDs.
     * 
     * @param ids - Um array de IDs dos registros a serem atualizados.
     * @param updates - Um objeto contendo os campos a serem atualizados.
     * @returns Uma Promise que resolve com um array de IDs dos registros atualizados.
     */
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

    /**
     * Deleta um registro da tabela pelo ID.
     * 
     * @param id - O ID do registro a ser deletado.
     * @returns Uma Promise que resolve quando o registro for deletado.
     */
    async delete(id: number): Promise<void> {
        await this.table.delete(id);
    }

    /**
     * Deleta múltiplos registros da tabela pelos IDs.
     * 
     * @param ids - Um array de IDs dos registros a serem deletados.
     * @returns Uma Promise que resolve quando os registros forem deletados.
     */
    async deleteMany(ids: number[]): Promise<void> {
        await this.table.bulkDelete(ids);
    }
}