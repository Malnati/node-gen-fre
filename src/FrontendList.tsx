// src/FrontendList.tsx

import { Datagrid, List, NumberField, ReferenceInput, TextInput, TextField, ListActions, EditButton, ShowButton, ReferenceArrayField, SingleFieldList } from 'react-admin';

const filters = [
    <TextInput source="q" label="Search" alwaysOn key="search" />,
    <ReferenceInput source="id" label="Front-end" reference="fronts" key="front-end" />,
];

export const FrontendList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate />}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID" />
            <TextField source="name" label="Name" />
            <ReferenceArrayField reference="screens" source="screens">
                <SingleFieldList>
                    <TextField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="specifications" source="specifications">
                <SingleFieldList>
                    <TextField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);