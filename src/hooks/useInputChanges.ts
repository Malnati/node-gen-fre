// src/hooks/useInputChanges.ts

import { useState } from 'react';

const useInputChanges = () => {

    const [changedFields, setChangedFields] = useState<{ [key: string]: any }>({});

    const handleOnChange = (key: string, value: any) => {
        if (value === 'on') {
            value = !changedFields[key];
        }
        const newObject = {
            ...changedFields,
            [key]: value
        };
        setChangedFields(newObject);
    };

    return {
        changedFields,
        handleOnChange
    };
};

export default useInputChanges;