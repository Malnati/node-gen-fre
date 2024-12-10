// src/components/ComponentInputPreview.tsx

import { Box, Paper, Typography } from '@mui/material';
import { ComponentInput } from './ComponentInput';
import { useRegistryContext } from "../hooks/useRegistryContext";

interface ComponentInputPreviewProps {
    component: React.ElementType;
    observedFields: string,
}

const ComponentInputPreview = ({ component: Component, observedFields }: ComponentInputPreviewProps) => {
    const { getInstance, observeFieldOf } = useRegistryContext();
    const instance = getInstance(observedFields);

    if (!instance || instance === undefined || Object.keys(instance).length === 0) {
        observeFieldOf(observedFields, 'forcing', observedFields);
        return <div>Loading...</div>;
    }

    return (
        <>
            <Paper elevation={3} sx={{ padding: '15px', margin: '15px', width: '98%' }}>
                <Typography variant="h6" sx={{ padding: '15px' }}>Changes view</Typography>
                <Box display="flex" alignItems="center" gap={2}>
                    <ComponentInput source="genericInputs" component={Component} current={instance} />
                </Box>
            </Paper>
        </>
    );
};

export default ComponentInputPreview;