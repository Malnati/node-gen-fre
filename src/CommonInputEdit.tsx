// src/CommonInputEdit.tsx

import { ReactNode } from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput } from 'react-admin';
import PreviewInput from './PreviewEditInput';
import useInputChanges from './hooks/useInputChanges';

interface CommonInputEditProps {
    children?: ReactNode;
    component: React.ElementType;
}

export const CommonInputEdit = ({ children, component: Component }: CommonInputEditProps) => {

    const {
        changedFields,
        handleOnChange
    } = useInputChanges();

    return (
        <>
            <Edit>
                <SimpleForm>
                    <PreviewInput watchedFields={changedFields} component={Component} />
                    <TextInput source="id" label="Id" disabled onChange={(e) => handleOnChange('id', e.target.value)} />
                    <TextInput source="helperText" label="Helper Text" onChange={(e) => handleOnChange('helperText', e.target.value)} />
                    <TextInput source="label" label="Label" onChange={(e) => handleOnChange('label', e.target.value)}/>
                    <BooleanInput source="defaultValue" label="Default Value" onChange={(e) => handleOnChange('defaultValue', e.target.value)} />
                    <BooleanInput source="readOnly" label="Read Only" onChange={(e) => handleOnChange('readOnly', e.target.value)} />
                    <BooleanInput source="disabled" label="Disabled" onChange={(e) => handleOnChange('disabled', e.target.value)} />
                    <BooleanInput source="fullWidth" label="Full Width" onChange={(e) => handleOnChange('fullWidth', e.target.value)} />
                    <TextInput source="source" label="Source" onChange={(e) => handleOnChange('source', e.target.value)} />
                    <TextInput source="className" label="ClassName" onChange={(e) => handleOnChange('className', e.target.value)} />
                    {children}
                </SimpleForm>
            </Edit>
        </>
    );
};

