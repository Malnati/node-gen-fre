// src/FrontendEdit.tsx

import { Edit, ReferenceInput, SimpleForm, TextInput, ReferenceField } from 'react-admin';

export const FrontendEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="id" reference="fronts" />
            <TextInput source="id" label="ID" />
            <TextInput source="name" label="Name" />
            <ReferenceField source="screns" reference="screns" link="show" />
        </SimpleForm>
    </Edit>
);