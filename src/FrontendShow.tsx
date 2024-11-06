// src/FrontendShow.tsx

import { useRecordContext, NumberField, TextField, Show, SimpleShowLayout } from 'react-admin';
import { Typography } from '@mui/material';
import { Schema, Field } from './cache/db'; // Importa as interfaces Schema e Field

const FieldDisplay = ({ field }: { field: Field }) => {
    switch (field.component) {
        case 'TextField':
            return <TextField source={field.name} />;
        case 'NumberField':
            return <NumberField source={field.name} />;
        case 'BooleanField':
            return <TextField source={field.name} />; // Modifique conforme necessário para booleanos
        default:
            return null;
    }
};

export const FrontendShow = () => {
    const record = useRecordContext<Schema>(); // Obtém o schema atual a ser exibido

    if (!record) return null;

    return (
        <Show>
            <SimpleShowLayout>
                <Typography variant="h6" gutterBottom>
                    {record.resourceName} - Detalhes do Schema
                </Typography>

                {record.fields.map((field, index) => (
                    <FieldDisplay key={index} field={field} />
                ))}
            </SimpleShowLayout>
        </Show>
    );
};