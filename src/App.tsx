// src/App.tsx

import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import { genDataProvider } from "./genDataProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomLogin from "./CustomLogin";
import { AppList } from "./AppList";
import { AppShow } from "./AppShow";
import { AppEdit } from "./AppEdit";
import { AppCreate } from "./AppCreate";

const clientId = "178353359157-3m13s46p97pdgl35pfmri5a5g6737qpp.apps.googleusercontent.com";

export const App = () => (
  <GoogleOAuthProvider clientId={clientId}>
    <Admin
      layout={Layout}
      dataProvider={genDataProvider}
      authProvider={authProvider}
      loginPage={<CustomLogin />} 
    >
      <Resource
        name="apps"
        list={AppList}
        show={AppShow}
        edit={AppEdit}
        create={AppCreate}
      />
    </Admin>
  </GoogleOAuthProvider>
);