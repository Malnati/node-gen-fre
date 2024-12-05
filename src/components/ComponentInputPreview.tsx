// src/components/ComponentInputPreview.tsx

import { useState, useEffect } from 'react';
import { useRecordContext } from 'react-admin';
import { Box, Paper, Typography } from '@mui/material';
import { ComponentInput } from './ComponentInput';

interface ComponentInputPreviewProps {
    component: React.ElementType;
    watchedFields: any;
}

const ComponentInputPreview = ({ component: Component, watchedFields }: ComponentInputPreviewProps) => {

    const record = useRecordContext();
    const [current, setCurrent] = useState(record);
    
    useEffect(() => {
        setCurrent(watchedFields);
    }, [watchedFields]);

    if (!current) return null;

    return (
        <>
            <Paper elevation={3} sx={{ padding: '15px', margin: '15px', width: '98%' }}>
            <Typography variant="h6" sx={{ padding: '15px' }}>Changes view</Typography>
                <Box display="flex" alignItems="center" gap={2}>
                    <ComponentInput source="genericInputs" component={Component} current={current} />
                </Box>
            </Paper>
        </>
    );
};

export default ComponentInputPreview;