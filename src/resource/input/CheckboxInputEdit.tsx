// src/components/CheckboxInputEdit.tsx

import { ReactNode } from 'react';
import { useObserveChanges } from 'react-use-observe-changes';
import { BooleanInput, CheckboxGroupInput } from 'react-admin';
import { ComponentInputEdit } from '../../components/ComponentInputEdit';
import ComponentInputPreview from '../../components/ComponentInputPreview';

interface CheckboxInputEditProps {
    children?: ReactNode;
}

export const CheckboxInputEdit = ({ children }: CheckboxInputEditProps) => {

    const {
        observedFields,
        observeIt
    } = useObserveChanges();

    return (
            <ComponentInputEdit preview={<ComponentInputPreview watchedFields={observedFields} component={CheckboxGroupInput} />} >
                {children}
                <BooleanInput source="defaultValue" label="Default Value" onChange={(e) => observeIt('defaultValue', e.target.value)} />
            </ComponentInputEdit>
    );
};



