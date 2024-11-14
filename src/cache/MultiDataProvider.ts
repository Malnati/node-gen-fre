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
// const FileInputPropsProvider=DataProviderFactory(db.fileInputPropsService);
// const ImageInputPropsProvider=DataProviderFactory(db.imageInputPropsService);
// const NumberInputPropsProvider=DataProviderFactory(db.numberInputPropsService);
// const PasswordInputPropsProvider=DataProviderFactory(db.passwordInputPropsService);
// const ReferenceInputPropsProvider=DataProviderFactory(db.referenceInputPropsService);
// const RichTextInputPropsProvider=DataProviderFactory(db.richTextInputPropsService);
// const SearchInputPropsProvider=DataProviderFactory(db.searchInputPropsService);
// const SelectInputPropsProvider=DataProviderFactory(db.selectInputPropsService);
// const TextInputPropsProvider=DataProviderFactory(db.textInputPropsService);
// const TimeInputPropsProvider=DataProviderFactory(db.timeInputPropsService);
// const TranslatableInputPropsProvider=DataProviderFactory(db.translatableInputPropsService);

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
//   fileInputProps: FileInputPropsProvider,
//   imageInputProps: ImageInputPropsProvider,
//   numberInputProps: NumberInputPropsProvider,
//   passwordInputProps: PasswordInputPropsProvider,
//   referenceInputProps: ReferenceInputPropsProvider,
//   richTextInputProps: RichTextInputPropsProvider,
//   searchInputProps: SearchInputPropsProvider,
//   selectInputProps: SelectInputPropsProvider,
//   textInputProps: TextInputPropsProvider,
//   timeInputProps: TimeInputPropsProvider,
//   translatableInputProps: TranslatableInputPropsProvider,
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