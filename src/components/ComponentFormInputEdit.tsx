import { ReactNode } from 'react';
import { Edit } from 'react-admin';
import { ComponentInputForm } from './ComponentInputForm';

interface ComponentFormInputEditProps {
    children?: ReactNode;
    component: React.ElementType;
}

export const ComponentFormInputEdit = ({ children, component }: ComponentFormInputEditProps) => {

    return (
        <Edit>
            <ComponentInputForm component={component}>
                {children}
            </ComponentInputForm>
        </Edit>
    );
};
