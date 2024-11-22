// src/cache/MultiDataProvider.ts

// import DataProviderFactory from '../db/DataProviderFactory';
// import { DataTable } from '../db/DataTable';
// import DataTableService from '../db/DataTableService';
// import { IDataTableProvidersMap } from '../db/IDataTableProvidersMap';
// import {
//   IPlatform,
//   IApp,
//   IMicroService,
//   IStore,
//   IFrontend,
//   IField,
//   IScreen,
//   IDashboard,
//   ILogin,
//   ISpecification,
//   IBooleanInputProps,
//   IDateInputProps,
//   IDateTimeInputProps,
//   IFileInputProps,
//   IImageInputProps,
//   INumberInputProps,
//   IPasswordInputProps,
//   IReferenceInputProps,
//   IRichTextInputProps,
//   ISearchInputProps,
//   ISelectInputProps,
//   ITextInputProps,
//   ITimeInputProps,
//   ICheckboxGroupInputProps,
//   ITranslatableInputsProps,
// } from "../types/entities";


// // Definindo as instâncias de DataTable para cada tipo de dados
// export const platformsDB = new DataTable<IPlatform>('tb_platforms', "++id, name, *apps, *specifications", []);
// export const appsDB = new DataTable<IApp>('tb_apps', '++id, platformId, name, *microservices, *frontends, *attributes, *specifications', []);
// export const microservicesDB = new DataTable<IMicroService>('tb_micro_services', '++id, appId, name, *databases, *attributes, *specifications', []);
// export const storesDB = new DataTable<IStore>('tb_stores', '++id, microserviceId, host, port, database, user, dbType, *specifications', []);
// export const frontendsDB = new DataTable<IFrontend>('tb_frontends', '++id, appId, name, *attributes, *specifications', []);
// export const fieldsDB = new DataTable<IField>('tb_fields', '++id, screenId, name, *attributes, *specifications', []);
// export const screensDB = new DataTable<IScreen>('tb_screens', '++id, frontendId, name, *attributes, *specifications', []);
// export const dashboardsDB = new DataTable<IDashboard>('tb_dashboards', '++id, screenId, name, *attributes, *specifications', []);
// export const loginsDB = new DataTable<ILogin>('tb_logins', '++id, name, *attributes, *specifications', []);
// export const specificationsDB = new DataTable<ISpecification>('tb_specifications', '++id, name, *attributes', []);
// export const booleanInputsDB = new DataTable<IBooleanInputProps>('tb_boolean_inputs', '++id, name, *attributes, *specifications', []);
// export const checkboxInputsDB = new DataTable<ICheckboxGroupInputProps>('tb_checkbox_inputs', '++id, name, *attributes, *specifications', []);
// export const dateInputsDB = new DataTable<IDateInputProps>('tb_date_inputs', '++id, name, *attributes, *specifications', []);
// export const dateTimeInputsDB = new DataTable<IDateTimeInputProps>('tb_date_time_inputs', '++id, name, *attributes, *specifications', []);
// export const fileInputsDB = new DataTable<IFileInputProps>('tb_file_inputs', '++id, name, *attributes, *specifications', []);
// export const imageInputsDB = new DataTable<IImageInputProps>('tb_image_inputs', '++id, name, *attributes, *specifications', []);
// export const numberInputsDB = new DataTable<INumberInputProps>('tb_number_inputs', '++id, name, *attributes, *specifications', []);
// export const passwordInputsDB = new DataTable<IPasswordInputProps>('tb_password_inputs', '++id, name, *attributes, *specifications', []);
// export const referenceInputsDB = new DataTable<IReferenceInputProps>('tb_reference_inputs', '++id, name, *attributes, *specifications', []);
// export const richTextInputsDB = new DataTable<IRichTextInputProps>('tb_rich_text_inputs', '++id, name, *attributes, *specifications', []);
// export const searchInputsDB = new DataTable<ISearchInputProps>('tb_search_inputs', '++id, name, *attributes, *specifications', []);
// export const selectInputsDB = new DataTable<ISelectInputProps>('tb_select_inputs', '++id, name, *attributes, *specifications', []);
// export const textInputsDB = new DataTable<ITextInputProps>('tb_text_inputs', '++id, name, *attributes, *specifications', []);
// export const timeInputsDB = new DataTable<ITimeInputProps>('tb_time_inputs', '++id, name, *attributes, *specifications', []);
// export const translatableInputsDB = new DataTable<ITranslatableInputsProps>('tb_translatable_inputs', '++id, name, *attributes, *specifications', []);

