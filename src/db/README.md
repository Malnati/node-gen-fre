# DataTable Providers Map

Este documento explica como definir o `dataTableProvidersMap` usando as constantes de banco de dados e interfaces.

## Introdução

O `dataTableProvidersMap` é um mapa que associa recursos a seus respectivos `DataProviders`. Ele é usado para manipular dados em diferentes tabelas do banco de dados Dexie.

## Definindo as Constantes de Banco de Dados

Primeiro, defina as constantes de banco de dados para cada tipo de dados. Cada constante é uma instância de `DataTable` que representa uma tabela no banco de dados Dexie.

```typescript
import DataTable from './DataTable';
import { IBook, IAuthor } from './interfaces';

// Definindo as instâncias de DataTable para cada tipo de dados
export const booksDB = new DataTable<IBook>('tb_books', "++id, title, authorId, *genres", []);
export const authorsDB = new DataTable<IAuthor>('tb_authors', '++id, name, *books', []);

```

## Definindo o Mapa de Data Providers

Em seguida, defina o `dataTableProvidersMap` que associa cada recurso ao seu respectivo `DataProvider`. Use a função `DataProviderFactory` para criar os `DataProviders` a partir dos serviços de tabela de dados.

```typescript
import DataTableService from './DataTableService';
import DataProviderFactory from './DataProviderFactory';
import { IDataTableProvidersMap } from './IDataTableProvidersMap';

// Mapeamento dinâmico de resources para data providers
export const dataTableProvidersMap: IDataTableProvidersMap = {
    'books': DataProviderFactory(new DataTableService<IBook>(booksDB.getResorceTable())),
    'authors': DataProviderFactory(new DataTableService<IAuthor>(authorsDB.getResorceTable())),
};
```

## Uso do Mapa de Data Providers

Agora você pode usar o `dataTableProvidersMap` com o hook `useMultiDataProvides` e realizar operações *CRUD* em diferentes tabelas do banco de dados *Dexie*.

```typescript

...

import { useMultiDataProvides } from "./hooks/useMultiDataProvides";
import { dataTableProvidersMap } from "./db/MultiDataTable";

...

export const App = () => {

  return (
      <GoogleOAuthProvider clientId={clientId}>
        <Admin
          layout={Layout}
          dataProvider={useMultiDataProvides(dataTableProvidersMap)}
          authProvider={GoogleAuthProvider}
          loginPage={<CustomLogin />} 
          dashboard={Dashboard}
          theme={radiantLightTheme}
          darkTheme={radiantDarkTheme}
        >
        
        <Resource
          name="books"
          list={BooksList}
          create={BooksCreate}
          edit={BooksEdit}
          show={BooksShow}
          icon={SettingsSystemDaydreamIcon}
        />
        
        ...

      </Admin>
    </GoogleOAuthProvider>
  );
}
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
