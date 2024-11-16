// src/CommonInputEdit.tsx

import { ReactNode } from 'react';
import { useState, SetStateAction } from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput } from 'react-admin';
import PreviewInput from './PreviewEditInput';
import useCommonInputProps from './hooks/useCommonInputProps';

interface CommonInputEditProps {
    children?: ReactNode;
    component: React.ElementType;
}

export const CommonInputEdit = ({ children, component: Component }: CommonInputEditProps) => {

    const {
        watchedFields,
        handleOnChangeId,
        handleOnChangeSource,
        handleOnChangeClassName,
        handleOnChangeDefaultValue,
        handleOnChangeReadOnly,
        handleOnChangeDisabled,
        handleOnChangeFullWidth,
        handleOnChangeHelperText,
        handleOnChangeLabel,
    } = useCommonInputProps();

    return (
        <>
            <Edit>
                <SimpleForm>
                    <PreviewInput watchedFields={watchedFields} component={Component} />
                    <TextInput source="id" label="Id" disabled onChange={handleOnChangeId} />
                    <TextInput source="helperText" label="Helper Text" onChange={handleOnChangeHelperText} />
                    <TextInput source="label" label="Label" onChange={handleOnChangeLabel}/>
                    <BooleanInput source="defaultValue" label="Default Value" onChange={handleOnChangeDefaultValue} />
                    <BooleanInput source="readOnly" label="Read Only" onChange={handleOnChangeReadOnly} />
                    <BooleanInput source="disabled" label="Disabled" onChange={handleOnChangeDisabled} />
                    <BooleanInput source="fullWidth" label="Full Width" onChange={handleOnChangeFullWidth} />
                    <TextInput source="source" label="Source" onChange={handleOnChangeSource} />
                    <TextInput source="className" label="ClassName" onChange={handleOnChangeClassName} />
                    {children}
                </SimpleForm>
            </Edit>
        </>
    );
};

