// src/components/ComponentInputCreate.tsx

import { ReactNode } from 'react';
import { Create } from 'react-admin';
import { CommonInputForm } from './CommonInputForm';

interface ComponentInputCreateProps {
    children?: ReactNode;
    preview?: ReactNode;
}

export const ComponentInputCreate = ({ children, preview }: ComponentInputCreateProps) => {

    return (
            <Create>
                <CommonInputForm preview={preview} >
                    {children}
                </CommonInputForm>
            </Create>
    );
};

