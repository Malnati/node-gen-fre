// src/hooks/useCheckboxMapping.ts

import useKeys from './useKeys';

const useCheckboxMapping = () => {

    const { useKey, useKeyOrId } = useKeys();

    const choicesMapping = (data: Array<any>) => {
        return data.map((item: any) => { 
            return useKeyOrId(item);
        });
    };

    const optionTextMapping = (data: any) => {
        return data.map((item: any) => { 
            let _optionText: string = '';
            Object.keys(item).forEach(key => {
                if ( !_optionText  && key !== 'id' && key !== 'key' ) _optionText = key;
            });
            return _optionText;
        });
    };

    const optionValueMapping = (data: any) => {
        return data.map((item: any) => { 
            let _optionValue: string = '';
            Object.keys(item).forEach(key => {
                if ( !_optionValue && key !== 'id' && key !== 'key' ) _optionValue = key;
            });
            return _optionValue;
        });
    };

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