// // Mapeamento dinâmico de resources para data providers
// export const dataTableProvidersMap: IDataTableProvidersMap = {
//     'platforms': DataProviderFactory(new DataTableService<IPlatform>(platformsDB.getResorceTable())),
//     'apps': DataProviderFactory(new DataTableService<IApp>(appsDB.getResorceTable())),
//     'microservices': DataProviderFactory(new DataTableService<IMicroService>(microservicesDB.getResorceTable())),
//     'stores': DataProviderFactory(new DataTableService<IStore>(storesDB.getResorceTable())),
//     'frontends': DataProviderFactory(new DataTableService<IFrontend>(frontendsDB.getResorceTable())),
//     'fields': DataProviderFactory(new DataTableService<IField>(fieldsDB.getResorceTable())),
//     'screens': DataProviderFactory(new DataTableService<IScreen>(screensDB.getResorceTable())),
//     'dashboards': DataProviderFactory(new DataTableService<IDashboard>(dashboardsDB.getResorceTable())),
//     'logins': DataProviderFactory(new DataTableService<ILogin>(loginsDB.getResorceTable())),
//     'specifications': DataProviderFactory(new DataTableService<ISpecification>(specificationsDB.getResorceTable())),
//     'booleanInputs': DataProviderFactory(new DataTableService<IBooleanInputProps>(booleanInputsDB.getResorceTable())),
//     'checkboxInputs': DataProviderFactory(new DataTableService<ICheckboxGroupInputProps>(checkboxInputsDB.getResorceTable())),
//     'dateInputs': DataProviderFactory(new DataTableService<IDateInputProps>(dateInputsDB.getResorceTable())),
//     'dateTimeInputs': DataProviderFactory(new DataTableService<IDateTimeInputProps>(dateTimeInputsDB.getResorceTable())),
//     'fileInputs': DataProviderFactory(new DataTableService<IFileInputProps>(fileInputsDB.getResorceTable())),
//     'imageInputs': DataProviderFactory(new DataTableService<IImageInputProps>(imageInputsDB.getResorceTable())),
//     'numberInputs': DataProviderFactory(new DataTableService<INumberInputProps>(numberInputsDB.getResorceTable())),
//     'passwordInputs': DataProviderFactory(new DataTableService<IPasswordInputProps>(passwordInputsDB.getResorceTable())),
//     'referenceInputs': DataProviderFactory(new DataTableService<IReferenceInputProps>(referenceInputsDB.getResorceTable())),
//     'richTextInputs': DataProviderFactory(new DataTableService<IRichTextInputProps>(richTextInputsDB.getResorceTable())),
//     'searchInputs': DataProviderFactory(new DataTableService<ISearchInputProps>(searchInputsDB.getResorceTable())),
//     'selectInputs': DataProviderFactory(new DataTableService<ISelectInputProps>(selectInputsDB.getResorceTable())),
//     'textInputs': DataProviderFactory(new DataTableService<ITextInputProps>(textInputsDB.getResorceTable())),
//     'timeInputs': DataProviderFactory(new DataTableService<ITimeInputProps>(timeInputsDB.getResorceTable())),
//     'translatableInputs': DataProviderFactory(new DataTableService<ITranslatableInputsProps>(translatableInputsDB.getResorceTable())),
// };

// // Mapeamento dinâmico de resources para data providers
// const providersMap: Record<string, DataProvider> = {
//   platforms: PlatformProvider,
//   apps: AppProvider,
//   microservices: MicroserviceProvider,
//   frontends: FrontendProvider,
//   databases: DatabaseProvider,
//   fields: FieldProvider,
//   screens: ScreenProvider,
//   dashboards: DashboardProvider,
//   logins: LoginProvider,
//   specifications: SpecificationProvider,
//   booleanInputs: BooleanInputsProvider,
//   checkboxInputs: CheckboxInputsProvider,
//   dateInputs: DateInputsProvider,
//   dateTimeInputs: DateTimeInputsProvider,
//   fileInputs: FileInputsProvider,
//   imageInputs: ImageInputsProvider,
//   numberInputs: NumberInputsProvider,
//   passwordInputs: PasswordInputsProvider,
//   referenceInputs: ReferenceInputsProvider,
//   richTextInputs: RichTextInputsProvider,
//   searchInputs: SearchInputsProvider,
//   selectInputs: SelectInputsProvider,
//   textInputs: TextInputsProvider,
//   timeInputs: TimeInputsProvider,
//   translatableInputs: TranslatableInputsProvider,
// };
