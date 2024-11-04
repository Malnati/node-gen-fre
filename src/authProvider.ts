import { AuthProvider, HttpError } from "react-admin";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

export const authProvider: AuthProvider = {
  login: () => {
    return new Promise<void>((resolve, reject) => {
      const login = useGoogleLogin({
        onSuccess: (response) => {
          // Salvando as informações de autenticação do usuário
          localStorage.setItem("user", JSON.stringify(response));
          resolve();
        },
        onError: () => reject(new HttpError("Unauthorized", 401, { message: "Failed to authenticate with Google" })),
      });
      login();
    });
  },

  logout: () => {
    googleLogout();
    localStorage.removeItem("user");
    return Promise.resolve();
  },

  checkError: () => Promise.resolve(),

  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),

  getPermissions: () => Promise.resolve(),

  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    // Adicionando uma verificação de dados e um avatar padrão para exibição no react-admin
    if (user && user.access_token) {
      return Promise.resolve({
        id: user.authuser || "google_user",
        fullName: "Google User",
        avatar: `https://lh3.googleusercontent.com/a/default-user-profile.png`, // URL padrão ou personalizada
      });
    }
    return Promise.reject();
  },
};

export default authProvider;