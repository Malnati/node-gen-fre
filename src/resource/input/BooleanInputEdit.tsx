// src/resource/BooleanInputEdit.tsx

import { ReactNode } from 'react';
import { BooleanInput } from 'react-admin';
import { ComponentInputEdit } from '../../components/ComponentInputEdit';
import ComponentInputPreview from '../../components/ComponentInputPreview';
import { useRegistryContext } from "../../hooks/useRegistryContext";

interface BooleanInputEditProps {
    children?: ReactNode;
}

export const INSTANCE_NAME: string = 'CURRENT_BOOLEANINPUT';

export const BooleanInputEdit = ({ children }: BooleanInputEditProps) => {

    const { 
        observeFieldOf,
    } = useRegistryContext();

    return (
            <ComponentInputEdit preview={<ComponentInputPreview observedFields={INSTANCE_NAME} 
                                component={BooleanInput} />} 
                                observedFields={INSTANCE_NAME}>
                {children}
                <BooleanInput source="defaultValue" 
                                label="Default Value" 
                                onChange={(e) => observeFieldOf(INSTANCE_NAME, 'defaultValue', e.target.value)} />
            </ComponentInputEdit>
    );
};

