// src/cache/IMetadata.ts

export interface IId {
    id: number;
}

export interface IMetadata extends IId {
    referenceId: number; // ID do item relacionado (field, screen, frontend, app)
    key: string;         // Chave da especificação, por exemplo, "maxLength" ou "layout"
    value: any;          // Valor da especificação, que pode variar conforme o tipo
}

export interface ISpecification extends IMetadata {
    type: 'field' | 'screen' | 'frontend' | 'database' | 'app' | 'platform' | 'microservice' | 'feature' | 'attribute'; // Define o tipo de item relacionado
}

export interface IAttribute extends IMetadata {
    type: 'field' | 'screen' | 'frontend' | 'database' | 'app' | 'microservice' | 'feature' | 'login' | 'dashboard'; // Define o tipo de item relacionado
}

export interface ICommonInputAttribute extends IMetadata {
    commonType: 'source' | 'className' | 'defaultValue' | 'readOnly' | 'disabled' | 'format' | 'fullWidth' | 'helperText' | 'label' | 'parse' | 'sx' | 'validate'; 
}

export interface IReferenceInputAttribute extends IMetadata {
    type: 'label' | 'perPage' | 'reference' | 'sort' | 'source' ; 
}

export interface IBooleanInputAttribute extends IMetadata {
    type: 'options' ; 
}

export interface ISearchInputAttribute extends IMetadata {
    type: 'placeholder' | 'resettable' ; 
}

export interface INumberInputAttribute extends IMetadata {
    type: 'max' | 'min' | 'step'; 
}

export interface ITextInputAttribute extends IMetadata {
    type: 'multiline' | 'resettable'; 
}

export interface IRichTextInputAttribute extends IMetadata {
    type: 'toolbar' ;
}

export interface IAutocompleteInputAttribute extends IMetadata {
    type: 'AutocompleteInput' | 'source' | 'choices' | 'create' | 'debounce' | 'emptyText' | 'emptyValue' | 'optionText' | 'optionValue' | 'translateChoice'; 
}

export interface IPasswordAttribute extends IMetadata {
    type: 'initiallyVisible';
}

export interface ISelectInputAttribute extends IMetadata {
    type: 'choices' | 'emptyText' | 'emptyValue' | 'resettable' | 'translateChoice';
}

export interface IField extends IId {
    screenId: number; 
    name: string;
    label: string;
    type: string;
    max: number;
    specifications?: number[];
}

export interface IScreen extends IId {
    frontendId: number; 
    name: string;
    fields: number[];
    specifications?: number[];
}

export interface IDashboard extends IScreen, IId {
    attributes: number[];
}

export interface ILogin extends IScreen, IId {
    attributes: number[];
}

export interface IFrontend extends IId {
    appId: number; 
    name: string;
    screens: number[];
    specifications?: number[];
}

export interface IPlatform extends IId {
    name: string;
    apps?: number[];
    specifications?: number[];
}

export interface IFeature extends IId {
    name: string;
    description: string;
    attributes?: number[];
    specifications?: number[];
}

export interface IPlatformFeature extends IFeature {
    platformId: number;
}

export interface IApp extends IId {
    platformId: number;
    name: string;
    microservices?: number[];
    frontends?: number[];
    specifications?: number[];
}

export interface IMicroService extends IId {
    appId: number; 
    name: string;
    databases?: number[];
    specifications?: number[];
}

export interface IDatabase extends IId {
    microserviceId: number; 
    host: string;
    port: string;
    database: string;
    user: string;
    dbType: string;
    specifications?: number[];
}