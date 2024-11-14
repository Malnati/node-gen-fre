// src/cache/IMetadata.ts

export interface IId {
    id: number;
}

export interface IMetadata extends IId {
    referenceId: number; // ID do item relacionado (field, screen, frontend, app)
    key: string;         // Chave da especificação, por exemplo, "maxLength" ou "layout"
    value: any;          // Valor da especificação, que pode variar conforme o tipo
}