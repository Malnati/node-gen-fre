// src/hooks/useCommonInputProps.ts

import { useState, SetStateAction } from 'react';

const useCommonInputProps = () => {

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

    return {
        watchedFields,
        handleOnChangeId,
        handleOnChangeSource,
        handleOnChangeClassName,
        handleOnChangeDefaultValue,
        handleOnChangeReadOnly,
        handleOnChangeDisabled,
        handleOnChangeFullWidth,
        handleOnChangeHelperText,
        handleOnChangeLabel
    };
};

export default useCommonInputProps;