import Dexie, { Table } from "dexie";
import { IDataTable } from "./IDataTable";

/**
 * Classe que representa uma tabela de dados no banco de dados Dexie.
 * 
 * Esta classe estende a classe Dexie e implementa a interface IDataTable,
 * fornecendo métodos para inicialização, limpeza, inserção de dados e exclusão da tabela.
 * 
 * @template T - O tipo de dados armazenados na tabela.
 * 
 * @example
 * // Definição de um tipo de dados
 * interface MyDataType {
 *     id?: number;
 *     name: string;
 * }
 * 
 * // Criação de uma instância de DataTable
 * const myDataTable = new DataTable<MyDataType>('myDatabase', '++id, name', [
 *     { name: 'Item 1' },
 *     { name: 'Item 2' },
 * ]);
 * 
 * // Obter a tabela de recursos
 * const table = myDataTable.getResorceTable();
 * 
 * // Inicializar o banco de dados com novos dados
 * await myDataTable.initializeDatabase([
 *     { name: 'New Item 1' },
 *     { name: 'New Item 2' },
 * ]);
 * 
 * // Limpar a tabela
 * await myDataTable.clearDatabase();
 * 
 * // Inserir dados na tabela
 * await myDataTable.seedInputPropsData([
 *     { name: 'Seed Item 1' },
 *     { name: 'Seed Item 2' },
 * ]);
 * 
 * // Excluir a tabela
 * await myDataTable.deleteDatabase();
 * 
 * @see {@link https://dexie.org/docs/Table/Table|Dexie Table}
 */
export class DataTable<T> extends Dexie implements IDataTable<T> {

    /**
     * A tabela de dados do Dexie.
     */
    tb!: Table<T>;

    /**
     * Cria uma instância de DataTable.
     * 
     * @param _databaseName - O nome do banco de dados.
     * @param _recordDefinition - A definição do registro da tabela.
     * @param _data - Os dados iniciais para a tabela.
     */
    constructor(_databaseName: string, _recordDefinition: string, _data: T[]) {
        super(_databaseName);

        this.version(1).stores({
            tb: _recordDefinition,
        });

        // Executar inicialização após o construtor
        this.initializeDatabase(_data);
    }

    /**
     * Retorna a tabela de dados do Dexie.
     * 
     * @returns A tabela de dados.
     */
    getResorceTable(): Table<T> {
        return this.tb;
    }

    /**
     * Inicializa o banco de dados com os dados fornecidos.
     * 
     * @param _data - Os dados para inicializar o banco de dados.
     * @returns Uma Promise que resolve quando a inicialização estiver completa.
     */
    async initializeDatabase(_data: T[]) {
        // await this.deleteDatabase();
        await this.clearDatabase();
        // await this.seedData();
        await this.seedInputPropsData(_data);
    }

    /**
     * Limpa todos os dados da tabela.
     * 
     * @returns Uma Promise que resolve quando a limpeza estiver completa.
     */
    async clearDatabase() {
        await this.tb.clear();
    }

    /**
     * Insere dados na tabela.
     * 
     * @param data - Os dados a serem inseridos.
     * @returns Uma Promise que resolve quando a inserção estiver completa.
     */
    async seedInputPropsData(data: T[]) {
        await this.tb.bulkPut(data);
    }

    /**
     * Exclui a tabela do banco de dados.
     * 
     * @returns Uma Promise que resolve quando a exclusão estiver completa.
     */
    async deleteDatabase() {
        await this.tb.bulkDelete(await this.tb.toCollection().primaryKeys());
    }

}
