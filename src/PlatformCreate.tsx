// src/PlatformCreate.tsx

import { Create, ReferenceArrayField, ReferenceInput, SimpleForm, SingleFieldList, TextField, TextInput } from 'react-admin';

export const PlatformCreate = () => (
    <Create>
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
    </Create>
);