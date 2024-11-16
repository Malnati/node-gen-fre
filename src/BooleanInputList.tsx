// src/BooleanInputPropsList.tsx

import { Box } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';

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
  BooleanInput,
  Form,
  useRecordContext,
  useUpdate,
  BulkUpdateButton,
  CreateButton,
  ExportButton,
  FilterButton,
  SelectColumnsButton,
  TopToolbar,
} from "react-admin";

const CommonBulkActionButtons = () => (
    <>
        <BulkUpdateButton label="Reset Views" data={{ views: 0 }} icon={<VisibilityOff/>} />
        <BulkDeleteButton />
        <BulkExportButton />
    </>
);

const CommonListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <FilterButton/>
        <CreateButton/>
        <ExportButton/>
        <DeleteButton />
    </TopToolbar>
);

const BooleanInputRenderer = () => {
    const record = useRecordContext();
    const [update] = useUpdate();

    if (!record) {
        return null;
    }

    const handleSubmit = (data: any) => {
        update('booleanInputs', { id: record.id, data });
    };

    return (
        <Form
            onSubmit={handleSubmit}
            defaultValues={{
                customBoolean: record.customBoolean || false,
            }}
        >
            <Box display="flex" alignItems="center" gap={2}>
                <BooleanInput
                    source="customBoolean"
                    label={record.label || 'Default Label'}
                    defaultValue={record.defaultValue}
                    disabled={record.disabled}
                    fullWidth={record.fullWidth}
                    helperText={record.helperText || 'Helper text'}
                />
            </Box>
        </Form>
    );
};

const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="BooleanInput" reference="booleanInputs" />,
];

export const BooleanInputList = () => (
    <List emptyWhileLoading filters={filters} actions={<CommonListActions />}>
        <Datagrid bulkActionButtons={<CommonBulkActionButtons />} >
            <TextField source="id" label="Id" />
            <BooleanInputRenderer />
            <TextField source="source" label="Source" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);