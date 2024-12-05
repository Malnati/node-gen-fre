// src/PlatformShow.tsx

import { Show, ReferenceArrayField, SimpleForm, SingleFieldList, TextField, ChipField } from 'react-admin';

export const PlatformShow = () => (
    <Show>
        <SimpleForm>
            <TextField source="id" label="ID" id="id" />
            <TextField source="name" id='name'/>
            <ReferenceArrayField reference="apps" source="apps" label="Apps" >
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="specifications" source="specifications" label="Specifications">
                <SingleFieldList>
                    <ChipField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleForm>
    </Show>
);