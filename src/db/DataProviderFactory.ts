// src/db/DataProviderFactory.ts

import {
  DataProvider,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
  CreateParams,
  CreateResult,
  DeleteParams,
  DeleteResult,
  DeleteManyParams,
  DeleteManyResult,
  QueryFunctionContext,
  RaRecord,
  Identifier,
} from "react-admin";
import DataTableService from "./DataTableService";

/**
 * Função fábrica que cria um DataProvider para manipulação de dados usando um serviço de tabela de dados.
 * 
 * Esta função define métodos para operações CRUD (Create, Read, Update, Delete) em um DataProvider,
 * utilizando um serviço de tabela de dados Dexie.
 * 
 * @template T - O tipo de dados armazenados na tabela.
 * 
 * @param service - O serviço de tabela de dados que será utilizado pelo DataProvider.
 * @returns Um DataProvider configurado com os métodos CRUD.
 * 
 * @example
 * const dataTableService = new DataTableService<MyDataType>(myTable);
 * const dataProvider = DataProviderFactory(dataTableService);
 * 
 * // Usar o dataProvider para obter uma lista de registros
 * const { data, total } = await dataProvider.getList('myResource', { pagination: { page: 1, perPage: 10 }, sort: { field: 'id', order: 'ASC' }, filter: {} });
 * 
 * // Usar o dataProvider para obter um registro pelo ID
 * const { data } = await dataProvider.getOne('myResource', { id: 1 });
 * 
 * @see {@link https://marmelab.com/react-admin/DataProvider.html|DataProvider}
 */
const DataProviderFactory = <T extends RaRecord>(
  service: DataTableService<T>,
): DataProvider => ({
  /**
   * Obtém uma lista de registros da tabela.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a consulta.
   * @returns Uma Promise que resolve com os dados e o total de registros.
   */
  getList: async function <RecordType extends RaRecord = T>(
    resource: string,
    params: GetListParams & QueryFunctionContext,
  ): Promise<GetListResult<RecordType>> {
    const items = await service.getAll();
    return { data: items as unknown as RecordType[], total: items.length };
  },

  /**
   * Obtém um registro da tabela pelo ID.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a consulta.
   * @returns Uma Promise que resolve com o registro.
   */
  getOne: async function <RecordType extends RaRecord = T>(
    resource: string,
    params: GetOneParams<RecordType> & QueryFunctionContext,
  ): Promise<GetOneResult<RecordType>> {
    const item = await service.getOne(Number(params.id));
    if (!item) throw new Error(`${resource} with id ${params.id} not found`);
    return { data: item as unknown as RecordType };
  },

  /**
   * Obtém múltiplos registros da tabela pelos IDs.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a consulta.
   * @returns Uma Promise que resolve com os registros.
   */
  getMany: async function <RecordType extends RaRecord = T>(
    resource: string,
    params: GetManyParams<RecordType> & QueryFunctionContext,
  ): Promise<GetManyResult<RecordType>> {
    const items = await service.bulkGet(params.ids.map((id) => Number(id)));
    return {
      data: items.filter((i) => i !== undefined) as unknown as RecordType[],
    };
  },

  /**
   * Obtém múltiplos registros da tabela que referenciam um registro específico.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a consulta.
   * @returns Uma Promise que resolve com os registros e o total de registros.
   */
  getManyReference: async function <RecordType extends RaRecord = T>(
    resource: string,
    params: GetManyReferenceParams & QueryFunctionContext,
  ): Promise<GetManyReferenceResult<RecordType>> {
    const items = await service.getAll();
    const filteredItems = items.filter(
      (item) => item[params.target as keyof T] === params.id,
    );
    return {
      data: filteredItems as unknown as RecordType[],
      total: filteredItems.length,
    };
  },

  /**
   * Atualiza um registro na tabela pelo ID.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a atualização.
   * @returns Uma Promise que resolve com o registro atualizado.
   */
  update: async function <RecordType extends RaRecord = T>(
    resource: string,
    params: UpdateParams,
  ): Promise<UpdateResult<RecordType>> {
    const updates = params.data as Partial<T>;
    await service.update(Number(params.id), updates);
    return { data: { ...params.data, id: params.id } as RecordType };
  },

  /**
   * Atualiza múltiplos registros na tabela pelos IDs.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a atualização.
   * @returns Uma Promise que resolve com os IDs dos registros atualizados.
   */
  updateMany: async function <RecordType extends RaRecord = T>(
    resource: string,
    params: UpdateManyParams,
  ): Promise<UpdateManyResult<RecordType>> {
    const updates = params.data as Partial<T>;
    const numericIds = params.ids.map((id) => Number(id));
    const updatedIds = await service.updateMany(numericIds, updates);
    return { data: updatedIds };
  },

  /**
   * Cria um novo registro na tabela.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a criação.
   * @returns Uma Promise que resolve com o novo registro criado.
   */
  create: async function <
    RecordType extends Omit<RaRecord, "id"> = T,
    ResultRecordType extends RaRecord = RecordType & { id: Identifier },
  >(
    resource: string,
    params: CreateParams,
  ): Promise<CreateResult<ResultRecordType>> {
    const item = params.data as T;
    const id = await service.create(item);
    return { data: { ...params.data, id } as unknown as ResultRecordType };
  },

  /**
   * Deleta um registro da tabela pelo ID.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a exclusão.
   * @returns Uma Promise que resolve com o registro deletado.
   */
  delete: async function <RecordType extends RaRecord = T>(
    resource: string,
    params: DeleteParams<RecordType>,
  ): Promise<DeleteResult<RecordType>> {
    await service.delete(Number(params.id));
    if (!params.previousData) {
      throw new Error(`Previous data for id ${params.id} not found`);
    }
    return { data: params.previousData };
  },

  /**
   * Deleta múltiplos registros da tabela pelos IDs.
   * 
   * @param resource - O nome do recurso.
   * @param params - Os parâmetros para a exclusão.
   * @returns Uma Promise que resolve com os IDs dos registros deletados.
   */
  deleteMany: async function <RecordType extends RaRecord = T>(
    resource: string,
    params: DeleteManyParams<RecordType>,
  ): Promise<DeleteManyResult<RecordType>> {
    const numericIds = params.ids.map((id) => Number(id));
    await service.deleteMany(numericIds);
    return { data: numericIds };
  },
});

export default DataProviderFactory;
