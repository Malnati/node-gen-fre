// src/interfaces.ts

import { RaRecord } from 'react-admin';

// Representação dos dados recebidos da interface do usuário, compatível com RaRecord
export interface SchemaInput extends RaRecord<number> {
    id: number; // Identificador
    resourceName: string;
    fields: { name: string; component: string; inputComponent: string }[];
}

// Representação dos dados prontos para persistência no IndexedDB
export interface SchemaOutput {
    resourceName: string;
    fields: { name: string; component: string; inputComponent: string }[];
}