// src/PlatformEdit.tsx

import { Edit, ReferenceArrayField, ReferenceInput, SimpleForm, SingleFieldList, TextField, TextInput } from 'react-admin';

export const PlatformEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="id" reference="platforms" />
            <TextInput source="name" />
            <ReferenceInput source="specifications" reference="specifications" />
            <ReferenceArrayField reference="apps" source="apps">
                <SingleFieldList>
                    <TextField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="specifications" source="specifications">
                <SingleFieldList>
                    <TextField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleForm>
    </Edit>
);