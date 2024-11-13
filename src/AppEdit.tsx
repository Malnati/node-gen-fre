// src/AppEdit.tsx

import { CheckboxGroupInput, ChipField, Edit, ReferenceArrayField, ReferenceArrayInput, ReferenceInput, SelectInput, SimpleForm, SingleFieldList, TextInput } from 'react-admin';

export const AppEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput label="Author" source="platformId" reference="platforms">
                <SelectInput optionText='name' createLabel="Add a Platform"/>
            </ReferenceInput>
            <TextInput source="name" helperText="Name of the application."/>
            <ReferenceArrayInput source="frontends" reference="frontends">
                <CheckboxGroupInput optionText="name" row={false}/>
            </ReferenceArrayInput>
            <ReferenceArrayInput source="microservices" reference="microservices">
                <CheckboxGroupInput optionText="name" row={false}/>
            </ReferenceArrayInput>
            <ReferenceArrayField reference="specifications" source="specifications">
                <SingleFieldList>
                    <ChipField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleForm>
    </Edit>
);