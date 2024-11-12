// src/FieldCreate.tsx

import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const FieldCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="id" reference="apps" />
            <TextInput source="app" />
            <TextInput source="host" />
            <TextInput source="port" />
            <TextInput source="database" />
            <TextInput source="user" />
            <TextInput source="password" />
            <TextInput source="dbType" />
        </SimpleForm>
    </Create>
);