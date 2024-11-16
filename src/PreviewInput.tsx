// src/PreviewInput.tsx

import { useState, useEffect } from 'react';
import { useRecordContext } from 'react-admin';
import { Box, Paper, Typography } from '@mui/material';

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

const PreviewInput = ({ component: Component, watchedFields }: PreviewProps) => {

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
                    <GenericInput source="genericInputs" component={Component} current={current} />
                </Box>
            </Paper>
        </>
    );
};

export default PreviewInput;