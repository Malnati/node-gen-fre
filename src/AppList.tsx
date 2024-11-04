// src/AppList.tsx

import { Datagrid, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const AppList = () => (
    <List>
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