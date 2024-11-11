// src/cache/MultiDataProvider.ts

import { DataProvider } from 'react-admin';
import { MainDataProvider } from './MainDataProvider';
import FieldProvider from './FieldProvider';
import ScreenProvider from './ScreenProvider';
import FrontEndProvider from './FrontEndProvider';

// Mapeamento dinâmico de resources para data providers
const providersMap: Record<string, DataProvider> = {
  fields: FieldProvider,
  screens: ScreenProvider,
  fronts: FrontEndProvider,
  // Adicione outros resources e seus data providers conforme necessário
};

const MultiDataProvider: DataProvider = {
  getList: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.getList(resource, params);
  },
  getOne: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.getOne(resource, params);
  },
  getMany: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.getMany(resource, params);
  },
  getManyReference: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.getManyReference(resource, params);
  },
  create: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.create(resource, params);
  },
  update: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.update(resource, params);
  },
  updateMany: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.updateMany(resource, params);
  },
  delete: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.delete(resource, params);
  },
  deleteMany: (resource, params) => {
    const provider = providersMap[resource] || MainDataProvider;
    return provider.deleteMany(resource, params);
  },
};

export default MultiDataProvider;