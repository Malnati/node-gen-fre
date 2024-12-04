// src/resource/BooleanInputCreate.tsx

import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin';

export const BooleanInputCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" label="Id" />
            <TextInput source="source" label="Source" />
            <TextInput source="className" label="ClassName" />
            <BooleanInput source="defaultValue" label="Default Value" />
            <BooleanInput source="readOnly" label="Read Only" />
            <BooleanInput source="disabled" label="Disabled" />
            <BooleanInput source="fullWidth" label="Full Width" />
            <TextInput source="helperText" label="Helper Text" />
            <TextInput source="label" label="Label" />
        </SimpleForm>
    </Create>
);