import { ReactNode } from 'react';
import { SimpleForm } from 'react-admin';
import { ComponentInputEdit } from './ComponentInputEdit';

interface CommonInputFormProps {
    children?: ReactNode;
    component: React.ElementType;
}

export const CommonInputForm = ({ children, component }: CommonInputFormProps) => {

    return (
        <>
            <SimpleForm>
                {children}
                <ComponentInputEdit component={component} />
            </SimpleForm>
        </>
    );
};
