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
import { dataTableProvidersMap } from "./db/MultiDataTable";
import { useMultiDataProvides } from "ra-multi-providers";
import CustomLogin from "./security/CustomLogin";
import { FrontCreate } from "./backlog/FrontendCreate";
import WidgetsIcon from '@mui/icons-material/Widgets';
import TvIcon from '@mui/icons-material/Tv';
import { Dashboard } from "./Dashboard";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import InputIcon from '@mui/icons-material/Input';
import PreviewIcon from '@mui/icons-material/Preview';
import { BooleanInputList } from "./resource/input/BooleanInputList";
import { BooleanInputEdit } from "./resource/input/BooleanInputEdit";
import { BooleanInputCreate } from "./resource/input/BooleanInputCreate";
import { CheckboxInputList } from "./resource/input/CheckboxInputList";
import { CheckboxInputEdit } from "./backlog/wip/CheckboxInputEdit";
import { CheckboxInputCreate } from "./resource/input/CheckboxInputCreate";
import { TextInputCreate } from "./backlog/to_add_specs/TextInputCreate";
import { TextInputEdit } from "./backlog/to_add_specs/TextInputEdit";
import { TextInputList } from "./backlog/to_add_specs/TextInputList";
import { FrontendList } from "./backlog/FrontendList";
import { ScreenList } from "./backlog/ScreensList";
import { AppList } from "./backlog/AppList";
import { AppCreate } from "./backlog/AppCreate";
import { AppEdit } from "./backlog/AppEdit";
import { AppShow } from "./backlog/AppShow";
import { PlatformList } from "./backlog/PlatformList";
import { PlatformCreate } from "./backlog/PlatformCreate";
import { PlatformEdit } from "./backlog/PlatformEdit";
import { PlatformShow } from "./backlog/PlatformShow";
import { DateInputList } from "./backlog/DateInputList";
import { DateTimeInputList } from "./backlog/DateTimeInput";
import { FileInputList } from "./backlog/FileInputsList";
import { ImageInputList } from "./backlog/ImageInputsList";
import { NumberInputList } from "./backlog/NumberInputList";
import { PasswordInputList } from "./backlog/PasswordInputList";
import { ReferenceInputList } from "./backlog/ReferenceInputList";
import { RichTextInputList } from "./backlog/RichTextInputList";
import { SearchInputList } from "./backlog/SearchInputList";
import { SelectInputList } from "./backlog/SelectInputList";
import { TimeInputList } from "./backlog/TimeInputList";
import { TranslatableInputList } from "./backlog/TranslatableInputList";

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
          name="textInputs"
          list={TextInputList}
          create={TextInputCreate}
          edit={TextInputEdit}
          icon={FormatAlignJustifyIcon}
        />

        <Resource
          name="booleanInputs"
          list={BooleanInputList}
          edit={BooleanInputEdit}
          create={BooleanInputCreate}
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
          name="timeInputs"
          list={TimeInputList}
          icon={InputIcon}
        />

        <Resource
          name="translatableInputs"
          list={TranslatableInputList}
          icon={InputIcon}
        />
        
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

      </Admin>
    </GoogleOAuthProvider>
  );
}