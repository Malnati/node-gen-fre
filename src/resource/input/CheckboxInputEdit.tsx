// src/resource/CheckboxInputEdit.tsx

import { ReactNode } from 'react';
import { CheckboxInputEdit as CheckboxInputEditComponent } from '../../components/CheckboxInputEdit';

interface CheckboxInputEditProps {
    children?: ReactNode;
}

export const CheckboxInputEdit = ({ children }: CheckboxInputEditProps) => {

    return (
        <>
            <CheckboxInputEditComponent >
                {children}
            </CheckboxInputEditComponent>
        </>
    );
};

