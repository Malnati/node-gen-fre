// src/hooks/useKeys.ts

/**
 * Hook that provides functions to ensure data objects have unique keys.
 * 
 * This hook includes functions to add a unique key to data objects if they do not already have one.
 * 
 * @returns An object containing the key management functions.
 * 
 * @example
 * const { useKey, useKeyOrId } = useKeys();
 * 
 * const data = { name: 'John Doe' };
 * 
 * const dataWithKey = useKey(data);
 * console.log(dataWithKey);
 * // { key: 1633024800000, name: 'John Doe' }
 * 
 * const dataWithKeyOrId = useKeyOrId(data);
 * console.log(dataWithKeyOrId);
 * // { key: 1633024800000, name: 'John Doe' }
 */
const useKeys = () => {

    /**
     * Ensures the data object has a unique key.
     * 
     * @param data - The data object to be checked.
     * @returns The data object with a unique key.
     * 
     * @example
     * const data = { name: 'John Doe' };
     * const dataWithKey = useKey(data);
     * console.log(dataWithKey);
     * // { key: 1633024800000, name: 'John Doe' }
     */
    const useKey = (data: any) => {
        const key = Object.keys(data).find(key => (key === 'key'));
        if (key) return data;
        return { key: Date.now().valueOf(), ...data };
    };

    /**
     * Ensures the data object has a unique key or ID.
     * 
     * @param data - The data object to be checked.
     * @returns The data object with a unique key or ID.
     * 
     * @example
     * const data = { name: 'John Doe' };
     * const dataWithKeyOrId = useKeyOrId(data);
     * console.log(dataWithKeyOrId);
     * // { key: 1633024800000, name: 'John Doe' }
     */
    const useKeyOrId = (data: any) => {
        const key = Object.keys(data).find(key => (key === 'key' || key === 'id'));
        if (key) return data;
        return { key: Date.now().valueOf(), ...data };
    };

    return {
        useKey,
        useKeyOrId
    };
};

export default useKeys;