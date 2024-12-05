// src/components/CommonInputCreate.tsx

import { ReactNode } from 'react';
import { Create, SimpleForm, TextInput, BooleanInput, CheckboxGroupInput } from 'react-admin';
import ComponentInputPreview from './ComponentInputPreview';
import { useObserveChanges } from 'react-use-observe-changes';
import PreviewCheckboxInput from '../resource/input/CheckboxInputPreview';

interface CommonInputCreateProps {
    children?: ReactNode;
    component: React.ElementType;
}

export const CommonInputCreate = ({ children, component: Component }: CommonInputCreateProps) => {

    const {
        observedFields,
        observeIt
    } = useObserveChanges();

    return (
        <>
            <Create>
                <SimpleForm>
                    {Component === CheckboxGroupInput && 
                        <PreviewCheckboxInput watchedFields={observedFields} />}
                    {Component !== CheckboxGroupInput && 
                        <ComponentInputPreview watchedFields={observedFields} component={Component} />}
                    <TextInput source="id" label="Id" disabled onChange={(e) => observeIt('id', e.target.value)} />
                    <TextInput source="helperText" label="Helper Text" onChange={(e) => observeIt('helperText', e.target.value)} />
                    <TextInput source="label" label="Label" onChange={(e) => observeIt('label', e.target.value)}/>
                    {Component !== CheckboxGroupInput && 
                        <BooleanInput source="defaultValue" label="Default Value" onChange={(e) => observeIt('defaultValue', e.target.value)} />}
                    <BooleanInput source="readOnly" label="Read Only" onChange={(e) => observeIt('readOnly', e.target.value)} />
                    <BooleanInput source="disabled" label="Disabled" onChange={(e) => observeIt('disabled', e.target.value)} />
                    <BooleanInput source="fullWidth" label="Full Width" onChange={(e) => observeIt('fullWidth', e.target.value)} />
                    <TextInput source="source" label="Source" onChange={(e) => observeIt('source', e.target.value)} />
                    <TextInput source="className" label="ClassName" onChange={(e) => observeIt('className', e.target.value)} />
                    {children}
                </SimpleForm>
            </Create>
        </>
    );
};

