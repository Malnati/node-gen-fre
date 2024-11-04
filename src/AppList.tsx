// src/AppList.tsx

import { Datagrid, List, NumberField, ReferenceField, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton } from 'react-admin';

const appsFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="App" reference="apps" />,
];

export const AppList = () => (
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