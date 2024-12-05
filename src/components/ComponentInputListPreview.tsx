// src/components/ComponentInputListPreview.tsx

import {
  Form,
  useRecordContext,
  useUpdate,
} from "react-admin";

import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ComponentInput } from "./ComponentInput";

interface ComponentInputListPreviewProps {
    component: React.ElementType;
    watchedFields: any;
}

const ComponentInputListPreview = ({ component: Component, watchedFields }: ComponentInputListPreviewProps) => {

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
                    <ComponentInput source="genericInputs" component={Component} current={current} />
                </Box>
            </Paper>
        </Form>
    );
};

export default ComponentInputListPreview;