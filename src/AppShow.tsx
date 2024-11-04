// src/AppShow.tsx

import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const AppShow = () => (
    <Show>
        <SimpleShowLayout>
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
        </SimpleShowLayout>
    </Show>
);