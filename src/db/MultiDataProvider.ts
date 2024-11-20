// src/cache/MultiDataProvider.ts

import { DataProvider } from 'react-admin';

import DataProviderFactory from './DataProviderFactory';
import { Database } from './Database';
import { IApp, IPlatform } from '../types/IMetadata';
import CRUDService from './CRUDService';

const platformsDB = new Database<IPlatform>('tb_platforms', "++id, name, *apps, *specifications", []);
const PlatformProvider = DataProviderFactory(new CRUDService<IPlatform>(platformsDB.table('tb_platforms')));

const appsDB = new Database<IApp>('tb_apps', '++id, platformId, name, *microservices, *frontends, *attributes, *specifications', []);
const AppProvider = DataProviderFactory(appsDB.table('tb_apps'));

const microservicesDB = new Database<I>('tb_micro_services', '++id, appId, name, *databases, *attributes, *specifications', []);
const MicroserviceProvider = DataProviderFactory(microservicesDB.table('tb_micro_services'));

const storesDB = new Database<I>('tb_stores', '++id, microserviceId, host, port, database, user, dbType, *specifications', []);
const StoresProvider = DataProviderFactory(storesDB.table('tb_stores'));

// Mapeamento dinâmico de resources para data providers
const providersMap: Record<string, DataProvider> = {
  platforms: PlatformProvider,
  apps: AppProvider,
  microservices: MicroserviceProvider,
  stores: StoresProvider,
};

const getProvider = (resource: string): DataProvider => {
    const provider = providersMap[resource];
    if (!provider) {
        throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
    }
    return provider;
};

const MultiDataProvider: DataProvider = {
    getList: (resource, params) => getProvider(resource).getList(resource, params),
    getOne: (resource, params) => getProvider(resource).getOne(resource, params),
    getMany: (resource, params) => getProvider(resource).getMany(resource, params),
    getManyReference: (resource, params) => getProvider(resource).getManyReference(resource, params),
    create: (resource, params) => getProvider(resource).create(resource, params),
    update: (resource, params) => getProvider(resource).update(resource, params),
    updateMany: (resource, params) => getProvider(resource).updateMany(resource, params),
    delete: (resource, params) => getProvider(resource).delete(resource, params),
    deleteMany: (resource, params) => getProvider(resource).deleteMany(resource, params),
};

export default MultiDataProvider;