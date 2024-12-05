// src/FieldCreate.tsx

import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const FieldCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="id" reference="fields" />
            <TextInput source="name" />
            <TextInput source="type" />
            <TextInput source="specifications" />
        </SimpleForm>
    </Create>
);