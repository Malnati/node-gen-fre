import { ReactNode } from 'react';
import { Create } from 'react-admin';
import { CommonInputForm } from './CommonFormInput';

interface CommonFormInputCreateProps {
    children?: ReactNode;
    component: React.ElementType;
}

export const CommonFormInputCreate = ({ children, component }: CommonFormInputCreateProps) => {

    return (
        <Create>
            <CommonInputForm component={component}>
                {children}
            </CommonInputForm>
        </Create>
    );
};
