// src/AppShow.tsx

import { ChipField, ReferenceArrayField, Show, SimpleShowLayout, SingleFieldList, TextField } from 'react-admin';

export const AppShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ChipField source="name" label='Name'/>
            <ReferenceArrayField reference="frontends" source="frontends">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="microservices" source="microservices">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField reference="specifications" source="specifications">
                <SingleFieldList>
                    <ChipField source="key" />
                </SingleFieldList>
            </ReferenceArrayField>
        </SimpleShowLayout>
    </Show>
);