// src/cache/IndexDB.ts

import Dexie, { Table } from 'dexie';
import CRUDService from './CRUDService';

export interface IId {
    id: number;
}

export interface IMetadata extends IId {
    referenceId: number; // ID do item relacionado (field, screen, frontend, app)
    key: string;         // Chave da especificação, por exemplo, "maxLength" ou "layout"
    value: any;          // Valor da especificação, que pode variar conforme o tipo
}

export interface ISpecification extends IMetadata {
    type: 'field' | 'screen' | 'frontend' | 'database' | 'app' | 'platform' | 'microservice' | 'feature' | 'attribute'; // Define o tipo de item relacionado
}

export interface IAttribute extends IMetadata {
    type: 'field' | 'screen' | 'frontend' | 'database' | 'app' | 'microservice' | 'feature' | 'login' | 'dashboard'; // Define o tipo de item relacionado
}

export interface IReferenceInputAttribute extends IMetadata {
    type: 'label' | 'perPage' | 'reference' | 'sort' | 'source' ; 
}

export interface IBooleanInputAttribute extends IMetadata {
    type: 'options' ; 
}

export interface ISearchInputAttribute extends IMetadata {
    type: 'placeholder' | 'resettable' ; 
}

export interface INumberInputAttribute extends IMetadata {
    type: 'max' | 'min' | 'step'; 
}

export interface ITextInputAttribute extends IMetadata {
    type: 'multiline' | 'resettable'; 
}

export interface IRichTextInputAttribute extends IMetadata {
    type: 'toolbar' ;
}

export interface IAutocompleteInputAttribute extends IMetadata {
    type: 'AutocompleteInput' | 'source' | 'choices' | 'create' | 'debounce' | 'emptyText' | 'emptyValue' | 'optionText' | 'optionValue' | 'translateChoice'; 
}

export interface IPasswordAttribute extends IMetadata {
    type: 'initiallyVisible';
}

export interface ISelectInputAttribute extends IMetadata {
    type: 'choices' | 'emptyText' | 'emptyValue' | 'resettable' | 'translateChoice';
}

export interface IField extends IId {
    screenId: number; 
    name: string;
    label: string;
    type: string;
    max: number;
    specifications?: number[];
}

export interface IScreen extends IId {
    frontendId: number; 
    name: string;
    fields: number[];
    specifications?: number[];
}

export interface IDashboard extends IScreen, IId {
    attributes: number[];
}

export interface ILogin extends IScreen, IId {
    attributes: number[];
}

export interface IFrontend extends IId {
    appId: number; 
    name: string;
    screens: number[];
    specifications?: number[];
}

export interface IPlatform extends IId {
    name: string;
    apps?: number[];
    specifications?: number[];
}

export interface IFeature extends IId {
    name: string;
    description: string;
    attributes?: number[];
    specifications?: number[];
}

export interface IPlatformFeature extends IFeature {
    platformId: number;
}

export interface IApp extends IId {
    platformId: number;
    name: string;
    microservices?: number[];
    frontends?: number[];
    specifications?: number[];
}

export interface IMicroService extends IId {
    appId: number; 
    name: string;
    databases?: number[];
    specifications?: number[];
}

export interface IDatabase extends IId {
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
    dashboards!: Table<IDashboard>;
    logins!: Table<ILogin>;
    frontends!: Table<IFrontend>;
    specifications!: Table<ISpecification>;
    attributes!: Table<IAttribute>;
    textAttributes!: Table<ITextFieldAttribute>;

    platformService!: CRUDService<IPlatform>;
    appService!: CRUDService<IApp>;
    msService!: CRUDService<IMicroService>;
    dbService!: CRUDService<IDatabase>;
    fieldService!: CRUDService<IField>;
    screenService!: CRUDService<IScreen>;
    dashboardService!: CRUDService<IDashboard>;
    loginService!: CRUDService<ILogin>;
    frontendService!: CRUDService<IFrontend>;
    specificationService!: CRUDService<ISpecification>;
    attributeService!: CRUDService<IAttribute>;
    textAttributeService!: CRUDService<ITextFieldAttribute>;

