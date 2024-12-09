// src/components/ComponentInputCreate.tsx

import { ReactNode } from 'react';
import { Create } from 'react-admin';
import { CommonInputForm } from './CommonInputForm';

interface ComponentInputCreateProps {
    children?: ReactNode;
    preview?: ReactNode;
    observedFields?: {};
}

export const ComponentInputCreate = ({ children, preview, observedFields }: ComponentInputCreateProps) => {

    return (
            <Create>
                <CommonInputForm preview={preview} observedFields={observedFields}>
                    {children}
                </CommonInputForm>
            </Create>
    );
};

