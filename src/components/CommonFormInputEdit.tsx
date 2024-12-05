import { ReactNode } from 'react';
import { Edit } from 'react-admin';
import { CommonInputForm } from './CommonFormInput';

interface CommonFormInputEditProps {
    children?: ReactNode;
    component: React.ElementType;
}

export const CommonFormInputEdit = ({ children, component }: CommonFormInputEditProps) => {

    return (
        <Edit>
            <CommonInputForm component={component}>
                {children}
            </CommonInputForm>
        </Edit>
    );
};
