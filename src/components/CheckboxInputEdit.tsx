// src/components/CheckboxInputEdit.tsx

import { ReactNode } from 'react';
import { CheckboxGroupInput } from 'react-admin';
import { useObserveChanges } from 'react-use-observe-changes';
import PreviewCheckboxInput from './CheckboxInputPreview';
import { CommonFormInputEdit } from './CommonFormInputEdit';

interface CheckboxInputEditProps {
    children?: ReactNode;
}

export const CheckboxInputEdit = ({ children }: CheckboxInputEditProps) => {

    const {
        observedFields,
    } = useObserveChanges();

    return (
        <>
            <PreviewCheckboxInput watchedFields={observedFields} />
            <CommonFormInputEdit component={CheckboxGroupInput}>
                {children}
            </CommonFormInputEdit>
        </>
    );
};



