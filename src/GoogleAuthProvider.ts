// src/GoogleAuthProvider.ts

import { AuthProvider, HttpError } from "react-admin";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

export const GoogleAuthProvider: AuthProvider = {
  login: () => {
    return new Promise<void>((resolve, reject) => {
      const login = useGoogleLogin({
        onSuccess: (response) => {
          // Salvando as informações de autenticação do usuário
          localStorage.setItem("user", JSON.stringify(response));
          resolve();
        },
        onError: () =>
          reject(
            new HttpError("Unauthorized", 401, {
              message: "Failed to authenticate with Google",
            })
          ),
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

  getIdentity: async () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    if (user && user.access_token) {
      try {
        // Fetch Google user info using the access token
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`
        );
        const profile = await response.json();

        return Promise.resolve({
          id: profile.id,
          fullName: profile.name || "Google User",
          avatar: profile.picture || `https://lh3.googleusercontent.com/a/default-user-profile.png`,
        });
      } catch (error) {
        console.error("Erro ao buscar perfil do usuário:", error);
        return Promise.reject(new HttpError("Failed to fetch user profile", 500));
      }
    }
    return Promise.reject(new HttpError("No user authenticated", 401));
  },
};

export default GoogleAuthProvider;