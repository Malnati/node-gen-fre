// src/FrontendList.tsx

import { Datagrid, List, NumberField, ReferenceInput, TextInput, TextField, ListActions, EditButton, ShowButton } from 'react-admin';
import { Box } from '@mui/material';

const filters = [
    <TextInput source="q" label="Search" alwaysOn key="search" />,
    <ReferenceInput source="id" label="Front-end" reference="fronts" key="front-end" />,
];

export const FrontendList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate />}>
        <Datagrid rowClick="show">
            <NumberField source="id" label="ID" />
            <TextField source="resourceName" label="Resource Name" /> {/* Exibe o nome do recurso */}
            <Box display="flex" justifyContent="flex-end">
                <EditButton />
                <ShowButton />
            </Box>
        </Datagrid>
    </List>
);