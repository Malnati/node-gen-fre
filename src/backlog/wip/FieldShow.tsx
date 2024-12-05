// src/FieldShow.tsx

import { ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const FieldShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="id" reference="fields" />
            <TextField source="name" />
            <TextField source="type" />
            <TextField source="specifications" />
        </SimpleShowLayout>
    </Show>
);