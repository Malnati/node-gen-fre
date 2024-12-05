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
 *     id: 1,
 *     source: 'name',
 *     className: 'input-class',
 *     defaultValue: 'John Doe',
 *     readOnly: false,
 *     disabled: false,
 *     fullWidth: true,
 *     helperText: 'Enter your name',
 *     label: 'Name',
 *     type: 'text',
 *     resettable: true,
 *     multiline: false,
 *     placeholder: 'Name'
 * };
 * 
 * const transformedData = textFieldMapping(data);
 * 
 * console.log(transformedData);
 * // {
 * //     id: 1,
 * //     key: 1,
 * //     source: 'name',
 * //     className: 'input-class',
 * //     defaultValue: 'John Doe',
 * //     readOnly: false,
 * //     disabled: false,
 * //     fullWidth: true,
 * //     helperText: 'Enter your name',
 * //     label: 'Name',
 * //     type: 'text',
 * //     resettable: true,
 * //     multiline: false,
 * //     placeholder: 'Name'
 * // }
 */
const useTextInputMapping = () => {

    const { useKey } = useKeys();

    /**
     * Maps a record, ensuring it has a unique key.
     * 
     * @param data - The data to be mapped.
     * @returns The mapped data with a unique key.
     */
    const recordMapping = (data: any) => {
        return useKey(data);
    };

    /**
     * Transforms a record of data, applying the mapping functions to generate
     * the properties for TextInput components.
     * 
     * @param data - The data to be transformed.
     * @returns The transformed data with a unique key.
     * 
     * @example
     * const data = {
     *     id: 1,
     *     source: 'name',
     *     className: 'input-class',
     *     defaultValue: 'John Doe',
     *     readOnly: false,
     *     disabled: false,
 *     fullWidth: true,
 *     helperText: 'Enter your name',
 *     label: 'Name',
 *     type: 'text',
 *     resettable: true,
 *     multiline: false,
 *     placeholder: 'Name'
     * };
     * 
     * const transformedData = textFieldMapping(data);
     * 
     * console.log(transformedData);
     * // {
     * //     id: 1,
     * //     key: 1,
     * //     source: 'name',
     * //     className: 'input-class',
     * //     defaultValue: 'John Doe',
     * //     readOnly: false,
     * //     disabled: false,
     * //     fullWidth: true,
     * //     helperText: 'Enter your name',
     * //     label: 'Name',
     * //     type: 'text',
     * //     resettable: true,
     * //     multiline: false,
     * //     placeholder: 'Name'
     * // }
     */
    const textFieldMapping = (data: any) => {
        let textFieldData = { ...data }; 
        if (textFieldData) {
            textFieldData = recordMapping(textFieldData);
        }
        return textFieldData;
    };

    return {
        textFieldMapping,
        recordMapping,
        useKey
    };
};

export default useTextInputMapping;