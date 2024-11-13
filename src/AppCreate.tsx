// src/AppCreate.tsx

import { CheckboxGroupInput, ChipField, Create, ReferenceArrayField, ReferenceArrayInput, ReferenceField, SelectArrayInput, SimpleForm, SingleFieldList, TextInput } from 'react-admin';

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
            <ReferenceArrayInput source="specifications" reference="specifications">
                <CheckboxGroupInput optionText="key" row={false}/>
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);