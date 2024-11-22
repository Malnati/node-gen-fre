import { Table } from "dexie";

/**
 * Interface que representa uma tabela de dados no banco de dados Dexie.
 * 
 * Esta interface define os métodos necessários para manipular uma tabela de dados,
 * incluindo inicialização, limpeza, inserção de dados e exclusão da tabela.
 * 
 * @template T - O tipo de dados armazenados na tabela.
 * 
 * @example
 * class MyDataTable implements IDataTable<MyDataType> {
 *     tb: Table<MyDataType>;
 *     
 *     constructor(table: Table<MyDataType>) {
 *         this.tb = table;
 *     }
 *     
 *     async initializeDatabase(_data: MyDataType[]): Promise<void> {
 *         // Implementação da inicialização do banco de dados
 *     }
 *     
 *     async clearDatabase(): Promise<void> {
 *         // Implementação da limpeza do banco de dados
 *     }
 *     
 *     async seedInputPropsData(data: MyDataType[]): Promise<void> {
 *         // Implementação da inserção de dados
 *     }
 *     
 *     async deleteDatabase(): Promise<void> {
 *         // Implementação da exclusão do banco de dados
 *     }
 *     
 *     getResorceTable(): Table<MyDataType> {
 *         return this.tb;
 *     }
 * }
 * 
 * @see {@link https://dexie.org/docs/Table/Table|Dexie Table}
 */
export interface IDataTable<T> {
    /**
     * A tabela de dados do Dexie.
     */
    tb: Table<T>;

    /**
     * Inicializa o banco de dados com os dados fornecidos.
     * 
     * @param _data - Os dados para inicializar o banco de dados.
     * @returns Uma Promise que resolve quando a inicialização estiver completa.
     */
    initializeDatabase(_data: T[]): Promise<void>;

    /**
     * Limpa todos os dados da tabela.
     * 
     * @returns Uma Promise que resolve quando a limpeza estiver completa.
     */
    clearDatabase(): Promise<void>;

    /**
     * Insere dados na tabela.
     * 
     * @param data - Os dados a serem inseridos.
     * @returns Uma Promise que resolve quando a inserção estiver completa.
     */
    seedInputPropsData(data: T[]): Promise<void>;

    /**
     * Exclui a tabela do banco de dados.
     * 
     * @returns Uma Promise que resolve quando a exclusão estiver completa.
     */
    deleteDatabase(): Promise<void>;

    /**
     * Retorna a tabela de dados do Dexie.
     * 
     * @returns A tabela de dados.
     */
    getResorceTable(): Table<T>;
}
