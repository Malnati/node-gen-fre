// src/resource/CheckboxInputList.tsx

import { Box } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import {
  Datagrid,
  List,
  ReferenceInput,
  TextField,
  TextInput,
  EditButton,
  ShowButton,
  BulkDeleteButton,
  BulkExportButton,
  DeleteButton,
  Form,
  useRecordContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  SelectColumnsButton,
  BulkUpdateButton,
  CheckboxGroupInput,
} from "react-admin";

import useCheckboxMapping from "../../hooks/useCheckboxMapping";

const CheckboxInputRenderer = () => {

    const record = useRecordContext();
    const { 
        checkboxMapping,
     } = useCheckboxMapping();

     const checkbox = checkboxMapping(record);

    return (
        <Form
            onSubmit={(e: any) => { console.log(`onSubmit: ${JSON.stringify(e, null, 1)}`); }}
            defaultValues={{
                customCheckbox: record || false,
            }}
        >
            <Box display="flex" alignItems="center" gap={2}>
            <CheckboxGroupInput 
                key={checkbox.key}
                source="qualquer" 
                label={checkbox.label || 'Default Label'}
                helperText={checkbox.helperText || 'Helper text'}
                labelPlacement={checkbox.labelPlacement}
                disabled={checkbox.disabled}
                fullWidth={checkbox.fullWidth}
                choices={checkbox.choices} 
                translateChoice={checkbox.translateChoice} />
            </Box>
        </Form>
    );
};

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="CheckboxInput" reference="checkboxInputs" />,
];

const PostBulkActionButtons = () => (
    <>
        <BulkUpdateButton label="Reset Views" data={{ views: 0 }} icon={<VisibilityOff/>} />
        <BulkDeleteButton />
        <BulkExportButton />
    </>
);

const CustomListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <FilterButton/>
        <CreateButton/>
        <ExportButton/>
        <DeleteButton />
    </TopToolbar>
);

export const CheckboxInputList = () => (
    <List emptyWhileLoading filters={filters} actions={<CustomListActions />}>
        <Datagrid bulkActionButtons={<PostBulkActionButtons />}>
            <TextField source="id" label="Id" />
            <CheckboxInputRenderer />
            <TextField source="source" label="Source" />
            <TextField source="label" label="Label" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);