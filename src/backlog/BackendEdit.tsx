// src/BackendEdit.tsx

import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const BackendEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="app" />
            <TextInput source="host" />
            <NumberInput source="port" />
            <TextInput source="database" />
            <TextInput source="user" />
            <TextInput source="password" />
            <TextInput source="outputDir" />
            <TextInput source="components" />
            <TextInput source="dbType" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);