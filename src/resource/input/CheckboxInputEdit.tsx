// src/components/CheckboxInputEdit.tsx

import { ReactNode } from 'react';
import { CheckboxGroupInput } from 'react-admin';
import { useObserveChanges } from 'react-use-observe-changes';
import PreviewCheckboxInput from './CheckboxInputPreview';
import { ComponentFormInputEdit } from '../../components/ComponentFormInputEdit';

interface CheckboxInputEditProps {
    children?: ReactNode;
}

export const CheckboxInputEdit = ({ children }: CheckboxInputEditProps) => {

    const {
        observedFields,
        observeIt
    } = useObserveChanges();

    return (
        <>
            <ComponentFormInputEdit component={CheckboxGroupInput}>
                <PreviewCheckboxInput watchedFields={observedFields} />
                <CheckboxGroupInput
                    source="choices"
                    choices={observedFields.choices || []}
                    optionText={observedFields.optionText || 'name'}
                    optionValue={observedFields.optionValue || 'id'}
                    onChange={(e) => observeIt('choices', e.target.value)}
                />
                {children}
            </ComponentFormInputEdit>
        </>
    );
};



