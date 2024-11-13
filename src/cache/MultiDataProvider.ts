// src/cache/MultiDataProvider.ts

import { DataProvider } from 'react-admin';

import DataProviderFactory from './DataProviderFactory';
import { db } from './IndexDB';

const PlatformProvider = DataProviderFactory(db.platformService);
const PlatformFeatureProvider = DataProviderFactory(db.platformFeatureService);
const AppProvider = DataProviderFactory(db.appService);
const MicroserviceProvider = DataProviderFactory(db.msService);
const FrontendProvider = DataProviderFactory(db.frontendService);
const DatabaseProvider = DataProviderFactory(db.dbService);
const FieldProvider = DataProviderFactory(db.fieldService);
const SpecificationProvider = DataProviderFactory(db.specificationService);
const ScreenProvider = DataProviderFactory(db.screenService);

// Mapeamento dinâmico de resources para data providers
const providersMap: Record<string, DataProvider> = {
  platforms: PlatformProvider,
  platformFeatures: PlatformFeatureProvider,
  apps: AppProvider,
  microservices: MicroserviceProvider,
  frontends: FrontendProvider,
  databases: DatabaseProvider,
  fields: FieldProvider,
  screens: ScreenProvider,
  specifications: SpecificationProvider,
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