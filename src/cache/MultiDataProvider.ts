// src/cache/MultiDataProvider.ts

import { DataProvider } from 'react-admin';

import FieldProvider from './FieldProvider';
import ScreenProvider from './ScreenProvider';
import FrontEndProvider from './FrontEndProvider';
import AppProvider from './AppProvider';

// Mapeamento dinâmico de resources para data providers
const providersMap: Record<string, DataProvider> = {
  apps: AppProvider,
  fields: FieldProvider,
  screens: ScreenProvider,
  fronts: FrontEndProvider,
};

const MultiDataProvider: DataProvider = {
    getList: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.getList(resource, params);
    },
    getOne: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.getOne(resource, params);
    },
    getMany: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.getMany(resource, params);
    },
    getManyReference: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.getManyReference(resource, params);
    },
    create: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.create(resource, params);
    },
    update: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.update(resource, params);
    },
    updateMany: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.updateMany(resource, params);
    },
    delete: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.delete(resource, params);
    },
    deleteMany: (resource, params) => {
        const provider = providersMap[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider.deleteMany(resource, params);
    },
};

export default MultiDataProvider;