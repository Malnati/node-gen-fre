import { DataProvider } from "react-admin";
import { IDataTableProvidersMap } from "../db/IDataTableProvidersMap";

/**
 * Creates a Proxy for the provided map of DataProviders.
 * 
 * This function returns a Proxy object that intercepts the `get` operation on the provided map.
 * When attempting to access a property on the Proxy, it will check if the property name exists
 * as a key in the original map and return the key if found.
 * 
 * @param _map - A record where the keys are strings and the values are DataProvider instances.
 * @returns A Proxy object that provides access to the keys of the original map.
 */
export const useMultiDataProvides = (_map: IDataTableProvidersMap) => {

    const getProvider = (resource: string): DataProvider => {
        const provider = _map[resource];
        if (!provider) {
            throw new Error(`DataProvider para o recurso "${resource}" não encontrado`);
        }
        return provider;
    };
    
    const defaultDataProvider: DataProvider = {
        getList: (resource, params) => getProvider(resource).getList(resource, params),
        getOne: (resource, params) => getProvider(resource).getOne(resource, params),
        getMany: (resource, params) => getProvider(resource).getMany(resource, params),
        getManyReference: (resource, params) => getProvider(resource).getManyReference(resource, params),
        create: (resource, params) => getProvider(resource).create(resource, params),
        update: (resource, params) => getProvider(resource).update(resource, params),
        updateMany: (resource, params) => getProvider(resource).updateMany(resource, params),
        delete: (resource, params) => getProvider(resource).delete(resource, params),
        deleteMany: (resource, params) => getProvider(resource).deleteMany(resource, params),
        supportAbortSignal: false, 
    };

    return new Proxy(defaultDataProvider, {
        get: function(target: any, name: string) {
            const key = Object.keys(_map).find((key: string) => key === name);
            if (!key) {
                if (name in target) {
                    return target[name];
                }
                throw new Error(`Key ${name} not found in the data provider map.`);
            }
            return _map[key];
        }
    });
};
