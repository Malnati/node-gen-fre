// src/App.tsx

import { useEffect } from "react";

import {
  Admin,
  defaultDarkTheme,
  radiantLightTheme, 
  radiantDarkTheme,
  Resource,
} from "react-admin";

import { db } from "./cache/IndexDB";
import { Layout } from "./Layout";
import { GoogleAuthProvider } from "./GoogleAuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomLogin from "./CustomLogin";
import { FrontCreate } from "./FrontendCreate";
import WidgetsIcon from '@mui/icons-material/Widgets';
import TvIcon from '@mui/icons-material/Tv';
import { Dashboard } from "./Dashboard";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PreviewIcon from '@mui/icons-material/Preview';
import { FrontendList } from "./FrontendList";
import { FieldList } from "./FieldList";
import { ScreenList } from "./ScreensList";
import MultiDataProvider from "./cache/MultiDataProvider";
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
import { BooleanInputPropsList } from "./BooleanInputPropsList";

const clientId = "178353359157-3m13s46p97pdgl35pfmri5a5g6737qpp.apps.googleusercontent.com";

export const App = () => {

  useEffect(() => {
    // Limpa o banco de dados e, após a limpeza, chama o método de seed
    db.seedData();
  }, []);

  return (
      <GoogleOAuthProvider clientId={clientId}>
        <Admin
          layout={Layout}
          dataProvider={MultiDataProvider}
          authProvider={GoogleAuthProvider}
          loginPage={<CustomLogin />} 
          dashboard={Dashboard}
          theme={radiantLightTheme}
          darkTheme={radiantDarkTheme}
        >
        
        <Resource
          name="booleanInputProps"
          list={BooleanInputPropsList}
          icon={SettingsSuggestIcon}
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
        
        <Resource name="fields" 
          list={FieldList}
          create={FieldCreate}
          edit={FieldEdit}
          show={FieldShow}
          icon={FormatAlignJustifyIcon}
        />
      </Admin>
    </GoogleOAuthProvider>
  );
}