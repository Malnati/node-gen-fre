// src/BooleanInputEdit.tsx

import { BooleanInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const BooleanInputEdit = () => (
    <Edit>
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
    </Edit>
);