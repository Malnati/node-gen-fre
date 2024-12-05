// src/App.tsx


import {
  Admin,
  radiantLightTheme, 
  radiantDarkTheme,
  Resource,
} from "react-admin";

import { Layout } from "./Layout";
import { GoogleAuthProvider } from "./security/GoogleAuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomLogin from "./security/CustomLogin";
import { FrontCreate } from "./todo/FrontendCreate";
import WidgetsIcon from '@mui/icons-material/Widgets';
import TvIcon from '@mui/icons-material/Tv';
import { Dashboard } from "./Dashboard";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import InputIcon from '@mui/icons-material/Input';
import PreviewIcon from '@mui/icons-material/Preview';
import { FrontendList } from "./todo/FrontendList";
import { FieldList } from "./todo/FieldList";
import { ScreenList } from "./todo/ScreensList";
import { AppList } from "./todo/AppList";
import { AppCreate } from "./todo/AppCreate";
import { AppEdit } from "./todo/AppEdit";
import { AppShow } from "./todo/AppShow";
import { FieldCreate } from "./todo/FieldCreate";
import { FieldEdit } from "./todo/FieldEdit";
import { FieldShow } from "./todo/FieldShow";
import { PlatformList } from "./todo/PlatformList";
import { PlatformCreate } from "./todo/PlatformCreate";
import { PlatformEdit } from "./todo/PlatformEdit";
import { PlatformShow } from "./todo/PlatformShow";
import { BooleanInputList } from "./resource/BooleanInputList";
import { CheckboxInputList } from "./resource/CheckboxInputList";
import { CheckboxInputEdit } from "./resource/CheckboxInputEdit";
import { CheckboxInputCreate } from "./resource/CheckboxInputCreate";
import { DateInputList } from "./todo/DateInputList";
import { DateTimeInputList } from "./todo/DateTimeInput";
import { FileInputList } from "./todo/FileInputsList";
import { ImageInputList } from "./todo/ImageInputsList";
import { NumberInputList } from "./todo/NumberInputList";
import { PasswordInputList } from "./todo/PasswordInputList";
import { ReferenceInputList } from "./todo/ReferenceInputList";
import { RichTextInputList } from "./todo/RichTextInputList";
import { SearchInputList } from "./todo/SearchInputList";
import { SelectInputList } from "./todo/SelectInputList";
import { TextInputList } from "./todo/TextInputList";
import { TimeInputList } from "./TimeInputList";
import { TranslatableInputList } from "./TranslatableInputList";
import { BooleanInputEdit } from "./resource/BooleanInputEdit";
import { BooleanInputCreate } from "./resource/BooleanInputCreate";
import { dataTableProvidersMap } from "./db/MultiDataTable";
import { useMultiDataProvides } from "ra-multi-providers";

const clientId = "178353359157-3m13s46p97pdgl35pfmri5a5g6737qpp.apps.googleusercontent.com";

export const App = () => {

  return (
      <GoogleOAuthProvider clientId={clientId}>
        <Admin
          layout={Layout}
          dataProvider={useMultiDataProvides(dataTableProvidersMap)}
          authProvider={GoogleAuthProvider}
          loginPage={<CustomLogin />} 
          dashboard={Dashboard}
          theme={radiantLightTheme}
          darkTheme={radiantDarkTheme}
        >
        
        <Resource
          name="platforms"
          list={PlatformList}
          create={PlatformCreate}
          edit={PlatformEdit}
          show={PlatformShow}
          icon={SettingsSystemDaydreamIcon}
        />
        
        <Resource
          name="apps"
          list={AppList}
          create={AppCreate}
          edit={AppEdit}
          show={AppShow}
          icon={WidgetsIcon}
        />
        
        <Resource
          name="frontends"
          list={FrontendList}
          create={FrontCreate}
          icon={TvIcon}
        />
        
        <Resource name="screens" 
          list={ScreenList}
          icon={PreviewIcon}
        />
        
        <Resource name="fields" 
          list={FieldList}
          create={FieldCreate}
          edit={FieldEdit}
          show={FieldShow}
          icon={FormatAlignJustifyIcon}
        />

        <Resource
          name="booleanInputs"
          list={BooleanInputList}
          edit={BooleanInputEdit}
          create={BooleanInputCreate}
          // show={BooleanInputShow}
          icon={InputIcon}
        />

        <Resource
          name="checkboxInputs"
          list={CheckboxInputList}
          edit={CheckboxInputEdit}
          create={CheckboxInputCreate}
          icon={InputIcon}
        />

        <Resource
          name="dateInputs"
          list={DateInputList}
          icon={InputIcon}
        />

        <Resource
          name="dateTimeInputs"
          list={DateTimeInputList}
          icon={InputIcon}
        />

        <Resource
          name="fileInputs"
          list={FileInputList}
          icon={InputIcon}
        />

        <Resource
          name="imageInputs"
          list={ImageInputList}
          icon={InputIcon}
        />

        <Resource
          name="numberInputs"
          list={NumberInputList}
          icon={InputIcon}
        />

        <Resource
          name="passwordInputs"
          list={PasswordInputList}
          icon={InputIcon}
        />

        <Resource
          name="referenceInputs"
          list={ReferenceInputList}
          icon={InputIcon}
        />

        <Resource
          name="richTextInputs"
          list={RichTextInputList}
          icon={InputIcon}
        />

        <Resource
          name="searchInputs"
          list={SearchInputList}
          icon={InputIcon}
        />

        <Resource
          name="selectInputs"
          list={SelectInputList}
          icon={InputIcon}
        />

        <Resource
          name="textInputs"
          list={TextInputList}
          icon={InputIcon}
        />

        <Resource
          name="timeInputs"
          list={TimeInputList}
          icon={InputIcon}
        />

        <Resource
          name="translatableInputs"
          list={TranslatableInputList}
          icon={InputIcon}
        />

      </Admin>
    </GoogleOAuthProvider>
  );
}