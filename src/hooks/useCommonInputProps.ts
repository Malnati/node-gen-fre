// src/hooks/useCommonInputProps.ts

import { useState } from 'react';

const useCommonInputProps = () => {

    const [watchedFields, setWatchedFields] = useState<{ [key: string]: any }>({});

    const handleOnChange = (key: string, value: any) => {
        if (value === 'on') {
            value = !watchedFields[key];
        }
        const newObject = {
            ...watchedFields,
            [key]: value
        };
        setWatchedFields(newObject);
    };

    return {
        watchedFields,
        handleOnChange
    };
};

export default useCommonInputProps;