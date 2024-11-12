// src/AppCreate.tsx

import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const AppCreate = () => (
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
            <ReferenceInput source="specifications" reference="specifications" />
        </SimpleForm>
    </Create>
);