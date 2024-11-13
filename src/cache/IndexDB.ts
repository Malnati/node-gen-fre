// src/cache/IndexDB.ts

import Dexie, { Table } from 'dexie';
import CRUDService from './CRUDService';

export interface ISpecification {
    id: number;
    type: 'field' | 'screen' | 'frontend' | 'database' | 'app' | 'platform' | 'microservice'; // Define o tipo de item relacionado
    referenceId: number; // ID do item relacionado (field, screen, frontend, app)
    key: string;         // Chave da especificação, por exemplo, "maxLength" ou "layout"
    value: any;          // Valor da especificação, que pode variar conforme o tipo
}

export interface IField {
    id: number;
    screenId: number; 
    name: string;
    label: string;
    type: string;
    max: number;
    specifications?: number[];
}

export interface IScreen {
    id: number;
    frontendId: number; 
    name: string;
    fields: number[];
    specifications?: number[];
}

export interface IFrontend {
    id: number;
    appId: number; 
    name: string;
    screens: number[];
    specifications?: number[];
}

export interface IPlatform {
    id: number;
    name: string;
    apps?: number[];
    specifications?: number[];
}

export interface IApp {
    id: number;
    platformId: number;
    name: string;
    microservices?: number[];
    frontends?: number[];
    specifications?: number[];
}

export interface IMicroService {
    id: number;
    appId: number; 
    name: string;
    databases?: number[];
    specifications?: number[];
}

export interface IDatabase {
    id: number;
    microserviceId: number; 
    host: string;
    port: string;
    database: string;
    user: string;
    dbType: string;
    specifications?: number[];
}

export class DB extends Dexie {
    platforms!: Table<IPlatform>;
    apps!: Table<IApp>;
    microservices!: Table<IMicroService>;
    databases!: Table<IDatabase>;
    fields!: Table<IField>;
    screens!: Table<IScreen>;
    frontends!: Table<IFrontend>;
    specifications!: Table<ISpecification>;

    platformService!: CRUDService<IPlatform>;
    appService!: CRUDService<IApp>;
    msService!: CRUDService<IMicroService>;
    dbService!: CRUDService<IDatabase>;
    fieldService!: CRUDService<IField>;
    screenService!: CRUDService<IScreen>;
    frontendService!: CRUDService<IFrontend>;
    specificationService!: CRUDService<ISpecification>;

    constructor() {
        super("DB");
        this.version(1).stores({
            platforms: "++id, name, *apps, *specifications",
            apps: "++id, platformId, name, *microservices, *frontends, *specifications",
            microservices: "++id, appId, name, *databases, *specifications",
            databases: "++id, microserviceId, host, port, database, user, dbType, *specifications",
            frontends: "++id, appId, name, *screens, *specifications",
            screens: "++id, frontendId, name, *fields, *specifications",
            fields: "++id, screenId, name, label, type, max, *specifications",
            specifications: "++id, type, referenceId, key" 
        });
        
        // Instanciando CRUDService para cada tabela
        this.platformService = new CRUDService(this.platforms);
        this.appService = new CRUDService(this.apps);
        this.msService = new CRUDService(this.microservices);
        this.dbService = new CRUDService(this.databases);
        this.fieldService = new CRUDService(this.fields);
        this.screenService = new CRUDService(this.screens);
        this.frontendService = new CRUDService(this.frontends);
        this.specificationService = new CRUDService(this.specifications);
    }

    async clearDatabase() {
        await db.apps.clear();
        await db.microservices.clear();
        await db.databases.clear();
        await db.fields.clear();
        await db.screens.clear();
        await db.frontends.clear();
    }

