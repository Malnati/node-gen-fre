// src/resource/BooleanInputEdit.tsx

import { ReactNode } from 'react';
import { BooleanInput } from 'react-admin';
import { useObserveChanges } from 'react-use-observe-changes';
import { ComponentInputEdit } from '../../components/ComponentInputEdit';
import ComponentInputPreview from '../../components/ComponentInputPreview';

interface BooleanInputEditProps {
    children?: ReactNode;
}

export const BooleanInputEdit = ({ children }: BooleanInputEditProps) => {

    const {
        observedFields,
        observeIt
    } = useObserveChanges();

    return (
            <ComponentInputEdit preview={<ComponentInputPreview watchedFields={observedFields} component={BooleanInput} />} >
                {children}
                <BooleanInput source="defaultValue" label="Default Value" onChange={(e) => observeIt('defaultValue', e.target.value)} />
            </ComponentInputEdit>
    );
};

