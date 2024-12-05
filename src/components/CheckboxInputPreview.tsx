// src/components/CheckboxInputPreview.tsx

import { useState, useEffect } from 'react';
import { CheckboxGroupInput, useRecordContext } from 'react-admin';
import { Box, Paper, Typography } from '@mui/material';

interface CheckboxInputPreviewProps {
    watchedFields: any;
}

const CheckboxInputPreview = ({ watchedFields }: CheckboxInputPreviewProps) => {

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
                    <CheckboxGroupInput 
                        key={current.key}
                        source="qualquer" 
                        label={current.label || 'Default Label'}
                        helperText={current.helperText || 'Helper text'}
                        labelPlacement={current.labelPlacement}
                        disabled={current.disabled}
                        fullWidth={current.fullWidth}
                        choices={current.choices} 
                        translateChoice={current.translateChoice} />
                </Box>
            </Paper>
        </>
    );
};

export default CheckboxInputPreview;