    // Adiciona os dados usando `put`, para substituir se o registro já existir
    async seedData() {
        
        await this.platforms.put({ id: 1, name: 'Mobiles', apps: [1, 2], specifications: [20, 21] });

        // Adiciona os dados de apps
        await this.apps.put({ id: 1, platformId: 1, name: 'Apple User', frontends: [1], microservices: [1], specifications: [11, 13] });
        await this.apps.put({ id: 2, platformId: 1, name: 'Apple Profile', frontends: [2], microservices: [2], specifications: [10, 12] });

        // Adiciona os dados de microservices
        await this.microservices.put({ id: 1, appId: 1, name: 'User', databases: [1], specifications: [14, 16] });
        await this.microservices.put({ id: 2, appId: 1, name: 'Profile', databases: [2], specifications: [15] });
        
        // Adiciona os dados de databases
        await this.databases.put({ id: 1, microserviceId: 1, host: 'localhost', port: '5432', database: 'user', user: 'postgres', dbType: 'postgres', specifications: [17, 19] });
        await this.databases.put({ id: 2, microserviceId: 2, host: 'localhost', port: '5432', database: 'profile', user: 'postgres', dbType: 'postgres', specifications: [18] });

        // Adiciona os dados de frontends
        await this.frontends.put({ id: 1, appId: 1, name: 'iOS Cocoa', screens: [1, 2], specifications: [7, 9]});
        await this.frontends.put({ id: 2, appId: 2, name: 'Android React', screens: [3, 4], specifications: [8] });

        // Adiciona os dados de screens para iOS
        await this.screens.put({ id: 1, frontendId: 1, name: 'User', fields: [1, 2, 3, 4], specifications: [26] });
        await this.screens.put({ id: 2, frontendId: 1, name: 'Profile', fields: [5, 6, 7], specifications: [27] });

        // Adiciona os dados de screens para Android
        await this.screens.put({ id: 3, frontendId: 2, name: 'User', fields: [1, 2, 3, 4], specifications: [28] });
        await this.screens.put({ id: 4, frontendId: 2, name: 'Profile', fields: [5, 6, 7], specifications: [29] });

        // Adiciona os dados de fields para iOS - User
        await this.fields.put({ id: 1, screenId: 1, name: 'user', label: 'name', type: 'string', max: 256, specifications: [1, 2] });
        await this.fields.put({ id: 2, screenId: 1, name: 'password', label: 'password', type: 'string', max: 256, specifications: [3, 4] });
        await this.fields.put({ id: 3, screenId: 1, name: 'e-mail', label: 'e-mail', type: 'string', max: 256, specifications: [5, 6] });
        await this.fields.put({ id: 4, screenId: 1, name: 'sms', label: 'sms', type: 'string', max: 256, specifications: [7, 8] });
        // Adiciona os dados de fields para iOS - Profile
        await this.fields.put({ id: 5, screenId: 2, name: 'name', label: 'Name', type: 'string', max: 256, specifications: [9, 10] });
        await this.fields.put({ id: 6, screenId: 2, name: 'company', label: 'Company', type: 'string', max: 256, specifications: [11, 12] });
        await this.fields.put({ id: 7, screenId: 2, name: 'title', label: 'Title', type: 'string', max: 256, specifications: [13, 14] });

        // Adiciona os dados de fields para Android - User
        await this.fields.put({ id:  8, screenId: 3, name: 'user', label: 'name', type: 'string', max: 256, specifications: [15, 16] });
        await this.fields.put({ id:  9, screenId: 3, name: 'password', label: 'password', type: 'string', max: 256, specifications: [17, 18] });
        await this.fields.put({ id: 10, screenId: 3, name: 'e-mail', label: 'e-mail', type: 'string', max: 256, specifications: [19, 20] });
        await this.fields.put({ id: 11, screenId: 3, name: 'sms', label: 'sms', type: 'string', max: 256, specifications: [21, 22] });
        // Adiciona os dados de fields para Android - Profile
        await this.fields.put({ id: 12, screenId: 4, name: 'name', label: 'Name', type: 'string', max: 256, specifications: [23, 24] });
        await this.fields.put({ id: 13, screenId: 4, name: 'company', label: 'Company', type: 'string', max: 256, specifications: [25, 26] });
        await this.fields.put({ id: 14, screenId: 4, name: 'title', label: 'Title', type: 'string', max: 256, specifications: [27, 28] });

        // Adiciona os dados de specifications para cada tipo, incluindo novos exemplos para Platform, App, MicroService, Database
        await this.specifications.bulkPut([
        
            // Specifications for iOS - User Screen Fields
            { id: 1, type: 'field', referenceId: 1, key: 'placeholder', value: 'Enter username' },
            { id: 2, type: 'field', referenceId: 1, key: 'required', value: true },
            { id: 3, type: 'field', referenceId: 2, key: 'minLength', value: 8 },
            { id: 4, type: 'field', referenceId: 2, key: 'validationPattern', value: '^[A-Za-z0-9]+$' },
            { id: 5, type: 'field', referenceId: 3, key: 'validationPattern', value: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$' },
            { id: 6, type: 'field', referenceId: 3, key: 'placeholder', value: 'Enter email' },
            { id: 7, type: 'field', referenceId: 4, key: 'maxLength', value: 10 },
            { id: 8, type: 'field', referenceId: 4, key: 'validationPattern', value: '^[0-9]+$' },

            // Specifications for iOS - Profile Screen Fields
            { id:  9, type: 'field', referenceId: 5, key: 'required', value: true },
            { id: 10, type: 'field', referenceId: 5, key: 'placeholder', value: 'Enter your full name' },
            { id: 11, type: 'field', referenceId: 6, key: 'placeholder', value: 'Enter company name' },
            { id: 12, type: 'field', referenceId: 7, key: 'placeholder', value: 'Enter job title' },

            // Specifications for Android - User Screen Fields
            { id: 13, type: 'field', referenceId: 8, key: 'placeholder', value: 'Username' },
            { id: 14, type: 'field', referenceId: 8, key: 'autoCapitalize', value: 'none' },
            { id: 15, type: 'field', referenceId: 9, key: 'minLength', value: 8 },
            { id: 16, type: 'field', referenceId: 9, key: 'autoComplete', value: 'password' },
            { id: 17, type: 'field', referenceId: 10, key: 'placeholder', value: 'Email address' },
            { id: 18, type: 'field', referenceId: 10, key: 'validationPattern', value: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$' },
            { id: 19, type: 'field', referenceId: 11, key: 'maxLength', value: 12 },
            { id: 20, type: 'field', referenceId: 11, key: 'keyboardType', value: 'numeric' },

            // Specifications for Android - Profile Screen Fields
            { id: 21, type: 'field', referenceId: 12, key: 'placeholder', value: 'Enter name' },
            { id: 22, type: 'field', referenceId: 12, key: 'required', value: true },
            { id: 23, type: 'field', referenceId: 13, key: 'placeholder', value: 'Enter company' },
            { id: 24, type: 'field', referenceId: 13, key: 'autoCapitalize', value: 'words' },
            { id: 25, type: 'field', referenceId: 14, key: 'placeholder', value: 'Enter position title' },
            { id: 26, type: 'field', referenceId: 14, key: 'placeholder', value: 'Enter name' },
            { id: 27, type: 'field', referenceId: 14, key: 'placeholder', value: 'Enter company title' },
            { id: 28, type: 'field', referenceId: 14, key: 'placeholder', value: 'Enter the title' },
            
            // Specifications for screens - layout details
            { id: 26, type: 'screen', referenceId: 1, key: 'layout', value: 'grid' },
            { id: 27, type: 'screen', referenceId: 2, key: 'layout', value: 'list' },
            { id: 28, type: 'screen', referenceId: 3, key: 'layout', value: 'form' },
            { id: 29, type: 'screen', referenceId: 4, key: 'layout', value: 'table' },

            // Specifications for Frontends
            { id: 7, type: 'frontend', referenceId: 1, key: 'responsive', value: true },
            { id: 8, type: 'frontend', referenceId: 2, key: 'responsive', value: false },
            { id: 9, type: 'frontend', referenceId: 1, key: 'theme', value: 'dark' },

            // Specifications for Apps
            { id: 10, type: 'app', referenceId: 2, key: 'theme', value: 'light' },
            { id: 11, type: 'app', referenceId: 1, key: 'loginType', value: 'OAuth' },
            { id: 12, type: 'app', referenceId: 2, key: 'sso', value: 'Google' },
            { id: 13, type: 'app', referenceId: 1, key: 'sso', value: 'Apple' },

            // Specifications for Microservices
            { id: 14, type: 'microservice', referenceId: 1, key: 'version', value: '1.0.0' },
            { id: 15, type: 'microservice', referenceId: 2, key: 'healthCheck', value: '/health' },
            { id: 16, type: 'microservice', referenceId: 1, key: 'retryPolicy', value: { maxRetries: 3, interval: 1000 } },

            // Specifications for Databases
            { id: 17, type: 'database', referenceId: 1, key: 'connectionTimeout', value: 5000 },
            { id: 18, type: 'database', referenceId: 2, key: 'poolSize', value: 10 },
            { id: 19, type: 'database', referenceId: 1, key: 'ssl', value: true },

            // Specifications for Platforms
            { id: 20, type: 'platform', referenceId: 1, key: 'region', value: 'US-East' },
            { id: 21, type: 'platform', referenceId: 1, key: 'supportEmail', value: 'support@platform.com' }
        ]);
    }
}

export const db = new DB();