// src/PlatformEdit.tsx

import { Edit, ReferenceArrayField, SimpleForm, SingleFieldList, TextField, TextInput } from 'react-admin';

export const PlatformEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" label="ID" id="id" />
            <TextInput source="name" id='name'/>
            <ReferenceArrayField reference="apps" source="apps" label="Apps" >
                <SingleFieldList>
                    <TextField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="specifications" source="specifications" label="Specifications">
                <SingleFieldList>
                    <TextField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleForm>
    </Edit>
);