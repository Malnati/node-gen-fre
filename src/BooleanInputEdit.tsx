// src/BooleanInputEdit.tsx

import { useState, useEffect, SetStateAction } from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput, useUpdate, Form, useRecordContext } from 'react-admin';
import { Box, Paper } from '@mui/material';


const Preview = ({ watchedFields }: { watchedFields: any }) => {

    const record = useRecordContext();
    const [current, setCurrent] = useState(record);
    const [update] = useUpdate();
    
    const handleSubmit = (data: any) => {
        update('booleanInputs', { id: current?.id, data });
    };
    
    useEffect(() => {
        setCurrent(watchedFields);
    }, [watchedFields]);

    if (!current) return null;

    return (
        <>
            <span>Preview</span>
            <Paper elevation={3} sx={{ padding: '15px', width: '100%' }}>
                <Form
                    onSubmit={handleSubmit}
                    defaultValues={{
                        booleanInputs: current?.booleanInputs || false,
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <BooleanInput
                            source="booleanInputs"
                            label={current?.label || 'Default Label'}
                            defaultValue={current?.defaultValue}
                            disabled={current?.disabled}
                            fullWidth={current?.fullWidth}
                            helperText={current?.helperText || 'Helper text'}
                        />
                    </Box>
                </Form>
            </Paper>
        </>
    );
};

import { ReactNode } from 'react';

export const BooleanInputEdit = ({ children }: { children?: ReactNode }) => {

    const record = useRecordContext();
    const [watchedFields, setWatchedFields] = useState(record);
    const [id, setId] = useState('');
    const [source, setSource] = useState('');
    const [className, setClassName] = useState('');
    const [defaultValue, setDefaultValue] = useState('');
    const [readOnly, setReadOnly] = useState('');
    const [disabled, setDisabled] = useState('');
    const [fullWidth, setFullWidth] = useState('');
    const [helperText, setHelperText] = useState('');
    const [label, setLabel] = useState('');

    const handleOnChangeId = (e: { target: { value: SetStateAction<string>; }; }) => {
        setId(e.target.value);
        const newObject = {
            id: e.target.value,
            source,
            className,
            defaultValue,
            readOnly,
            disabled,
            fullWidth,
            helperText,
            label
        };
        setWatchedFields(newObject);
    };
    const handleOnChangeSource = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSource(e.target.value);
        const newObject = {
            id,
            source: e.target.value,
            className,
            defaultValue,
            readOnly,
            disabled,
            fullWidth,
            helperText,
            label
        };
        setWatchedFields(newObject);
    };
    const handleOnChangeClassName = (e: { target: { value: SetStateAction<string>; }; }) => {
        setClassName(e.target.value);
        const newObject = {
            id,
            source,
            className: e.target.value,
            defaultValue,
            readOnly,
            disabled,
            fullWidth,
            helperText,
            label
        };
        setWatchedFields(newObject);
    };
    const handleOnChangeDefaultValue = (e: { target: { value: SetStateAction<string>; }; }) => {
        setDefaultValue(e.target.value);
        const newObject = {
            id,
            source,
            className,
            defaultValue: e.target.value,
            readOnly,
            disabled,
            fullWidth,
            helperText,
            label
        };
        setWatchedFields(newObject);
    };
    const handleOnChangeReadOnly = (e: { target: { value: SetStateAction<string>; }; }) => {
        setReadOnly(e.target.value);
        const newObject = {
            id,
            source,
            className,
            defaultValue,
            readOnly: e.target.value,
            disabled,
            fullWidth,
            helperText,
            label
        };
        setWatchedFields(newObject);
    };
    const handleOnChangeDisabled = (e: { target: { value: SetStateAction<string>; }; }) => {
        setDisabled(e.target.value);
        const newObject = {
            id,
            source,
            className,
            defaultValue,
            readOnly,
            disabled: e.target.value,
            fullWidth,
            helperText,
            label
        };
        setWatchedFields(newObject);
    };
    const handleOnChangeFullWidth = (e: { target: { value: SetStateAction<string>; }; }) => {
        setFullWidth(e.target.value);
        const newObject = {
            id,
            source,
            className,
            defaultValue,
            readOnly,
            disabled,
            fullWidth: e.target.value,
            helperText,
            label
        };
        setWatchedFields(newObject);
    };
    const handleOnChangeHelperText = (e: { target: { value: SetStateAction<string>; }; }) => {
        setHelperText(e.target.value);
        const newObject = {
            id,
            source,
            className,
            defaultValue,
            readOnly,
            disabled,
            fullWidth,
            helperText: e.target.value,
            label
        };
        setWatchedFields(newObject);
    };
    const handleOnChangeLabel = (e: { target: { value: SetStateAction<string>; }; }) => {
        setLabel(e.target.value);
        const newObject = {
            id,
            source,
            className,
            defaultValue,
            readOnly,
            disabled,
            fullWidth,
            helperText,
            label: e.target.value
        };
        setWatchedFields(newObject);
    };

    return (
        <>
            <Preview watchedFields={watchedFields} />
            <Edit>
                <SimpleForm title='TESTE'>
                    <TextInput source="id" label="Id" disabled onChange={handleOnChangeId} />
                    <TextInput source="source" label="Source" onChange={handleOnChangeSource} />
                    <TextInput source="className" label="ClassName" onChange={handleOnChangeClassName} />
                    <BooleanInput source="defaultValue" label="Default Value" onChange={handleOnChangeDefaultValue} />
                    <BooleanInput source="readOnly" label="Read Only" onChange={handleOnChangeReadOnly} />
                    <BooleanInput source="disabled" label="Disabled" onChange={handleOnChangeDisabled} />
                    <BooleanInput source="fullWidth" label="Full Width" onChange={handleOnChangeFullWidth} />
                    <TextInput source="helperText" label="Helper Text" onChange={handleOnChangeHelperText} />
                    <TextInput source="label" label="Label" onChange={handleOnChangeLabel}/>
                    {children}
                </SimpleForm>
            </Edit>
        </>
    );
};

