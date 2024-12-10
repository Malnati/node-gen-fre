// src/resource/BooleanInputCreate.tsx

import { ReactNode } from 'react';
import { BooleanInput } from 'react-admin';
import ComponentInputPreview from '../../components/ComponentInputPreview';
import { ComponentInputCreate } from '../../components/ComponentInputCreate';
import { useRegistryContext } from "../../hooks/useRegistryContext";

interface BooleanInputCreateProps {
    children?: ReactNode;
}

export const INSTANCE_NAME = 'CURRENT_BOOLEANINPUT';

export const BooleanInputCreate = ({ children }: BooleanInputCreateProps) => {

    const { 
        observeFieldOf
    } = useRegistryContext();

    function onChangeHandler(e: any) {
        return observeFieldOf(INSTANCE_NAME, 'defaultValue', e.target.value === 'on' ? true : e.target.value);
    }

    return (
            <ComponentInputCreate preview={<ComponentInputPreview observedFields={INSTANCE_NAME} component={BooleanInput} />} 
                                observedFields={INSTANCE_NAME}>
                {children}
                <BooleanInput source="defaultValue" 
                                label="Default Value" 
                                onChange={(e) => onChangeHandler(e)} />
            </ComponentInputCreate>
    );
}