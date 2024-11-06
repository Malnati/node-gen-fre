// src/CustomLogin.tsx

import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { HttpError } from "react-admin";
import { Button, Box, Typography, Container, CssBaseline } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Bem-vindo
        </Typography>
        <Typography component="p" variant="body1" sx={{ mt: 2 }}>
          Para acessar o sistema, faça login com o Google:
        </Typography>
        <Button
          onClick={() => login()}
          fullWidth
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{ mt: 3, mb: 2 }}
        >
          Login com Google
        </Button>
      </Box>
    </Container>
  );
};

export default CustomLogin;