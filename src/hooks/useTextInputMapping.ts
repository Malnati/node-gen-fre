// src/hooks/useTextInputMapping.ts

import useKeys from './useKeys';

/**
 * Hook that provides functions to map data for use in TextInput components.
 * 
 * This hook includes functions to map properties from a given data set,
 * transforming them into a format suitable for TextInput components.
 * 
 * @returns An object containing the mapping functions.
 * 
 * @example
 * const { textFieldMapping } = useTextInputMapping();
 * 
 * const data = {
 *     records: [
 *         { id: 1, source: 'name', className: 'input-class', defaultValue: 'John Doe', readOnly: false, disabled: false, fullWidth: true, helperText: 'Enter your name', label: 'Name', type: 'text', resettable: true, multiline: false, placeholder: 'Name' },
 *         { id: 2, source: 'email', className: 'input-class', defaultValue: 'john@example.com', readOnly: false, disabled: false, fullWidth: true, helperText: 'Enter your email', label: 'Email', type: 'email', resettable: true, multiline: false, placeholder: 'Email' }
 *     ]
 * };
 * 
 * const transformedData = textFieldMapping(data);
 * 
 * console.log(transformedData);
 * // {
 * //     records: [
 * //         { id: 1, key: 1, source: 'name', className: 'input-class', defaultValue: 'John Doe', readOnly: false, disabled: false, fullWidth: true, helperText: 'Enter your name', label: 'Name', type: 'text', resettable: true, multiline: false, placeholder: 'Name' },
 * //         { id: 2, key: 2, source: 'email', className: 'input-class', defaultValue: 'john@example.com', readOnly: false, disabled: false, fullWidth: true, helperText: 'Enter your email', label: 'Email', type: 'email', resettable: true, multiline: false, placeholder: 'Email' }
 * //     ]
 * // }
 */
const useTextInputMapping = () => {

    const { useKey } = useKeys();

    /**
     * Maps a list of records, ensuring each record has a unique key.
     * 
     * @param data - The data to be mapped.
     * @returns The mapped data with unique keys.
     */
    const recordsMapping = (data: Array<any>) => {
        console.log(`data: ${JSON.stringify(data, null, 1)}`);
        return data.map((item: any) => { 
            return useKey(item);
        });
    };

    /**
     * Transforms an object of data, applying the mapping functions to generate
     * the records for TextInput components.
     * 
     * @param data - The data to be transformed.
     * @returns The transformed data with records.
     * 
     * @example
     * const data = {
     *     records: [
     *         { id: 1, source: 'name', className: 'input-class', defaultValue: 'John Doe', readOnly: false, disabled: false, fullWidth: true, helperText: 'Enter your name', label: 'Name', type: 'text', resettable: true, multiline: false, placeholder: 'Name' },
     *         { id: 2, source: 'email', className: 'input-class', defaultValue: 'john@example.com', readOnly: false, disabled: false, fullWidth: true, helperText: 'Enter your email', label: 'Email', type: 'email', resettable: true, multiline: false, placeholder: 'Email' }
     *     ]
     * };
     * 
     * const transformedData = textFieldMapping(data);
     * 
     * console.log(transformedData);
     * // {
     * //     records: [
     * //         { id: 1, key: 1, source: 'name', className: 'input-class', defaultValue: 'John Doe', readOnly: false, disabled: false, fullWidth: true, helperText: 'Enter your name', label: 'Name', type: 'text', resettable: true, multiline: false, placeholder: 'Name' },
     * //         { id: 2, key: 2, source: 'email', className: 'input-class', defaultValue: 'john@example.com', readOnly: false, disabled: false, fullWidth: true, helperText: 'Enter your email', label: 'Email', type: 'email', resettable: true, multiline: false, placeholder: 'Email' }
     * //     ]
     * // }
     */
    const textFieldMapping = (data: any) => {
        console.log(`textFieldMapping data: ${JSON.stringify(data, null, 1)}`);
        let textFieldData = { ...data }; 
        if (textFieldData) {
            textFieldData.records = recordsMapping(textFieldData.records);
        }
        return textFieldData;
    };

    return {
        textFieldMapping,
        recordsMapping,
        useKey
    };
};

export default useTextInputMapping;