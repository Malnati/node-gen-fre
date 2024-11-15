// src/CheckboxInputPropsList.tsx

import { Fragment } from 'react';
import { Box } from '@mui/material';
import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, BulkDeleteButton, BulkExportButton, DeleteButton, BooleanInput, Form, useRecordContext, useUpdate, CheckboxGroupInput } from 'react-admin';

const CheckboxInputRenderer = () => {
    const record = useRecordContext();
    const [update] = useUpdate();

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
                customCheckbox: record.customBoolean || false,
            }}
        >
            <Box display="flex" alignItems="center" gap={2}>
                <CheckboxGroupInput
                    source="customCheckbox"
                    label={record.label || 'Default Label'}
                    defaultValue={record.defaultValue}
                    disabled={record.disabled}
                    fullWidth={record.fullWidth}
                    helperText={record.helperText || 'Helper text'}
                    labelPlacement={record.labelPlacement}
                    optionValue={record.optionValue}
                    translateChoice={record.translateChoice}
                    choices={record.choices}
                />
            </Box>
        </Form>
    );
};

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="CheckboxInput" reference="checkboxInputs" />,
];

export const CheckboxInputList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate/>}>
        <Datagrid bulkActionButtons={
            <Fragment>
                    <BulkExportButton />
                    <BulkDeleteButton mutationMode="pessimistic"/>
                </Fragment>
            }>
            <TextField source="id" label="Id" />
            <CheckboxInputRenderer />
            <TextField source="source" label="Source" />
            <TextField source="label" label="Label" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);