// src/components/CommonInputForm.tsx

import { ReactNode } from 'react';
import { SimpleForm, TextInput, BooleanInput } from 'react-admin';
import { useRegistryContext } from "../hooks/useRegistryContext";

interface CommonInputFormProps {
    children?: ReactNode;
    preview?: ReactNode;
    observedFields: string;
}

export const CommonInputForm = ({ children, preview, observedFields }: CommonInputFormProps) => {

    const { observeFieldOf } = useRegistryContext();

    if (!observedFields) {
        throw new Error("observedFields is required, please create a new instance of useObserveChanges by observeInstance('myThing') before, then provide it to CommonInputForm using props.");
    }

    return (
            <SimpleForm>
                {preview}
                <TextInput source="id" label="Id" disabled onChange={(e) => observeFieldOf(observedFields, 'id', e.target.value)} />
                <TextInput source="helperText" label="Helper Text" onChange={(e) => observeFieldOf(observedFields, 'helperText', e.target.value)} />
                <TextInput source="label" label="Label" onChange={(e) => observeFieldOf(observedFields, 'label', e.target.value)}/>
                <BooleanInput source="readOnly" label="Read Only" onChange={(e) => observeFieldOf(observedFields, 'readOnly', e.target.value)} />
                <BooleanInput source="disabled" label="Disabled" onChange={(e) => observeFieldOf(observedFields, 'disabled', e.target.value)} />
                <BooleanInput source="fullWidth" label="Full Width" onChange={(e) => observeFieldOf(observedFields, 'fullWidth', e.target.value)} />
                <TextInput source="source" label="Source" onChange={(e) => observeFieldOf(observedFields, 'source', e.target.value)} />
                <TextInput source="className" label="ClassName" onChange={(e) => observeFieldOf(observedFields, 'className', e.target.value)} />
                {children}
            </SimpleForm>
    );
};

