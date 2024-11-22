# DataTable Providers Map

Este documento explica como definir o `dataTableProvidersMap` usando as constantes de banco de dados e interfaces.

## Introdução

O `dataTableProvidersMap` é um mapa que associa recursos a seus respectivos `DataProviders`. Ele é usado para manipular dados em diferentes tabelas do banco de dados Dexie.

## Definindo as Constantes de Banco de Dados

Primeiro, defina as constantes de banco de dados para cada tipo de dados. Cada constante é uma instância de `DataTable` que representa uma tabela no banco de dados Dexie.

```typescript
import DataTable from './DataTable';
import { IApp, IPlatform, IMicroService, IStore, IFrontend, IDatabase, IField, IScreen, IDashboard, ILogin, ISpecification, IBooleanInput, ICheckboxInput, IDateInput, IDateTimeInput, IFileInput, IImageInput, INumberInput, IPasswordInput, IReferenceInput, IRichTextInput, ISearchInput, ISelectInput, ITextInput, ITimeInput, ITranslatableInput } from './interfaces';

// Definindo as instâncias de DataTable para cada tipo de dados
export const platformsDB = new DataTable<IPlatform>('tb_platforms', "++id, name, *apps, *specifications", []);
```

## Definindo o Mapa de Data Providers

Em seguida, defina o `dataTableProvidersMap` que associa cada recurso ao seu respectivo `DataProvider`. Use a função `DataProviderFactory` para criar os `DataProviders` a partir dos serviços de tabela de dados.

```typescript
import DataTableService from './DataTableService';
import DataProviderFactory from './DataProviderFactory';
import { IDataTableProvidersMap } from './IDataTableProvidersMap';

// Mapeamento dinâmico de resources para data providers
export const dataTableProvidersMap: IDataTableProvidersMap = {
    'platforms': DataProviderFactory(new DataTableService<IPlatform>(platformsDB.getResorceTable())),
    'apps': DataProviderFactory(new DataTableService<IApp>(appsDB.getResorceTable())),
```

## Uso do Mapa de Data Providers

Agora você pode usar o `dataTableProvidersMap` para acessar os `DataProviders` e realizar operações *CRUD* em diferentes tabelas do banco de dados *Dexie*.

```typescript
import { dataTableProvidersMap } from './MultiDataTable';

// Exemplo de uso
const platformsProvider = dataTableProvidersMap['platforms'];
const appsProvider = dataTableProvidersMap['apps'];

// Obter uma lista de registros
const { data: platforms, total: platformsTotal } = await platformsProvider.getList('platforms', { pagination: { page: 1, perPage: 10 }, sort: { field: 'id', order: 'ASC' }, filter: {} });
const { data: apps, total: appsTotal } = await appsProvider.getList('apps', { pagination: { page: 1, perPage: 10 }, sort: { field: 'id', order: 'ASC' }, filter: {} });
```

Conclusão
Este documento explicou como definir o dataTableProvidersMap usando as constantes de banco de dados e interfaces. Com isso, você pode manipular dados em diferentes tabelas do banco de dados Dexie de forma organizada e eficiente.


### Explicação

1. **Introdução**: Uma breve introdução sobre o que é o [dataTableProvidersMap](http://_vscodecontentref_/2).
2. **Definindo as Constantes de Banco de Dados**: Explicação e exemplo de como definir as constantes de banco de dados para cada tipo de dados.
3. **Definindo o Mapa de Data Providers**: Explicação e exemplo de como definir o [dataTableProvidersMap](http://_vscodecontentref_/3) que associa cada recurso ao seu respectivo `DataProvider`.
4. **Uso do Mapa de Data Providers**: Exemplo de como usar o [dataTableProvidersMap](http://_vscodecontentref_/4) para acessar os `DataProviders` e realizar operações CRUD.
5. **Conclusão**: Resumo do que foi explicado no documento.

Isso deve fornecer uma documentação clara e útil para definir e usar o [dataTableProvidersMap](http://_vscodecontentref_/5).
