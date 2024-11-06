// src/App.tsx

import {
  Admin,
  defaultDarkTheme,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomLogin from "./CustomLogin";
import { BackendList } from "./BackendList";
import { BackendShow } from "./BackendShow";
import { BackendEdit } from "./BackendEdit";
import { BackendCreate } from "./BackendCreate";
import { FrontCreate } from "./FrontCreate";
import WidgetsIcon from '@mui/icons-material/Widgets';
import TvIcon from '@mui/icons-material/Tv';
import { Dashboard } from "./Dashboard";
import { dataProvider } from "./DataProvder";
import { FrontendList } from "./FrontendList";

const clientId = "178353359157-3m13s46p97pdgl35pfmri5a5g6737qpp.apps.googleusercontent.com";

export const App = () => (
  <GoogleOAuthProvider clientId={clientId}>
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={<CustomLogin />} 
      dashboard={Dashboard}
      theme={defaultDarkTheme}
    >
    <Resource
      name="apps"
      list={BackendList}
      show={BackendShow}
      edit={BackendEdit}
      create={BackendCreate}
      icon={WidgetsIcon}
    />
    <Resource
      name="fronts"
      list={FrontendList}
      create={FrontCreate}
      icon={TvIcon}
    />
    </Admin>
  </GoogleOAuthProvider>
);