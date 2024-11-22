import { DataProvider } from 'react-admin';

/**
 * Interface que representa um mapa de DataProviders.
 * 
 * Esta interface define um objeto onde as chaves são strings e os valores são instâncias de DataProvider.
 * É útil para mapear diferentes recursos para seus respectivos DataProviders.
 * 
 * @example
 * const dataTableProvidersMap: IDataTableProvidersMap = {
 *     'inbox': inboxDataProvider,
 *     'message': messageDataProvider,
 * };
 * 
 * @see {@link https://marmelab.com/react-admin/DataProvider.html|DataProvider}
 */
export interface IDataTableProvidersMap {
    [key: string]: DataProvider;
}
