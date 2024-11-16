// src/CommonInputEdit.tsx

import { ReactNode } from 'react';
import { useState, useEffect, SetStateAction } from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput, useUpdate, Form, useRecordContext } from 'react-admin';
import { Box, Paper, Typography } from '@mui/material';

interface GenericInputProps {
    component: React.ElementType;
    source: string;
    current: any;
}

const GenericInput = ({ component: Component, source, current }: GenericInputProps) => {
    return (
        <Component
            source={source}
            label={current?.label || ''}
            defaultValue={current?.defaultValue}
            disabled={current?.disabled}
            fullWidth={current?.fullWidth}
            helperText={current?.helperText || ''}
        />
    );
};

interface PreviewProps {
    component: React.ElementType;
    watchedFields: any;
}

const Preview = ({ component: Component, watchedFields }: PreviewProps) => {

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
            <Paper elevation={3} sx={{ padding: '15px', margin: '15px', width: '98%' }}>
            <Typography variant="h6" sx={{ padding: '15px' }}>Changes view</Typography>
                <Form
                    onSubmit={handleSubmit}
                    defaultValues={{
                        genericInputs: current?.genericInputs || false,
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <GenericInput source="genericInputs" component={Component} current={current} />
                    </Box>
                </Form>
            </Paper>
        </>
    );
};


export const CommonInputEdit = ({ children }: { children?: ReactNode }) => {

    const [watchedFields, setWatchedFields] = useState({});
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
            <Edit>
                <SimpleForm>
            <Preview watchedFields={watchedFields} component={BooleanInput} />
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

