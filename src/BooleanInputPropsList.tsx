// src/BooleanInputPropsList.tsx

import { Fragment } from 'react';

import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, BulkDeleteButton, BulkExportButton, DeleteButton } from 'react-admin';

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="BooleanInputProps" reference="booleanInputProps" />,
];

export const BooleanInputPropsList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate/>}>
        <Datagrid bulkActionButtons={
            <Fragment>
                    <BulkExportButton />
                    <BulkDeleteButton mutationMode="pessimistic"/>
                </Fragment>
            }>
            <TextField source="id" label="Id" />
            <TextField source="source" label="Source" />
            <TextField source="className" label="ClassName" />
            <TextField source="defaultValue" label="DefaultValue" />
            <TextField source="readOnly" label="ReadOnly" />
            <TextField source="disabled" label="Disabled" />
            <TextField source="format" label="Format" />
            <TextField source="fullWidth" label="FullWidth" />
            <TextField source="helperText" label="HelperText" />
            <TextField source="label" label="Label" />
            <TextField source="parse" label="Parse" />
            <TextField source="sx" label="Sx" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);