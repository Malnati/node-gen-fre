// src/ScreenList.tsx

import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, ReferenceArrayField, SingleFieldList } from 'react-admin';

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="App" reference="apps" />,
];

export const ScreenList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate />}>
        <Datagrid>
            <TextField source="name" />
            <ReferenceArrayField reference="fields" source="fields">
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