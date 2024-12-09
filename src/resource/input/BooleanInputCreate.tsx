// src/resource/BooleanInputCreate.tsx

import { ReactNode } from 'react';
import { BooleanInput } from 'react-admin';
import { useObserveChanges } from 'react-use-observe-changes';
import ComponentInputPreview from '../../components/ComponentInputPreview';
import { ComponentInputCreate } from '../../components/ComponentInputCreate';

interface BooleanInputCreateProps {
    children?: ReactNode;
}

export const BooleanInputCreate = ({ children }: BooleanInputCreateProps) => {

    const { observedFields, observeIt } = useObserveChanges();

    return (
            <ComponentInputCreate preview={<ComponentInputPreview watchedFields={observedFields} component={BooleanInput} />} 
                                  observedFields={observedFields}>
                {children}
                <BooleanInput source="defaultValue" label="Default Value" onChange={(e) => observeIt('defaultValue', e.target.value)} />
            </ComponentInputCreate>
    );
}