// src/PlatformEdit.tsx

import { ChipField, Edit, ReferenceArrayField, SimpleForm, SingleFieldList, TextField, TextInput } from 'react-admin';

export const PlatformEdit = () => (
    <Edit>
        <SimpleForm>
            <TextField source="id" label="ID" id="id" />
            <TextInput source="name" id='name'/>
            <ReferenceArrayField reference="apps" source="apps" label="Apps" >
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="specifications" source="specifications" label="Specifications">
                <SingleFieldList>
                    <ChipField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleForm>
    </Edit>
);