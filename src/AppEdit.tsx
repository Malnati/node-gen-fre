// src/AppEdit.tsx

import { ChipField, Edit, ReferenceArrayField, ReferenceField, SimpleForm, SingleFieldList, TextInput } from 'react-admin';

export const AppEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceField source="id" reference="apps" />
            <TextInput source="name" helperText="Name of the application."/>
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
    </Edit>
);