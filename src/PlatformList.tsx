// src/PlatformList.tsx

import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, ReferenceArrayField, SingleFieldList, ReferenceField } from 'react-admin';

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="App" reference="apps" />,
];

export const PlatformList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate />}>
        <Datagrid>
            <TextField source="id" label="ID" id="id" />
            <TextField source="name" label="Platform" id='name' />
            <ReferenceArrayField reference="apps" source="apps">
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