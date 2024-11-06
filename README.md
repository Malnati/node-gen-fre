# Node.js e React Code Generator - Back-end com NestJS e Front-end com React

![Node.js Code Generator](./public/node-gen-fre.gif)

## Descrição

Bem-vindo ao Node.js e React Code Generator, uma aplicação que facilita a criação de sistemas completos, gerando tanto o back-end em Node.js com NestJS quanto o front-end em React com React Admin. Esta ferramenta permite configurar uma nova aplicação definindo parâmetros de conexão com o banco de dados (PostgreSQL ou MySQL) e selecionando componentes personalizados para geração automática do código-fonte.

## Funcionalidades

- 🛠 Geração de código para back-end: Cria automaticamente uma estrutura de back-end em NestJS com entidades, serviços, controladores e outros componentes essenciais.
- 💻 Geração de front-end dinâmico: Cria interfaces de front-end com React Admin, gerando componentes de CRUD para cada entidade configurada.
- 🗄 Suporte a múltiplos bancos de dados: Configure sua aplicação para usar PostgreSQL ou MySQL.
- 📂 Configuração personalizada: Defina o diretório de saída e os componentes que deseja incluir.
- 🖱 Interface intuitiva: Configure facilmente uma nova aplicação e visualize ou edite aplicações existentes.

## Pré-requisitos

Para rodar o projeto, você precisará:

- Node.js (>=14.0.0)
- Docker (para execução em ambiente containerizado)
- Yarn ou npm para gerenciamento de pacotes

## Configuração do Projeto

1.	Clone o repositório:

```bash
git clone https://github.com/seu_usuario/node-react-code-generator.git
cd node-react-code-generator
```

2.	Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```


3.	Configuração do Docker:

O projeto possui um ambiente Docker configurado para facilitar a execução. Para iniciar os containers, execute:

```bash
docker-compose up
```

4.	Variáveis de Ambiente:

Para personalizar a conexão com o banco de dados e outras configurações, ajuste as variáveis no arquivo .env. Exemplo:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
```

## Uso

1.	Acessando a Interface:
Abra o navegador e acesse a interface em http://localhost:3000.
2.	Criando uma Nova Aplicação:
No painel, vá até “Inserir Nova Aplicação”. Preencha as informações, como host, porta, banco de dados, usuário e senha, selecione os componentes desejados e clique em “Gerar Código”. Agora você pode escolher gerar tanto o back-end quanto o front-end, ou ambos, para um sistema completo.
3.	Visualizando e Editando Aplicações:
Após criar uma aplicação, você pode visualizá-la e editá-la na seção “Ver Aplicações Geradas”.

## Estrutura do Projeto

- src/: Código-fonte principal.
- components/: Componentes reutilizáveis do front-end.
- services/: Serviços de back-end gerados.
- controllers/: Controladores de rotas de API.
- modules/: Módulos do NestJS para organização de funcionalidades.
- public/: Contém ativos públicos, como o GIF de demonstração.
- front/: Contém o código gerado do front-end com componentes React Admin.

## Contribuindo

Para contribuir com o projeto, faça um fork, crie uma nova branch para suas mudanças e envie um pull request. Agradecemos qualquer tipo de contribuição!

## Licença

Este projeto é licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.

## Exemplo de Uso

Este GIF demonstra como é fácil configurar e gerar um sistema completo (back-end e front-end) com apenas alguns cliques.

## Pontos-chave

- Atualização do título e descrição: Reflete a inclusão do front-end no processo de geração.
- Atualização nas funcionalidades: Incluída a geração de front-end dinâmico com React Admin.
- Estrutura do projeto: Inclui a pasta front/ para o front-end.
- GIF de demonstração: Mantido para ilustrar o fluxo.
