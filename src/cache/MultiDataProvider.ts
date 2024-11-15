// src/cache/MultiDataProvider.ts

import { DataProvider } from 'react-admin';

import DataProviderFactory from './DataProviderFactory';
import { db } from './IndexDB';

const PlatformProvider = DataProviderFactory(db.platformService);
const AppProvider = DataProviderFactory(db.appService);
const MicroserviceProvider = DataProviderFactory(db.msService);
const FrontendProvider = DataProviderFactory(db.frontendService);
const DatabaseProvider = DataProviderFactory(db.dbService);
const FieldProvider = DataProviderFactory(db.fieldService);
const SpecificationProvider = DataProviderFactory(db.specificationService);
const ScreenProvider = DataProviderFactory(db.screenService);
const DashboardProvider = DataProviderFactory(db.dashboardService);
const LoginProvider = DataProviderFactory(db.loginService);
const BooleanInputsProvider = DataProviderFactory(db.booleanInputService);
const CheckboxInputsProvider=DataProviderFactory(db.checkboxInputsService);
const DateInputsProvider=DataProviderFactory(db.dateInputsService);
const DateTimeInputsProvider=DataProviderFactory(db.dateTimeInputsService);
const FileInputsProvider=DataProviderFactory(db.fileInputsService);
const ImageInputsProvider=DataProviderFactory(db.imageInputsService);
const NumberInputsProvider=DataProviderFactory(db.numberInputsService);
const PasswordInputsProvider=DataProviderFactory(db.passwordInputsService);
const ReferenceInputsProvider=DataProviderFactory(db.referenceInputsService);
const RichTextInputsProvider=DataProviderFactory(db.richTextInputsService);
const SearchInputsProvider=DataProviderFactory(db.searchInputsService);
const SelectInputsProvider=DataProviderFactory(db.selectInputsService);
const TextInputsProvider=DataProviderFactory(db.textInputsService);
// const TimeInputsProvider=DataProviderFactory(db.timeInputsService);
// const TranslatableInputsProvider=DataProviderFactory(db.translatableInputsService);

// Mapeamento dinâmico de resources para data providers
const providersMap: Record<string, DataProvider> = {
  platforms: PlatformProvider,
  apps: AppProvider,
  microservices: MicroserviceProvider,
  frontends: FrontendProvider,
  databases: DatabaseProvider,
  fields: FieldProvider,
  screens: ScreenProvider,
  dashboards: DashboardProvider,
  logins: LoginProvider,
  specifications: SpecificationProvider,
  booleanInputs: BooleanInputsProvider,
  checkboxInputs: CheckboxInputsProvider,
  dateInputs: DateInputsProvider,
  dateTimeInputs: DateTimeInputsProvider,
  fileInputs: FileInputsProvider,
  imageInputs: ImageInputsProvider,
  numberInputs: NumberInputsProvider,
  passwordInputs: PasswordInputsProvider,
  referenceInputs: ReferenceInputsProvider,
  richTextInputs: RichTextInputsProvider,
  searchInputs: SearchInputsProvider,
  selectInputs: SelectInputsProvider,
  textInputs: TextInputsProvider,
//   timeInputs: TimeInputsProvider,
//   translatableInputs: TranslatableInputsProvider,
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