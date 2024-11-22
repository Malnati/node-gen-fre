import { defaultDataProvider } from "react-admin";
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
    return new Proxy(defaultDataProvider, {
        get: function(target: any, name: string) {
            return Object.keys(_map).find((key: string) => key === name);
    }});
};