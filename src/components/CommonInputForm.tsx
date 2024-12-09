// src/components/CommonInputForm.tsx

import { ReactNode } from 'react';
import { useObserveChanges } from 'react-use-observe-changes';
import { SimpleForm, TextInput, BooleanInput } from 'react-admin';

interface CommonInputFormProps {
    children?: ReactNode;
    preview?: ReactNode;
}

export const CommonInputForm = ({ children, preview }: CommonInputFormProps) => {

    const {
        observedFields,
        observeIt
    } = useObserveChanges();

    return (
            <SimpleForm>
                {preview}
                <TextInput source="id" label="Id" disabled onChange={(e) => observeIt('id', e.target.value)} />
                <TextInput source="helperText" label="Helper Text" onChange={(e) => observeIt('helperText', e.target.value)} />
                <TextInput source="label" label="Label" onChange={(e) => observeIt('label', e.target.value)}/>
                <BooleanInput source="readOnly" label="Read Only" onChange={(e) => observeIt('readOnly', e.target.value)} />
                <BooleanInput source="disabled" label="Disabled" onChange={(e) => observeIt('disabled', e.target.value)} />
                <BooleanInput source="fullWidth" label="Full Width" onChange={(e) => observeIt('fullWidth', e.target.value)} />
                <TextInput source="source" label="Source" onChange={(e) => observeIt('source', e.target.value)} />
                <TextInput source="className" label="ClassName" onChange={(e) => observeIt('className', e.target.value)} />
                {children}
            </SimpleForm>
    );
};

