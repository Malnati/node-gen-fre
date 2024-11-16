// src/AppList.tsx

import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, ReferenceArrayField, SingleFieldList } from 'react-admin';

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="App" reference="apps" />,
];

export const AppList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate />}>
        <Datagrid>
            <TextField source="app" label="App title" />
            <TextField source="host" />
            <TextField source="dbType" />
            <ReferenceArrayField reference="specifications" source="specifications">
                <Datagrid>
                    <TextField source="type" />
                    <TextField source="referenceId" />
                    <TextField source="key" />
                    <TextField source="value" />
                </Datagrid>
            </ReferenceArrayField>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);