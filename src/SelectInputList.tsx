// src/SelectInputList.tsx

import { Fragment } from 'react';

import { Datagrid, List, ReferenceInput, TextField, TextInput, ListActions, EditButton, ShowButton, BulkDeleteButton, BulkExportButton, DeleteButton } from 'react-admin';

const filters = [
    <TextInput source="q" label="Select" alwaysOn />,
    <ReferenceInput source="id" label="SelectInput" reference="selectInputs" />,
];

export const SelectInputList = () => (
    <List emptyWhileLoading filters={filters} actions={<ListActions hasCreate/>}>
        <Datagrid bulkActionButtons={
            <Fragment>
                    <BulkExportButton />
                    <BulkDeleteButton mutationMode="pessimistic"/>
                </Fragment>
            }>
            <TextField source="id" label="Id" />
            <TextField source="source" label="Source" />
            <TextField source="className" label="ClassName" />
            <TextField source="defaultValue" label="DefaultValue" />
            <TextField source="readOnly" label="ReadOnly" />
            <TextField source="disabled" label="Disabled" />
            <TextField source="fullWidth" label="FullWidth" />
            <TextField source="helperText" label="HelperText" />
            <TextField source="label" label="Label" />
            <TextField source="labelPlacement" label="LabelPlacement" />
            <TextField source="optionValue" label="OptionValue" />
            <TextField source="translateChoice" label="TranslateChoice" />
            <TextField source="choices" label="Choices" />
            <TextField source="createLabel" label="CreateLabel" />
            <TextField source="disableValue" label="DisableValue" />
            <TextField source="emptyText" label="EmptyText" />
            <TextField source="emptyValue" label="EmptyValue" />
            <TextField source="isPending" label="IsPending" />
            <TextField source="optionValue" label="OptionValue" />
            <TextField source="resettable" label="Resettable" />
            <TextField source="translateChoice" label="TranslateChoice" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);