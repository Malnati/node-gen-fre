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
import { FrontCreate } from "./FrontendCreate";
import WidgetsIcon from '@mui/icons-material/Widgets';
import TvIcon from '@mui/icons-material/Tv';
import { Dashboard } from "./Dashboard";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import InputIcon from '@mui/icons-material/Input';
import PreviewIcon from '@mui/icons-material/Preview';
import { FrontendList } from "./FrontendList";
import { FieldList } from "./FieldList";
import { ScreenList } from "./ScreensList";
import { AppList } from "./AppList";
import { AppCreate } from "./AppCreate";
import { AppEdit } from "./AppEdit";
import { AppShow } from "./AppShow";
import { FieldCreate } from "./FieldCreate";
import { FieldEdit } from "./FieldEdit";
import { FieldShow } from "./FieldShow";
import { PlatformList } from "./PlatformList";
import { PlatformCreate } from "./PlatformCreate";
import { PlatformEdit } from "./PlatformEdit";
import { PlatformShow } from "./PlatformShow";
import { BooleanInputList } from "./resource/BooleanInputList";
import { CheckboxInputList } from "./CheckboxInputList";
import { CheckboxInputEdit } from "./CheckboxInputEdit";
import { DateInputList } from "./DateInputList";
import { DateTimeInputList } from "./DateTimeInput";
import { FileInputList } from "./FileInputsList";
import { ImageInputList } from "./ImageInputsList";
import { NumberInputList } from "./NumberInputList";
import { PasswordInputList } from "./PasswordInputList";
import { ReferenceInputList } from "./ReferenceInputList";
import { RichTextInputList } from "./RichTextInputList";
import { SearchInputList } from "./SearchInputList";
import { SelectInputList } from "./SelectInputList";
import { TextInputList } from "./TextInputList";
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