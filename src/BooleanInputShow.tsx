// src/BooleanInputShow.tsx

import { BooleanField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { Box } from '@mui/material';

import { BooleanInput, Form, useRecordContext, useUpdate } from 'react-admin';

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

export const BooleanInputShow = () => (
    <>
        <Show>
            <SimpleShowLayout>
                <BooleanInputRenderer />
                <TextField source="id" label="Id" />
                <TextField source="source" label="Source" />
                <TextField source="className" label="ClassName" />
                <BooleanField source="defaultValue" label="Default Value" />
                <BooleanField source="readOnly" label="Read Only" />
                <BooleanField source="disabled" label="Disabled" />
                <BooleanField source="fullWidth" label="Full Width" />
                <TextField source="helperText" label="Helper Text" />
                <TextField source="label" label="Label" />
            </SimpleShowLayout>
        </Show>
    </>
);