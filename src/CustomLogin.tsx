import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { HttpError } from "react-admin";

const CustomLogin = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (response) => {
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/");
    },
    onError: () => {
      throw new HttpError("Unauthorized", 401, {
        message: "Failed to authenticate with Google",
      });
    },
  });

  return (
    <div style={{
      textAlign: "center",
      paddingTop: "20%",
      color: "#FFFFFF", // Texto em branco
      backgroundColor: "#121212", // Background escuro
      minHeight: "100vh", // Cobre toda a altura da página
    }}>
      <h2 style={{ color: "#BB86FC" }}>Bem-vindo</h2>
      <p>Para acessar o sistema, faça login com o Google:</p>
      <button
        onClick={() => login()}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#BB86FC", // Botão em roxo escuro
          color: "#FFFFFF", // Texto do botão branco
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login com Google
      </button>
    </div>
  );
};

export default CustomLogin;