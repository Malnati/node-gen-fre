// src/backlog/wip/TextInputCreate.tsx

import { TextInput } from 'react-admin';
import { CommonInputCreate } from '../../components/CommonInputCreate';

export const TextInputCreate = () => {
    
    return (
        <CommonInputCreate component={TextInput}>
            <TextInput source="placeholder" label="Placeholder" />
            <TextInput source="type" label="Type" />
        </CommonInputCreate>
    );
}