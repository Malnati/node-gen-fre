// src/BooleanInputEdit.tsx

import { Form, useRecordContext, useUpdate , BooleanInput, Datagrid, DateField, DateInput, Edit, EditButton, minValue, number, NumberInput, ReferenceManyField, required, SimpleForm, TabbedForm, TextField, TextInput } from 'react-admin';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const BooleanInputRenderer = () => {
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

export const BooleanInputEdit = () => (
    <>
        <Edit>
            <SimpleForm >
                <Stack direction="row" spacing={2} sx={{ padding: '5px', width: '100%' }}>
                    <Paper elevation={3} sx={{ padding: '15px', width: '50%' }}>
                        <TextInput source="id" label="Id" />
                        <TextInput source="source" label="Source" />
                        <TextInput source="className" label="ClassName" />
                        <BooleanInput source="defaultValue" label="Default Value" />
                        <BooleanInput source="readOnly" label="Read Only" />
                        <BooleanInput source="disabled" label="Disabled" />
                        <BooleanInput source="fullWidth" label="Full Width" />
                        <TextInput source="helperText" label="Helper Text" />
                        <TextInput source="label" label="Label" />
                    </Paper>
                    <Paper elevation={3} sx={{ padding: '15px', width: '50%' }}>
                        <BooleanInputRenderer />
                    </Paper>
                </Stack>
            </SimpleForm>
        </Edit>
    </>
);