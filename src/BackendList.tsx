// src/BackendList.tsx

import { Datagrid, List, NumberField, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton } from 'react-admin';

const appsFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="App" reference="apps" />,
];

export const BackendList = () => (
    <List emptyWhileLoading filters={appsFilters} actions={<ListActions hasCreate />}>
        <Datagrid>
            <TextField source="app" />
            <TextField source="host" />
            <NumberField source="port" />
            <TextField source="database" />
            <TextField source="user" />
            <TextField source="dbType" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);