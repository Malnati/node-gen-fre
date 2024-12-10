// src/components/ComponentInputEdit.tsx

import { ReactNode } from 'react';
import { Edit } from 'react-admin';
import { CommonInputForm } from './CommonInputForm';

interface ComponentInputEditProps {
    children?: ReactNode;
    preview?: ReactNode;
    observedFields: string;
}

export const ComponentInputEdit = ({ children, preview, observedFields }: ComponentInputEditProps) => {

    return (
            <Edit>
                <CommonInputForm preview={preview} observedFields={observedFields}>
                    {children}
                </CommonInputForm>
            </Edit>
    );
};

