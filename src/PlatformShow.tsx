// src/PlatformShow.tsx

import { Show, ReferenceArrayField, SimpleForm, SingleFieldList, TextField } from 'react-admin';

export const PlatformShow = () => (
    <Show>
        <SimpleForm>
            <TextField source="id" label="ID" id="id" />
            <TextField source="name" id='name'/>
            <ReferenceArrayField reference="apps" source="apps" label="Apps" >
                <SingleFieldList>
                    <TextField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="specifications" source="specifications" label="Specifications">
                <SingleFieldList>
                    <TextField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleForm>
    </Show>
);