    constructor() {
        super("DB");

        this.clearDatabase();

        this.version(1).stores({
            platforms: "++id, name, *apps, *specifications",
            apps: "++id, platformId, name, *microservices, *frontends, *attributes, *specifications",
            microservices: "++id, appId, name, *databases, *attributes, *specifications",
            databases: "++id, microserviceId, host, port, database, user, dbType, *specifications",
            frontends: "++id, appId, name, *screens, *specifications",
            screens: "++id, frontendId, name, *fields, *specifications",
            dashboards: "++id, frontendId, name, *fields, *attributes, *specifications",
            logins: "++id, frontendId, name, *fields, *attributes, *specifications",
            fields: "++id, screenId, name, label, type, max, *specifications",
            specifications: "++id, type, referenceId, key",
            attributes: "++id, type, referenceId, key", 
            textAttributes: "++id, type, referenceId, key", 
        });
        
        // Instanciando CRUDService para cada tabela
        this.platformService = new CRUDService(this.platforms);
        this.appService = new CRUDService(this.apps);
        this.msService = new CRUDService(this.microservices);
        this.dbService = new CRUDService(this.databases);
        this.fieldService = new CRUDService(this.fields);
        this.screenService = new CRUDService(this.screens);
        this.dashboardService = new CRUDService(this.dashboards);
        this.loginService = new CRUDService(this.logins);
        this.frontendService = new CRUDService(this.frontends);
        this.specificationService = new CRUDService(this.specifications);
        this.attributeService = new CRUDService(this.attributes);
        this.textAttributeService = new CRUDService(this.textAttributes);

        this.seedData();
    }

    async clearDatabase() {
        await db.platforms.bulkDelete(await db.platforms.toCollection().primaryKeys());
        await db.apps.bulkDelete(await db.apps.toCollection().primaryKeys());
        await db.microservices.bulkDelete(await db.microservices.toCollection().primaryKeys());
        await db.databases.bulkDelete(await db.databases.toCollection().primaryKeys());
        await db.fields.bulkDelete(await db.fields.toCollection().primaryKeys());
        await db.screens.bulkDelete(await db.screens.toCollection().primaryKeys());
        await db.dashboards.bulkDelete(await db.dashboards.toCollection().primaryKeys());
        await db.logins.bulkDelete(await db.logins.toCollection().primaryKeys());
        await db.frontends.bulkDelete(await db.frontends.toCollection().primaryKeys());
        await db.specifications.bulkDelete(await db.specifications.toCollection().primaryKeys());
        await db.attributes.bulkDelete(await db.attributes.toCollection().primaryKeys());
        await db.textAttributes.bulkDelete(await db.textAttributes.toCollection().primaryKeys());
    }

