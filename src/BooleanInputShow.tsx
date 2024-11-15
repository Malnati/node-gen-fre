// src/BooleanInputShow.tsx

import { BooleanField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const BooleanInputShow = () => (
    <>
        <Show>
            <SimpleShowLayout>
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