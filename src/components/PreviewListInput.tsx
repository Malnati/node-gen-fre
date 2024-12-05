// src/PreviewListInput.tsx

import {
  Form,
  useRecordContext,
  useUpdate,
} from "react-admin";

import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface GenericInputProps {
    component: React.ElementType;
    source: string;
    current: any;
}

const GenericInput = ({ component: Component, source, current }: GenericInputProps) => {
    return (
        <Component
            source={source}
            label={current?.label || ''}
            defaultValue={current?.defaultValue}
            disabled={current?.disabled}
            fullWidth={current?.fullWidth}
            helperText={current?.helperText || ''}
        />
    );
};

interface PreviewProps {
    component: React.ElementType;
    watchedFields: any;
}

const PreviewListInput = ({ component: Component, watchedFields }: PreviewProps) => {

    const record = useRecordContext();
    const [update] = useUpdate();
    const [current, setCurrent] = useState(record);

    if (!record) {
        return null;
    }

    const handleSubmit = (data: any) => {
        update('booleanInputs', { id: record.id, data });
    };
    
    
    useEffect(() => {
        setCurrent(watchedFields);
    }, [watchedFields]);

    if (!current) return null;

    return (
        <Form
            onSubmit={handleSubmit}
            defaultValues={{
                customBoolean: record.customBoolean || false,
            }}
        >
            <Paper elevation={3} sx={{ padding: '15px', margin: '15px', width: '98%' }}>
            <Typography variant="h6" sx={{ padding: '15px' }}>Changes view</Typography>
                <Box display="flex" alignItems="center" gap={2}>
                    <GenericInput source="genericInputs" component={Component} current={current} />
                </Box>
            </Paper>
        </Form>
    );
};

export default PreviewListInput;