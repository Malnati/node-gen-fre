import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomLogin from "./CustomLogin";

const clientId = "178353359157-3m13s46p97pdgl35pfmri5a5g6737qpp.apps.googleusercontent.com";

export const App = () => (
  <GoogleOAuthProvider clientId={clientId}>
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={<CustomLogin />} 
    >
      <Resource
        name="posts"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    </Admin>
  </GoogleOAuthProvider>
);