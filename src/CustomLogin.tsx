// src/CustomLogin.tsx

import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação do React Router
import { HttpError } from "react-admin";

const CustomLogin = () => {
  const navigate = useNavigate(); // Hook para navegação

  const login = useGoogleLogin({
    onSuccess: (response) => {
      // Salva as informações de autenticação e redireciona
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/"); // Redireciona para a página principal do Admin
    },
    onError: () => {
      throw new HttpError("Unauthorized", 401, {
        message: "Failed to authenticate with Google",
      });
    },
  });

  return (
    <div style={{ textAlign: "center", paddingTop: "20%" }}>
      <h2>Bem-vindo</h2>
      <p>Para acessar o sistema, faça login com o Google:</p>
      <button onClick={() => login()} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login com Google
      </button>
    </div>
  );
};

export default CustomLogin;