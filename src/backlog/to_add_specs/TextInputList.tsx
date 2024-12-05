// src/TextInputList.tsx

import { Fragment } from 'react';

import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, BulkDeleteButton, BulkExportButton, DeleteButton, useRecordContext } from 'react-admin';

const record = useRecordContext();

const filters = [
    <TextInput source="q" label="Text" alwaysOn />,
    <ReferenceInput source="id" label="TextInput" reference="textInputs" />,
];

export const TextInputList = () => (
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
            <TextField source="fullWidth" label="FullWidth" />
            <TextField source="helperText" label="HelperText" />
            <TextField source="label" label="Label" />
            <TextField source="type" label="Type" />
            <TextField source="resettable" label="Resettable" />
            <TextField source="multiline" label="Multiline" />
            <TextField source="placeholder" label="Placeholder" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);