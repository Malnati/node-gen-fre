// src/components/TextFieldPreview.tsx

import { TextField } from '@mui/material';
import ComponentInputPreview from './ComponentInputPreview';

const TextFieldPreview = ({ watchedFields }: { watchedFields: any }) => {
    return (
        <ComponentInputPreview component={TextField} watchedFields={watchedFields} />
    );
};

export default TextFieldPreview;