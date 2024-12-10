// src/resource/BooleanInputEdit.tsx

import { ReactNode, useEffect, useState } from 'react';
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
        observeInstance,
        observeFieldOf,
        getInstance
    } = useRegistryContext();
    const [isInstanceReady, setIsInstanceReady] = useState(false);

    useEffect(() => {
        observeInstance('CURRENT_BOOLEANINPUT', {});
        setIsInstanceReady(true);
    }, []);

    if (!isInstanceReady) {
        const instance = getInstance('CURRENT_BOOLEANINPUT');
        console.log(`Instance ${'CURRENT_BOOLEANINPUT'} is not ready yet.`, JSON.stringify(instance, null, 2));
        return <div>Loading...</div>;
    }

    return (
            <ComponentInputEdit preview={<ComponentInputPreview observedFields={'CURRENT_BOOLEANINPUT'} component={BooleanInput} />} 
                                observedFields={'CURRENT_BOOLEANINPUT'}>
                {children}
                <BooleanInput source="defaultValue" 
                                label="Default Value" 
                                onChange={(e) => observeFieldOf('CURRENT_BOOLEANINPUT', 'defaultValue', e.target.value === 'on'? true : e.target.value)} />
            </ComponentInputEdit>
    );
};

