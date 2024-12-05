// src/TextInputList.tsx

import { Box } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";

import {
    BulkDeleteButton,
    BulkExportButton,
    BulkUpdateButton,
    CreateButton,
    Datagrid,
    DeleteButton,
    EditButton,
    ExportButton,
    FilterButton,
  Form,
  List,
  ReferenceInput,
  SelectColumnsButton,
  ShowButton,
  TextField,
  TextInput,
  TopToolbar,
  useRecordContext,
} from "react-admin";
import useTextInputMapping from "../../hooks/useTextInputMapping";

export const TextInputListRender = () => { 
    
    const record = useRecordContext();
    const { textFieldMapping } = useTextInputMapping();
    console.log(`record: ${JSON.stringify(record, null, 1)}`);

    let textField;
    if (record) {
        textField = textFieldMapping(record);
        console.log(`textField: ${JSON.stringify(textField, null, 1)}`);
    }

    return (

        <Form
            onSubmit={(e: any) => { console.log(`onSubmit: ${JSON.stringify(e, null, 1)}`); }}
            defaultValues={{
                customTextField: record || false,
            }}>
            <Box display="flex" alignItems="center" gap={2}>
                {textField && (<TextInput
                    id={textField?.id}
                    key={textField?.key}
                    source={textField?.source} 
                    className={textField?.className}
                    defaultValue={textField?.defaultValue}
                    readOnly={textField?.readOnly}
                    disabled={textField?.disabled}
                    fullWidth={textField?.fullWidth}
                    helperText={textField?.helperText}
                    label={textField?.label}
                    type={textField?.type}
                    resettable={textField?.resettable}
                    multiline={textField?.multiline}
                    placeholder={textField?.placeholder} />)}
            </Box>
        </Form>    
    );
}


const filters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="TextField" reference="textFields" />,
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

export const TextInputList = () => (
    <List emptyWhileLoading filters={filters} actions={<CustomListActions />}>
        <Datagrid bulkActionButtons={<PostBulkActionButtons />}>
            <TextField source="id" label="Id" />
            <TextInputListRender />
            <TextField source="source" label="Source" />
            <TextField source="label" label="Label" />
            <EditButton />
            <ShowButton />
            <DeleteButton mutationMode="pessimistic" />
        </Datagrid>
    </List>
);