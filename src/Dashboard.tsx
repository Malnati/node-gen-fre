import { Card, CardContent, CardHeader, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <Card style={{ maxWidth: 800, margin: "20px auto", padding: "20px" }}>
            <CardHeader 
                title="Bem-vindo ao Gerador de Código Automático" 
                subheader="Facilite a criação de sistemas completos com back-ends em Node.js e front-ends em React"
                titleTypographyProps={{ variant: "h4", align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
            />
            <CardContent>
                <Box textAlign="center" mb={3}>
                    <Typography variant="body1">
                        Esta aplicação permite que você configure e gere automaticamente um sistema completo, com back-end em Node.js (utilizando o framework NestJS) e front-end em React (utilizando React Admin).
                        Defina os parâmetros da aplicação, escolha o banco de dados (PostgreSQL ou MySQL) e gere o código-fonte necessário para iniciar um novo projeto de forma rápida e prática.
                    </Typography>
                </Box>

                <Box textAlign="center" mb={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddCircleOutlineIcon />}
                        onClick={() => navigate("/fronts/create")}
                        style={{ marginRight: "10px" }}
                    >
                        Front-end
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<CodeIcon />}
                        onClick={() => navigate("/apps")}
                    >
                        Back-end
                    </Button>
                </Box>

                <Box mt={3}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Funcionalidades Disponíveis
                    </Typography>
                    <Typography variant="body2" align="center" paragraph>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li>🔹 Inserir dados para criar uma nova aplicação</li>
                            <li>🔹 Configurar banco de dados PostgreSQL ou MySQL</li>
                            <li>🔹 Gerar código-fonte para back-end com estrutura de produção</li>
                            <li>🔹 Gerar front-end dinâmico com React Admin</li>
                            <li>🔹 Editar e visualizar aplicativos existentes</li>
                        </ul>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};