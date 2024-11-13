// src/AppCreate.tsx

import { ChipField, Create, ReferenceArrayField, ReferenceField, SimpleForm, SingleFieldList, TextInput } from 'react-admin';

export const AppCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceField source="id" reference="apps" />
            <TextInput source="name" />
            <ReferenceArrayField reference="frontends" source="frontends">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="microservices" source="microservices">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="specifications" source="specifications">
                <SingleFieldList>
                    <ChipField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleForm>
    </Create>
);