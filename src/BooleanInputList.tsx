// src/BooleanInputPropsList.tsx

import { Fragment } from 'react';

import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, BulkDeleteButton, BulkExportButton, DeleteButton } from 'react-admin';

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="BooleanInput" reference="booleanInputs" />,
];

export const BooleanInputList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate/>}>
        <Datagrid bulkActionButtons={
            <Fragment>
                    <BulkExportButton />
                    <BulkDeleteButton mutationMode="pessimistic"/>
                </Fragment>
            }>
            <TextField source="id" label="Id" />
            <TextField source="source" label="Source" />
            <TextField source="defaultValue" label="DefaultValue" />
            <TextField source="helperText" label="HelperText" />
            <TextField source="label" label="Label" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);