// src/FieldEdit.tsx

import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const FieldEdit = () => (
    <Edit>
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
    </Edit>
);