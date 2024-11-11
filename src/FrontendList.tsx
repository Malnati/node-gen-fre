// src/FrontendList.tsx

import { Datagrid, List, NumberField, ReferenceInput, TextInput, TextField, ListActions, EditButton, ShowButton } from 'react-admin';

const filters = [
    <TextInput source="q" label="Search" alwaysOn key="search" />,
    <ReferenceInput source="id" label="Front-end" reference="fronts" key="front-end" />,
];

export const FrontendList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate />}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="ID" />
            <TextField source="name" label="Name" />
            <TextField source="screens" label="Screens" /> {/* Exibe IDs das telas associadas */}
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);