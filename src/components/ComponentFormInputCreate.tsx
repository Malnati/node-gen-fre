import { ReactNode } from 'react';
import { Create } from 'react-admin';
import { ComponentInputForm } from './ComponentInputForm';

interface ComponentFormInputCreateProps {
    children?: ReactNode;
    component: React.ElementType;
}

export const ComponentFormInputCreate = ({ children, component }: ComponentFormInputCreateProps) => {

    return (
        <Create>
            <ComponentInputForm component={component}>
                {children}
            </ComponentInputForm>
        </Create>
    );
};
