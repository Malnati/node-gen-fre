// src/resource/CheckboxInputCreate.tsx

import { CheckboxGroupInput } from 'react-admin';
import { ReactNode } from 'react';
import { BooleanInput } from 'react-admin';
import { useObserveChanges } from 'react-use-observe-changes';
import ComponentInputPreview from '../../components/ComponentInputPreview';
import { ComponentInputCreate } from '../../components/ComponentInputCreate';

interface CheckboxInputCreateProps {
    children?: ReactNode;
}

export const CheckboxInputCreate = ({ children }: CheckboxInputCreateProps) => {

    const { observedFields, observeIt } = useObserveChanges();

    return (
            <ComponentInputCreate preview={<ComponentInputPreview watchedFields={observedFields} component={CheckboxGroupInput} />} >
                {children}
                <BooleanInput source="defaultValue" label="Default Value" onChange={(e) => observeIt('defaultValue', e.target.value)} />
            </ComponentInputCreate>
    );
};

