// src/BackendCreate.tsx

import { Create, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const BackendCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="id" reference="apps" />
            <TextInput source="app" />
            <TextInput source="host" />
            <NumberInput source="port" />
            <TextInput source="database" />
            <TextInput source="user" />
            <TextInput source="password" />
            <TextInput source="outputDir" />
            <TextInput source="components" />
            <TextInput source="dbType" />
        </SimpleForm>
    </Create>
);