// src/AppList.tsx

import { Datagrid, List, NumberField, ReferenceField, ReferenceInput, TextField, TextInput } from 'react-admin';

const appsFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="App" reference="apps" />,
];

export const AppList = () => (
    <List filters={appsFilters}>
        <Datagrid>
            <ReferenceField source="id" reference="apps" link="show" />
            <TextField source="app" />
            <TextField source="host" />
            <NumberField source="port" />
            <TextField source="database" />
            <TextField source="user" />
            <TextField source="password" />
            <TextField source="outputDir" />
            <TextField source="components" />
            <TextField source="dbType" />
            <TextField source="id" />
        </Datagrid>
    </List>
);