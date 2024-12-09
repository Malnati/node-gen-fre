// src/components/ComponentInputEdit.tsx

import { ReactNode } from 'react';
import { Edit } from 'react-admin';
import { CommonInputForm } from './CommonInputForm';

interface ComponentInputEditProps {
    children?: ReactNode;
    preview?: ReactNode;
}

export const ComponentInputEdit = ({ children, preview }: ComponentInputEditProps) => {

    return (
            <Edit>
                <CommonInputForm preview={preview} >
                    {children}
                </CommonInputForm>
            </Edit>
    );
};

