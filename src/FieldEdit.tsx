// src/FieldEdit.tsx 

import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const FieldEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="id" reference="fields" />
            <TextInput source="name" />
            <TextInput source="type" />
            <TextInput source="specifications" />
        </SimpleForm>
    </Edit>
);