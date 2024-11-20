import Dexie, { Table } from "dexie";

export class Database<T> extends Dexie {

    tb!: Table<T>;

    constructor(_databaseName: string, _recordDefinition: string, _data: T[]) {
        super(_databaseName);

        this.version(1).stores({
            tb: _recordDefinition,
        });

        // Executar inicialização após o construtor
        this.initializeDatabase(_data);
    }

    // Método async separado para garantir que o banco está inicializado antes de manipulação
    async initializeDatabase(_data: T[]) {
        // await this.deleteDatabase();
        await this.clearDatabase();
        // await this.seedData();
        await this.seedInputPropsData(_data);
    }

    async clearDatabase() {
        await this.tb.clear();
    }

    // Adiciona os dados usando `put`
    async seedInputPropsData(data: T[]) {
        await this.tb.bulkPut(data);
    }

    async deleteDatabase() {
        await this.tb.bulkDelete(await this.tb.toCollection().primaryKeys());
    }

}
