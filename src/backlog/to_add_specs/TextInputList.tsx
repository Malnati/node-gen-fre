// src/TextInputList.tsx

import { Box } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";

import {
  Form,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  SelectColumnsButton,
  BulkUpdateButton,
  CheckboxGroupInput,
  ReferenceInput,
  TextField,
  TextInput,
  ListActions,
  EditButton,
  ShowButton,
  BulkDeleteButton,
  BulkExportButton,
  DeleteButton,
  useRecordContext,
} from "react-admin";
import useTextInputMapping from "../../hooks/useTextInputMapping";


const filters = [
    <TextInput source="q" label="Text" alwaysOn />,
    <ReferenceInput source="id" label="TextInput" reference="textInputs" />,
];

export const TextInputList = () => { 
    
    const record = useRecordContext();
    const { textFieldMapping } = useTextInputMapping();
    const textField = textFieldMapping(record);

    return (

        <Form
            onSubmit={(e: any) => { console.log(`onSubmit: ${JSON.stringify(e, null, 1)}`); }}
            defaultValues={{
                customCheckbox: record || false,
            }}>
            <Box display="flex" alignItems="center" gap={2}>
                <TextInput
                    id={textField.id}
                    key={textField.key}
                    source={textField.source} 
                    className={textField.className}
                    defaultValue={textField.defaultValue}
                    readOnly={textField.readOnly}
                    disabled={textField.disabled}
                    fullWidth={textField.fullWidth}
                    helperText={textField.helperText}
                    label={textField.label}
                    type={textField.type}
                    resettable={textField.resettable}
                    multiline={textField.multiline}
                    placeholder={textField.placeholder} />
            </Box>
        </Form>    
    );
}