    // Adiciona os dados usando `put`, para substituir se o registro já existir
    async seedData() {
        
        await this.platforms.put({ id: 1, name: 'Gerador', apps: [1, 2], specifications: [20, 21] });

        // Adiciona os dados de apps
        await this.apps.put({ id: 1, platformId: 1, name: 'Users', frontends: [1], microservices: [1], specifications: [11, 13] });
        await this.apps.put({ id: 2, platformId: 1, name: 'Profiles', frontends: [2], microservices: [2], specifications: [10, 12] });

        // Adiciona os dados de microservices
        await this.microservices.put({ id: 1, appId: 1, name: 'User', databases: [1], specifications: [14, 16] });
        await this.microservices.put({ id: 2, appId: 1, name: 'Profile', databases: [2], specifications: [15] });
        
        // Adiciona os dados de databases
        await this.databases.put({ id: 1, microserviceId: 1, host: 'localhost', port: '5432', database: 'user', user: 'postgres', dbType: 'postgres', specifications: [17, 19] });
        await this.databases.put({ id: 2, microserviceId: 2, host: 'localhost', port: '5432', database: 'profile', user: 'postgres', dbType: 'postgres', specifications: [18] });

        // Adiciona os dados de frontends
        await this.frontends.put({ id: 1, appId: 1, name: 'Web Desktop', screens: [], specifications: []});

        // Adiciona os dados de screens 
        await this.logins.put({ id:  1, frontendId: 1, name: 'Login', fields: [], attributes: [1, 2, 3, 4], specifications: [] });
        // Adiciona os dados de specifications para cada tipo, incluindo novos exemplos para Platform, App, MicroService, Database, etc
        await this.attributes.bulkPut([
            // Attributes for login
            { id:  1, type: 'login', referenceId: 1, key: 'Typography-Welcome', value: 'Bem-vindo' },
            { id:  2, type: 'login', referenceId: 1, key: 'Typography-How-to-Login', value: 'Para acessar o sistema, faça login com o Google:' },
            { id:  3, type: 'login', referenceId: 1, key: 'Typography-Button', value: 'Login com Google' },
            { id:  4, type: 'login', referenceId: 1, key: 'Google-OAuth-Provider-ID', value: '178353359157-3m13s46p97pdgl35pfmri5a5g6737qpp.apps.googleusercontent.com' },
        ]);
        
        await this.dashboards.put({ id:  1, frontendId: 1, name: 'Dashboard', fields: [], attributes: [5, 6, 7, 8], specifications: [] });
        await this.attributes.bulkPut([
            // Attributes for dashboard
            { id:  5, type: 'dashboard', referenceId: 1, key: 'Typography-CardHeader-title', value: 'Bem-vindo ao sistema' },
            { id:  6, type: 'dashboard', referenceId: 1, key: 'Typography-CardHeader-subheader', value: 'Id consectetur aliqua laborum amet proident tempor aliquip aliqua fugiat sit laboris qui incididunt proident. Sit do id laboris sunt adipisicing pariatur amet. Proident do sunt incididunt minim duis non cillum ad enim cillum proident reprehenderit eu. Commodo amet duis incididunt aliquip cillum dolore excepteur culpa est non nisi laborum et. Consequat fugiat amet ad culpa elit id ex ea excepteur occaecat. Irure magna qui Lorem eiusmod dolor cillum do minim.' },
            { id:  7, type: 'dashboard', referenceId: 1, key: 'Typography-CardContent', value: 'Amet duis eu non do exercitation consequat irure Lorem nisi do Lorem est anim. Consectetur laboris et anim et incididunt pariatur ad ullamco consectetur reprehenderit occaecat in exercitation pariatur. Excepteur incididunt consectetur aute minim consequat velit aute mollit sint. Pariatur labore aliquip magna.' },
            { id:  8, type: 'dashboard', referenceId: 1, key: 'Typography-Box', value: 'Occaecat elit qui duis commodo dolore ex est velit non pariatur. Labore eu cillum exercitation. Eu mollit ut laboris. In labore occaecat minim veniam in reprehenderit id sunt. Incididunt excepteur Lorem officia velit fugiat. Quis officia eu ullamco veniam ipsum sint nisi eiusmod. Aliquip quis mollit proident aliquip nisi do commodo aliquip est fugiat eiusmod exercitation quis ad. Officia eiusmod magna qui id minim laboris.' },
        ]);

        await this.screens.put({ id:  3, frontendId: 1, name: 'List User', fields: [1, 2, 3, 4], specifications: [] });
        // Adiciona os dados de fields - User
        await this.fields.put({ id: 1, screenId: 1, name: 'user', label: 'name', type: 'string', max: 256, specifications: [1, 2] });
        await this.fields.put({ id: 2, screenId: 1, name: 'password', label: 'password', type: 'string', max: 256, specifications: [3, 4] });
        await this.fields.put({ id: 3, screenId: 1, name: 'e-mail', label: 'e-mail', type: 'string', max: 256, specifications: [5, 6] });
        await this.fields.put({ id: 4, screenId: 1, name: 'sms', label: 'sms', type: 'string', max: 256, specifications: [7, 8] });
        await this.attributes.bulkPut([
            // Attributes for fields - User
            { id:  9,  type: 'field', referenceId: 1, key: 'multiline', value: '' },
            { id:  10, type: 'field', referenceId: 2, key: 'resettable', value: '' },
            { id:  12, type: 'field', referenceId: 2, key: 'text', value: '' },
            { id:  12, type: 'field', referenceId: 2, key: 'number', value: '' },
            { id:  11, type: 'field', referenceId: 2, key: 'rich-text', value: '' },
            { id:  11, type: 'field', referenceId: 2, key: 'rich-text-toolbar', value: '' },
        ]);

        await this.screens.put({ id:  4, frontendId: 1, name: 'Create User', fields: [1, 2, 3, 4], specifications: [26] });
        await this.screens.put({ id:  5, frontendId: 1, name: 'Update User', fields: [1, 2, 3, 4], specifications: [26] });
        await this.screens.put({ id:  6, frontendId: 1, name: 'Delete User', fields: [1, 2, 3, 4], specifications: [26] });
        await this.screens.put({ id:  7, frontendId: 1, name: 'List Profile', fields: [5, 6, 7], specifications: [27] });
        await this.screens.put({ id:  8, frontendId: 1, name: 'Create Profile', fields: [5, 6, 7], specifications: [27] });
        await this.screens.put({ id:  9, frontendId: 1, name: 'Update Profile', fields: [5, 6, 7], specifications: [27] });
        await this.screens.put({ id: 10, frontendId: 1, name: 'Delete Profile', fields: [5, 6, 7], specifications: [27] });

        // Adiciona os dados de fields - Profile
        await this.fields.put({ id: 5, screenId: 2, name: 'name', label: 'Name', type: 'string', max: 256, specifications: [9, 10] });
        await this.fields.put({ id: 6, screenId: 2, name: 'company', label: 'Company', type: 'string', max: 256, specifications: [11, 12] });
        await this.fields.put({ id: 7, screenId: 2, name: 'title', label: 'Title', type: 'string', max: 256, specifications: [13, 14] });

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