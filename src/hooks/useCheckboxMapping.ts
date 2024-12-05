// src/hooks/useCheckboxMapping.ts

import useKeys from './useKeys';

/**
 * Hook that provides functions to map data for use in checkbox components.
 * 
 * This hook includes functions to map choices, option texts, and option values
 * from a given data set, transforming them into a format suitable for checkbox components.
 * 
 * @returns An object containing the mapping functions.
 * 
 * @example
 * const { checkboxMapping } = useCheckboxMapping();
 * 
 * const data = {
 *     choices: [
 *         { id: 1, name: 'Option 1' },
 *         { id: 2, name: 'Option 2' },
 *         { id: 3, name: 'Option 3' }
 *     ]
 * };
 * 
 * const transformedData = checkboxMapping(data);
 * 
 * console.log(transformedData);
 * // {
 * //     choices: [
 * //         { id: 1, name: 'Option 1', key: 1 },
 * //         { id: 2, name: 'Option 2', key: 2 },
 * //         { id: 3, name: 'Option 3', key: 3 }
 * //     ],
 * //     optionText: ['name', 'name', 'name'],
 * //     optionValue: ['id', 'id', 'id']
 * // }
 */
const useCheckboxMapping = () => {

    const { useKey, useKeyOrId } = useKeys();

    /**
     * Maps a list of items, ensuring each item has a unique key or ID.
     * 
     * @param data - The data to be mapped.
     * @returns The mapped data with unique keys or IDs.
     */
    const choicesMapping = (data: Array<any>) => {
        return data.map((item: any) => { 
            return useKeyOrId(item);
        });
    };

    /**
     * Maps a list of items to extract option texts.
     * 
     * @param data - The data to be mapped.
     * @returns The mapped option texts.
     */
    const optionTextMapping = (data: any) => {
        return data.map((item: any) => { 
            let _optionText: string = '';
            Object.keys(item).forEach(key => {
                if ( !_optionText  && key !== 'id' && key !== 'key' ) _optionText = key;
            });
            return _optionText;
        });
    };

    /**
     * Maps a list of items to extract option values.
     * 
     * @param data - The data to be mapped.
     * @returns The mapped option values.
     */
    const optionValueMapping = (data: any) => {
        return data.map((item: any) => { 
            let _optionValue: string = '';
            Object.keys(item).forEach(key => {
                if ( !_optionValue && key !== 'id' && key !== 'key' ) _optionValue = key;
            });
            return _optionValue;
        });
    };

    /**
     * Transforms an object of data, applying the mapping functions to generate
     * the choices, option values, and option texts for checkboxes.
     * 
     * @param data - The data to be transformed.
     * @returns The transformed data with choices, option values, and option texts.
     * 
     * @example
     * const data = {
     *     choices: [
     *         { id: 1, name: 'Option 1' },
     *         { id: 2, name: 'Option 2' },
     *         { id: 3, name: 'Option 3' }
     *     ]
     * };
     * 
     * const transformedData = checkboxMapping(data);
     * 
     * console.log(transformedData);
     * // {
     * //     choices: [
     * //         { id: 1, name: 'Option 1', key: 1 },
     * //         { id: 2, name: 'Option 2', key: 2 },
     * //         { id: 3, name: 'Option 3', key: 3 }
     * //     ],
     * //     optionText: ['name', 'name', 'name'],
     * //     optionValue: ['id', 'id', 'id']
     * // }
     */
    const checkboxMapping = (data: any) => {
        let checkbox = { ...data }; 
        if (checkbox) {
            checkbox.choices = choicesMapping(checkbox.choices);
            checkbox.optionValue = optionValueMapping(checkbox.choices);
            checkbox.optionText = optionTextMapping(checkbox.choices);
        }
        return useKey(checkbox);
    };

    return {
        checkboxMapping,
        optionTextMapping,
        optionValueMapping,
        choicesMapping,
        useKey
    };
};

export default useCheckboxMapping;