// src/AppCreate.tsx

import { CheckboxGroupInput, ChipField, Create, ReferenceArrayField, ReferenceArrayInput, ReferenceField, ReferenceInput, SelectInput, SimpleForm, SingleFieldList, TextInput } from 'react-admin';

export const AppCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput label="Author" source="platformId" reference="platforms">
                <SelectInput optionText='name' createLabel="Add a Platform"/>
            </ReferenceInput>
            <ReferenceField source="id" reference="apps" />
            <TextInput source="name" />
            <ReferenceArrayInput source="frontends" reference="frontends">
                <CheckboxGroupInput optionText="name" row={false}/>
            </ReferenceArrayInput>
            <ReferenceArrayInput source="microservices" reference="microservices">
                <CheckboxGroupInput optionText="name" row={false}/>
            </ReferenceArrayInput>
            <ReferenceArrayInput source="specifications" reference="specifications">
                <CheckboxGroupInput optionText="key" row={false}/>
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);