// src/CheckboxInputPropsList.tsx

import { Box } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, BulkDeleteButton, BulkExportButton, DeleteButton, BooleanInput, Form, useRecordContext, useUpdate, CheckboxGroupInput, TopToolbar, CreateButton, ExportButton, FilterButton, SelectColumnsButton, BulkUpdateButton } from 'react-admin';

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

const PostBulkActionButtons = () => (
    <>
        <BulkUpdateButton label="Reset Views" data={{ views: 0 }} icon={<VisibilityOff/>} />
        <BulkDeleteButton />
        <BulkExportButton />
    </>
);

const CustomListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <FilterButton/>
        <CreateButton/>
        <ExportButton/>
        <DeleteButton />
    </TopToolbar>
);

export const CheckboxInputList = () => (
    <List emptyWhileLoading filters={filters} actions={<CustomListActions />}>
        <Datagrid bulkActionButtons={<PostBulkActionButtons />}>
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