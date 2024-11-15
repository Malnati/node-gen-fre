// src/BooleanInputPropsList.tsx

import { Fragment } from 'react';
import { Box } from '@mui/material';

import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, BulkDeleteButton, BulkExportButton, DeleteButton, BooleanInput, Form, useRecordContext, SaveButton, Toolbar, useUpdate } from 'react-admin';


const BooleanInputRenderer = () => {
    const record = useRecordContext();
    const [update, { isLoading }] = useUpdate();

    if (!record) {
        return null;
    }

    const handleSubmit = (data: any) => {
        update('booleanInputs', { id: record.id, data });
    };

    return (
        <Form
            onSubmit={handleSubmit}
            defaultValues={{
                customBoolean: record.customBoolean || false,
            }}
        >
            <Box display="flex" alignItems="center" gap={2}>
                <BooleanInput
                    source="customBoolean"
                    label={record.label || 'Default Label'}
                    defaultValue={record.defaultValue}
                    disabled={record.disabled}
                    fullWidth={record.fullWidth}
                    helperText={record.helperText || 'Helper text'}
                />
            </Box>
        </Form>
    );
};

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
            <BooleanInputRenderer />
            <TextField source="source" label="Source" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);