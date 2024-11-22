// src/cache/IndexDB.ts

// export async function seedInputPropsData() {
//   await booleanInputs.put({
//     id: 1,
//     source: "isActive",
//     className: "boolean-input",
//     defaultValue: "defaultValue",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Indica se inativo",
//     label: "Usuário Ativo",
//     options: {
//       checkedIcon: "EditAttributesIcon", // Ícone personalizado para o estado marcado
//       color: "primary", // Define a cor do switch
//     },
//   });

//   await booleanInputs.put({
//     id: 2,
//     source: "receiveNewsletter",
//     className: "newsletter-toggle",
//     defaultValue: false,
//     readOnly: false,
//     disabled: false,
//     fullWidth: false,
//     helperText: "Permite que receba boletins informativos",
//     label: "Receber Newsletter",
//     options: {
//       checkedIcon: "EditAttributesIcon", // Ícone personalizado para o estado marcado
//       color: "primary", // Define a cor do switch
//     },
//   });

//   await checkboxInputs.put({
//     id: 1,
//     source: "acceptTerms", // Identificador do campo, relacionado à aceitação de termos
//     className: "terms-checkbox", // Classe CSS para customização
//     readOnly: false, // Checkbox é editável
//     disabled: false, // Não desabilitado
//     fullWidth: false, // Não ocupa largura total do formulário
//     helperText: "Você precisa aceitar os termos para continuar", // Texto de ajuda exibido abaixo do campo
//     label: "Aceitar Termos", // Rótulo exibido ao lado do checkbox
//     labelPlacement: "end", // Rótulo exibido à direita do checkbox
//     optionValue: "terms", // Valor que será enviado ao banco de dados
//     translateChoice: true, // Rótulo será traduzido com base na configuração de idioma
//     choices: [{ id: "1", name: "Aceitar Termos" }], // Opções disponíveis para o usuário
//   });

//   await checkboxInputs.put({
//     id: 2,
//     source: "subscribeNewsletter", // Identificador do campo, relacionado à inscrição em boletins
//     className: "newsletter-checkbox", // Classe CSS para customização
//     readOnly: false,
//     disabled: false,
//     fullWidth: false,
//     helperText: "Selecione para receber nossos boletins semanais",
//     label: "Inscrever-se no Boletim Informativo",
//     labelPlacement: "end", // Rótulo exibido à esquerda do checkbox
//     optionValue: "newsletter", // Valor representando a escolha do usuário
//     translateChoice: false, // Não traduz o rótulo; usa o texto diretamente
//     choices: [{ id: "1", name: "Inscrever-se no Boletim Informativo" }], // Opções disponíveis para o usuário
//   });

//   await dateInputs.put({
//     id: 1,
//     source: "birthDate", // Nome do campo relacionado à data de nascimento
//     className: "birthdate-input", // Classe CSS para customização do input de data
//     defaultValue: "2000-01-01", // Data padrão (usado em formulários com valor inicial)
//     readOnly: false, // Campo de data é editável
//     disabled: false, // Campo de data não está desabilitado
//     fullWidth: true, // Campo ocupa a largura total do formulário
//     helperText: "Informe sua data de nascimento", // Texto de ajuda para o campo
//     label: "Data de Nascimento", // Rótulo exibido ao lado do campo
//     locale: "pt-BR", // Formato de data brasileiro
//     placeholder: "DD/MM/AAAA", // Placeholder indicando o formato esperado
//   });

//   await dateInputs.put({
//     id: 2,
//     source: "startDate", // Nome do campo relacionado à data de início
//     className: "startdate-input", // Classe CSS para customização do input
//     defaultValue: null, // Nenhum valor padrão definido
//     readOnly: false,
//     disabled: false,
//     fullWidth: false,
//     helperText: "Escolha a data de início para o evento",
//     label: "Data de Início",
//     locale: "en-US", // Formato de data americano
//     placeholder: "MM/DD/YYYY", // Placeholder indicando o formato esperado
//   });

//   await dateTimeInputs.put({
//     id: 1,
//     source: "appointment", // Nome do campo relacionado a compromissos
//     className: "appointment-input", // Classe CSS para o input de data/hora
//     defaultValue: "2024-01-15T14:30:00", // Data/hora padrão inicial para o input
//     readOnly: false, // Campo de data/hora é editável
//     disabled: false, // Campo de data/hora não está desabilitado
//     fullWidth: true, // Campo ocupa largura total do formulário
//     helperText: "Agende um horário", // Texto de ajuda exibido abaixo do campo
//     label: "Data e Hora do Compromisso", // Rótulo associado ao input
//     locale: "pt-BR", // Formato brasileiro
//     placeholder: "DD/MM/AAAA HH:MM", // Placeholder que indica formato de data/hora esperado
//   });

//   await dateTimeInputs.put({
//     id: 2,
//     source: "meetingDateTime", // Nome do campo relacionado ao horário de reunião
//     className: "meeting-input", // Classe CSS para o input de data/hora
//     defaultValue: null, // Nenhum valor padrão inicial
//     readOnly: false,
//     disabled: true, // Campo de data/hora está desabilitado (apenas visualização)
//     fullWidth: false,
//     helperText: "Data e horário da próxima reunião",
//     label: "Horário da Reunião",
//     locale: "en-US", // Formato de data americano
//     placeholder: "MM/DD/YYYY HH:MM AM/PM", // Placeholder para formato de data/hora em inglês
//   });

//   await fileInputs.put({
//     id: 1,
//     source: "document", // Nome do campo para um documento de upload
//     className: "document-input", // Classe CSS para customizar o input de arquivo
//     defaultValue: null, // Nenhum valor padrão inicial
//     readOnly: false, // Campo editável
//     disabled: false, // Campo habilitado para interação
//     fullWidth: true, // Campo ocupa a largura total do formulário
//     helperText: "Envie seu documento em PDF ou Word", // Texto de ajuda para o input de arquivo
//     label: "Documento", // Rótulo do campo
//     accept: "application/pdf", // Aceita apenas arquivos PDF e documentos Word
//     minSize: 1024, // Tamanho mínimo do arquivo em bytes (1 KB)
//     maxSize: 10485760, // Tamanho máximo do arquivo em bytes (10 MB)
//     multiple: false, // Apenas um arquivo permitido
//     placeholder: "Escolha um documento para enviar", // Placeholder para o campo de upload
//   });

//   await fileInputs.put({
//     id: 2,
//     source: "attachments", // Nome do campo para anexos
//     className: "attachments-input", // Classe CSS para customizar o input
//     defaultValue: null, // Nenhum valor padrão inicial
//     readOnly: false,
//     disabled: false,
//     fullWidth: false,
//     helperText: "Envie até 5 anexos", // Texto de ajuda para os anexos
//     label: "Anexos",
//     accept: ".zip", // Aceita formatos de arquivos compactados
//     minSize: 512, // Tamanho mínimo de 512 bytes (0.5 KB)
//     maxSize: 52428800, // Tamanho máximo de 50 MB
//     multiple: true, // Permite múltiplos arquivos
//     placeholder: "Escolha arquivos para anexar",
//   });

//   await imageInputs.put({
//     id: 1,
//     source: "profilePicture", // Nome do campo para uma imagem de perfil
//     className: "profile-picture-input", // Classe CSS para o input de imagem
//     defaultValue: null, // Nenhum valor padrão
//     readOnly: false, // Campo editável
//     disabled: false, // Campo habilitado para interação
//     fullWidth: true, // Campo ocupa largura total
//     helperText: "Envie uma imagem de perfil em JPEG ou PNG", // Texto de ajuda
//     label: "Imagem de Perfil", // Rótulo do campo
//     accept: "image/jpeg", // Aceita apenas imagens JPEG e PNG
//     minSize: 10240, // Tamanho mínimo de 10 KB
//     maxSize: 5242880, // Tamanho máximo de 5 MB
//     multiple: false, // Apenas uma imagem permitida
//     placeholder: "Selecione uma imagem para o perfil", // Placeholder para o campo de imagem
//   });

//   await imageInputs.put({
//     id: 2,
//     source: "gallery", // Nome do campo para uma galeria de imagens
//     className: "gallery-input", // Classe CSS para o input de galeria de imagens
//     defaultValue: null, // Nenhum valor padrão inicial
//     readOnly: false,
//     disabled: false,
//     fullWidth: false,
//     helperText: "Envie até 10 imagens para a galeria", // Texto de ajuda para o campo de galeria
//     label: "Galeria",
//     accept: "image/*", // Aceita qualquer tipo de imagem
//     minSize: 5120, // Tamanho mínimo de 5 KB
//     maxSize: 10485760, // Tamanho máximo de 10 MB por imagem
//     multiple: true, // Permite múltiplas imagens
//     placeholder: "Escolha imagens para sua galeria",
//   });

//   await numberInputs.put({
//     id: 1,
//     source: "age", // Nome do campo (ex.: "age" para idade)
//     className: "age-input", // Classe CSS para customização do estilo
//     defaultValue: 18, // Valor padrão inicial
//     readOnly: false, // Campo editável
//     disabled: false, // Campo habilitado para interação
//     fullWidth: true, // Campo ocupa largura total do formulário
//     helperText: "Informe sua idade", // Texto de ajuda exibido abaixo do campo
//     label: "Idade", // Rótulo descritivo
//     step: 1, // Incremento de 1 unidade
//     min: 0, // Valor mínimo permitido (0 anos)
//     max: 120, // Valor máximo permitido (120 anos)
//   });

//   await numberInputs.put({
//     id: 2,
//     source: "height", // Nome do campo (ex.: "height" para altura)
//     className: "height-input", // Classe CSS para estilo
//     defaultValue: 170, // Valor padrão inicial (170 cm)
//     readOnly: false,
//     disabled: false,
//     fullWidth: false,
//     helperText: "Informe sua altura em centímetros", // Texto de ajuda para o input
//     label: "Altura (cm)", // Rótulo para o campo
//     step: 0.5, // Incremento de meio centímetro
//     min: 50, // Altura mínima (50 cm)
//     max: 250, // Altura máxima (250 cm)
//   });

//   await numberInputs.put({
//     id: 3,
//     source: "weight", // Nome do campo (ex.: "weight" para peso)
//     className: "weight-input", // Classe CSS personalizada
//     defaultValue: 70, // Valor padrão inicial (70 kg)
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Informe seu peso em kg", // Texto auxiliar
//     label: "Peso (kg)", // Rótulo do campo
//     step: 0.1, // Incremento de 100 gramas
//     min: 20, // Peso mínimo permitido (20 kg)
//     max: 200, // Peso máximo permitido (200 kg)
//   });

//   await passwordInputs.put({
//     id: 1,
//     source: "userPassword", // Nome do campo para senha do usuário
//     className: "password-input", // Classe CSS para customização do estilo
//     defaultValue: "", // Senha vazia como padrão
//     readOnly: false, // Campo editável
//     disabled: false, // Campo habilitado para interação
//     fullWidth: true, // Campo ocupa a largura total do formulário
//     helperText: "Digite sua senha", // Texto auxiliar para o campo
//     label: "Senha", // Rótulo descritivo para o campo de senha
//     autoComplete: "new-password", // Preenchimento automático desativado para nova senha
//   });

//   await passwordInputs.put({
//     id: 2,
//     source: "confirmPassword", // Nome do campo para confirmar a senha
//     className: "confirm-password-input", // Classe CSS personalizada
//     defaultValue: "", // Padrão vazio
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Confirme sua senha", // Texto auxiliar para confirmar senha
//     label: "Confirmar Senha", // Rótulo descritivo
//     autoComplete: "off", // Preenchimento automático desativado
//   });

//   await passwordInputs.put({
//     id: 3,
//     source: "adminPassword", // Nome do campo para senha de admin
//     className: "admin-password-input", // Classe CSS para estilo
//     defaultValue: "", // Padrão vazio para segurança
//     readOnly: false,
//     disabled: false,
//     fullWidth: false, // Campo ocupa largura parcial
//     helperText: "Digite a senha de administrador", // Texto auxiliar
//     label: "Senha de Administrador", // Rótulo do campo
//     autoComplete: "current-password", // Preenchimento automático para senha atual
//   });

//   await referenceInputs.put({
//     id: 1,
//     source: "userRole", // Nome da propriedade no formulário
//     className: "role-input", // Classe CSS para estilização
//     defaultValue: "", // Valor padrão inicial
//     readOnly: false, // Campo é editável
//     disabled: false, // Campo está habilitado
//     fullWidth: true, // Campo ocupa largura total
//     helperText: "Selecione o cargo do usuário", // Texto auxiliar abaixo do campo
//     label: "Cargo", // Rótulo descritivo do campo
//     reference: "roles", // Nome da entidade de referência
//     perPage: 10, // Exibe até 10 opções por página
//     allowEmpty: true, // Permite selecionar valor vazio
//     optionValue: "id", // Usa o campo `id` como valor da opção
//   });

//   await referenceInputs.put({
//     id: 2,
//     source: "productCategory", // Propriedade no formulário
//     className: "category-input", // Classe CSS personalizada
//     defaultValue: "", // Valor inicial vazio
//     readOnly: false,
//     disabled: false,
//     fullWidth: false, // Campo ocupa largura parcial
//     helperText: "Escolha a categoria do produto", // Texto auxiliar
//     label: "Categoria de Produto", // Rótulo para o campo
//     reference: "categories", // Nome da entidade referenciada
//     perPage: 5, // Exibe até 5 opções por página
//     allowEmpty: false, // Valor vazio não permitido
//     optionValue: "name", // Usa o campo `name` como valor da opção
//   });

//   await referenceInputs.put({
//     id: 3,
//     source: "department", // Propriedade de departamento
//     className: "department-input", // Classe para personalização
//     defaultValue: "Sales", // Valor padrão definido como "Sales"
//     readOnly: false,
//     disabled: true, // Campo está desabilitado
//     fullWidth: true,
//     helperText: "Selecione o departamento", // Texto de ajuda
//     label: "Departamento", // Rótulo do campo
//     reference: "departments", // Nome da entidade referenciada
//     perPage: 20, // Exibe até 20 opções por página
//     allowEmpty: true, // Permite valor vazio
//     optionValue: "code", // Usa o campo `code` como valor
//   });

//   await richTextInputs.put({
//     id: 1,
//     source: "postContent", // Nome da propriedade no formulário
//     className: "content-editor", // Classe CSS para personalização
//     defaultValue: "<p>Texto inicial...</p>", // Conteúdo inicial em HTML
//     readOnly: false, // Campo editável
//     disabled: false, // Campo habilitado
//     fullWidth: true, // Ocupa largura total
//     helperText: "Digite o conteúdo da postagem", // Texto auxiliar abaixo do campo
//     label: "Conteúdo da Postagem", // Rótulo do campo
//     toolbar: ["bold", "italic", "link"], // Barra de ferramentas com botões básicos
//   });

//   await richTextInputs.put({
//     id: 2,
//     source: "commentBody", // Nome da propriedade de comentários
//     className: "comment-editor", // Classe CSS para o campo de comentários
//     defaultValue: "", // Conteúdo inicial vazio
//     readOnly: false,
//     disabled: false,
//     fullWidth: false, // Largura parcial
//     helperText: "Escreva seu comentário", // Texto auxiliar
//     label: "Comentário", // Rótulo do campo de comentário
//     toolbar: ["bold", "italic", "underline", "quote"], // Toolbar com negrito, itálico, sublinhado e citação
//   });

//   await richTextInputs.put({
//     id: 3,
//     source: "bio", // Propriedade para uma biografia ou descrição pessoal
//     className: "bio-editor", // Classe CSS para o campo de biografia
//     defaultValue: "<p>Adicione sua biografia aqui.</p>",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Adicione uma breve biografia",
//     label: "Biografia", // Rótulo do campo
//     toolbar: ["bold", "italic", "link", "image"], // Toolbar com imagem
//   });

//   await searchInputs.put({
//     id: 1,
//     source: "productSearch", // Nome da propriedade de pesquisa
//     className: "product-search-input", // Classe CSS personalizada
//     defaultValue: "", // Valor inicial vazio
//     readOnly: false, // Campo editável
//     disabled: false, // Campo habilitado
//     fullWidth: true, // Largura total
//     helperText: "Pesquise produtos pelo nome ou código", // Texto auxiliar para orientação
//     label: "Buscar Produtos", // Rótulo do campo
//     alwaysOn: true, // Campo sempre visível
//     placeholder: "Digite o nome do produto...", // Placeholder para orientação
//     resettable: true, // Campo pode ser resetado ao valor inicial
//   });

//   await searchInputs.put({
//     id: 2,
//     source: "userSearch", // Nome da propriedade de pesquisa para usuários
//     className: "user-search-input", // Classe CSS personalizada
//     defaultValue: "", // Valor inicial vazio
//     readOnly: false,
//     disabled: false,
//     fullWidth: false, // Largura parcial
//     helperText: "Digite o nome ou e-mail do usuário", // Texto auxiliar
//     label: "Buscar Usuário", // Rótulo para o campo de busca
//     alwaysOn: false, // Não exibido por padrão, pode aparecer em filtros
//     placeholder: "Nome ou e-mail...", // Placeholder para o campo
//     resettable: true, // Campo resetável
//   });

//   await searchInputs.put({
//     id: 3,
//     source: "orderSearch", // Nome da propriedade de pesquisa para pedidos
//     className: "order-search-input", // Classe CSS personalizada
//     defaultValue: "12345", // Valor inicial padrão (exemplo)
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Pesquise pedidos pelo número ou cliente",
//     label: "Buscar Pedido",
//     alwaysOn: true, // Campo de pesquisa sempre visível
//     placeholder: "Número do pedido ou nome do cliente...",
//     resettable: true, // Campo resetável ao valor padrão
//   });

//   await selectInputs.put({
//     id: 1,
//     source: "category",
//     className: "category-select-input",
//     defaultValue: "electronics",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Selecione uma categoria",
//     label: "Categoria",
//     choices: [
//       { id: "electronics", name: "Eletrônicos" },
//       { id: "fashion", name: "Moda" },
//       { id: "home", name: "Casa" },
//     ],
//     createLabel: "Adicionar Nova Categoria",
//     disableValue: false,
//     emptyText: "Nenhuma categoria selecionada",
//     emptyValue: "",
//     isPending: false,
//     optionValue: "id",
//     resettable: true,
//     translateChoice: true,
//   });

//   await selectInputs.put({
//     id: 2,
//     source: "status",
//     className: "status-select-input",
//     defaultValue: "active",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Selecione o status do item",
//     label: "Status",
//     choices: [
//       { id: "active", name: "Ativo" },
//       { id: "inactive", name: "Inativo" },
//       { id: "pending", name: "Pendente" },
//     ],
//     createLabel: "Adicionar Nova Categoria",
//     disableValue: false,
//     emptyText: "Nenhum status selecionado",
//     emptyValue: "",
//     isPending: false,
//     optionValue: "id",
//     resettable: true,
//     translateChoice: true,
//   });

//   await selectInputs.put({
//     id: 3,
//     source: "country",
//     className: "country-select-input",
//     defaultValue: "",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Selecione o país de origem",
//     label: "País",
//     choices: [
//       { id: "BR", name: "Brasil" },
//       { id: "US", name: "Estados Unidos" },
//       { id: "FR", name: "França" },
//     ],
//     createLabel: "Adicionar Nova Categoria",
//     disableValue: false,
//     emptyText: "Selecione um país",
//     emptyValue: "",
//     isPending: false,
//     optionValue: "id",
//     resettable: true,
//     translateChoice: true,
//   });

//   await textInputs.put({
//     id: 1,
//     source: "username",
//     className: "username-input",
//     defaultValue: "",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Digite seu nome de usuário",
//     label: "Nome de Usuário",
//     type: "text",
//     resettable: true,
//     multiline: false,
//     placeholder: "Ex.: usuario123",
//   });

//   await textInputs.put({
//     id: 2,
//     source: "email",
//     className: "email-input",
//     defaultValue: "",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Digite seu endereço de e-mail",
//     label: "E-mail",
//     type: "email",
//     resettable: true,
//     multiline: false,
//     placeholder: "Ex.: exemplo@dominio.com",
//   });

//   await textInputs.put({
//     id: 3,
//     source: "bio",
//     className: "bio-textarea",
//     defaultValue: "",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Fale um pouco sobre você",
//     label: "Biografia",
//     type: "text",
//     resettable: true,
//     multiline: true,
//     placeholder: "Ex.: Sou um desenvolvedor apaixonado por tecnologia...",
//   });

//   await textInputs.put({
//     id: 4,
//     source: "password",
//     className: "password-input",
//     defaultValue: "",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Digite uma senha segura",
//     label: "Senha",
//     type: "password",
//     resettable: false,
//     multiline: false,
//     placeholder: "********",
//   });

//   await timeInputs.put({
//     id: 1,
//     source: "startTime",
//     className: "time-input",
//     defaultValue: "08:00",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Escolha o horário de início do expediente",
//     label: "Horário de Início",
//   });

//   await timeInputs.put({
//     id: 2,
//     source: "endTime",
//     className: "time-input",
//     defaultValue: "18:00",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Escolha o horário de término do expediente",
//     label: "Horário de Término",
//   });

//   await timeInputs.put({
//     id: 3,
//     source: "lunchBreak",
//     className: "time-input",
//     defaultValue: "12:00",
//     readOnly: false,
//     disabled: false,
//     fullWidth: false,
//     helperText: "Horário reservado para almoço",
//     label: "Horário de Almoço",
//   });

//   await translatableInputs.put({
//     id: 1,
//     source: "description",
//     className: "translatable-input",
//     defaultValue: "Descrição padrão",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Forneça a descrição em diversos idiomas",
//     label: "Descrição",
//     locales: ["en", "pt-BR", "es"],
//     defaultLocale: "en",
//     groupKey: "productDescription",
//   });

//   await translatableInputs.put({
//     id: 2,
//     source: "title",
//     className: "translatable-input",
//     defaultValue: "Título padrão",
//     readOnly: false,
//     disabled: false,
//     fullWidth: true,
//     helperText: "Título do produto em diferentes idiomas",
//     label: "Título",
//     locales: ["en", "fr", "de", "es"],
//     defaultLocale: "en",
//     groupKey: "productTitle",
//   });

//   await translatableInputs.put({
//     id: 3,
//     source: "summary",
//     className: "translatable-input",
//     defaultValue: "Resumo padrão",
//     readOnly: false,
//     disabled: false,
//     fullWidth: false,
//     helperText: "Resumo breve do conteúdo",
//     label: "Resumo",
//     locales: ["en", "pt-BR", "fr"],
//     defaultLocale: "pt-BR",
//     groupKey: "contentSummary",
//   });
// }

  // Adiciona os dados usando `put`

  // async seedData() {
  //     await platforms.put({ id: 1, name: 'Gerador', apps: [1, 2], specifications: [20, 21] });

  //     // Adiciona os dados de apps
  //     await apps.put({ id: 1, platformId: 1, name: 'Users', frontends: [1], microservices: [1], specifications: [11, 13] });
  //     await apps.put({ id: 2, platformId: 1, name: 'Profiles', frontends: [2], microservices: [2], specifications: [10, 12] });

  //     // Adiciona os dados de microservices
  //     await microservices.put({ id: 1, appId: 1, name: 'User', databases: [1], specifications: [14, 16] });
  //     await microservices.put({ id: 2, appId: 1, name: 'Profile', databases: [2], specifications: [15] });

  //     // Adiciona os dados de databases
  //     await databases.put({ id: 1, microserviceId: 1, host: 'localhost', port: '5432', database: 'user', user: 'postgres', dbType: 'postgres', specifications: [17, 19] });
  //     await databases.put({ id: 2, microserviceId: 2, host: 'localhost', port: '5432', database: 'profile', user: 'postgres', dbType: 'postgres', specifications: [18] });

  //     // Adiciona os dados de frontends
  //     await frontends.put({ id: 1, appId: 1, name: 'Web Desktop', screens: [], specifications: []});

  //     // Adiciona os dados de screens
  //     await logins.put({ id:  1, frontendId: 1, name: 'Login', fields: [], attributes: [1, 2, 3, 4], specifications: [] });
  //     // Adiciona os dados de specifications para cada tipo, incluindo novos exemplos para Platform, App, MicroService, Database, etc
  //     await attributes.bulkPut([
  //         // Attributes for login
  //         { id:  1, type: 'login', referenceId: 1, key: 'Typography-Welcome', value: 'Bem-vindo' },
  //         { id:  2, type: 'login', referenceId: 1, key: 'Typography-How-to-Login', value: 'Para acessar o sistema, faça login com o Google:' },
  //         { id:  3, type: 'login', referenceId: 1, key: 'Typography-Button', value: 'Login com Google' },
  //         { id:  4, type: 'login', referenceId: 1, key: 'Google-OAuth-Provider-ID', value: '178353359157-3m13s46p97pdgl35pfmri5a5g6737qpp.apps.googleusercontent.com' },
  //     ]);

  //     await dashboards.put({ id:  1, frontendId: 1, name: 'Dashboard', fields: [], attributes: [5, 6, 7, 8], specifications: [] });
  //     await attributes.bulkPut([
  //         // Attributes for dashboard
  //         { id:  5, type: 'dashboard', referenceId: 1, key: 'Typography-CardHeader-title', value: 'Bem-vindo ao sistema' },
  //         { id:  6, type: 'dashboard', referenceId: 1, key: 'Typography-CardHeader-subheader', value: 'Id consectetur aliqua laborum amet proident tempor aliquip aliqua fugiat sit laboris qui incididunt proident. Sit do id laboris sunt adipisicing pariatur amet. Proident do sunt incididunt minim duis non cillum ad enim cillum proident reprehenderit eu. Commodo amet duis incididunt aliquip cillum dolore excepteur culpa est non nisi laborum et. Consequat fugiat amet ad culpa elit id ex ea excepteur occaecat. Irure magna qui Lorem eiusmod dolor cillum do minim.' },
  //         { id:  7, type: 'dashboard', referenceId: 1, key: 'Typography-CardContent', value: 'Amet duis eu non do exercitation consequat irure Lorem nisi do Lorem est anim. Consectetur laboris et anim et incididunt pariatur ad ullamco consectetur reprehenderit occaecat in exercitation pariatur. Excepteur incididunt consectetur aute minim consequat velit aute mollit sint. Pariatur labore aliquip magna.' },
  //         { id:  8, type: 'dashboard', referenceId: 1, key: 'Typography-Box', value: 'Occaecat elit qui duis commodo dolore ex est velit non pariatur. Labore eu cillum exercitation. Eu mollit ut laboris. In labore occaecat minim veniam in reprehenderit id sunt. Incididunt excepteur Lorem officia velit fugiat. Quis officia eu ullamco veniam ipsum sint nisi eiusmod. Aliquip quis mollit proident aliquip nisi do commodo aliquip est fugiat eiusmod exercitation quis ad. Officia eiusmod magna qui id minim laboris.' },
  //     ]);

  //     await screens.put({ id:  3, frontendId: 1, name: 'List User', fields: [1, 2, 3, 4], specifications: [] });
  //     // Adiciona os dados de fields - User
  //     await fields.put({ id: 1, screenId: 1, name: 'user', label: 'name', type: 'string', max: 256, specifications: [1, 2] });
  //     await fields.put({ id: 2, screenId: 1, name: 'password', label: 'password', type: 'string', max: 256, specifications: [3, 4] });
  //     await fields.put({ id: 3, screenId: 1, name: 'e-mail', label: 'e-mail', type: 'string', max: 256, specifications: [5, 6] });
  //     await fields.put({ id: 4, screenId: 1, name: 'sms', label: 'sms', type: 'string', max: 256, specifications: [7, 8] });
  //     await attributes.bulkPut([
  //         // Attributes for fields - User
  //         { id:  9,  type: 'field', referenceId: 1, key: 'multiline', value: '' },
  //         { id:  10, type: 'field', referenceId: 2, key: 'resettable', value: '' },
  //         { id:  12, type: 'field', referenceId: 2, key: 'text', value: '' },
  //         { id:  12, type: 'field', referenceId: 2, key: 'number', value: '' },
  //         { id:  11, type: 'field', referenceId: 2, key: 'rich-text', value: '' },
  //         { id:  11, type: 'field', referenceId: 2, key: 'rich-text-toolbar', value: '' },
  //     ]);

  //     await screens.put({ id:  4, frontendId: 1, name: 'Create User', fields: [1, 2, 3, 4], specifications: [26] });
  //     await screens.put({ id:  5, frontendId: 1, name: 'Update User', fields: [1, 2, 3, 4], specifications: [26] });
  //     await screens.put({ id:  6, frontendId: 1, name: 'Delete User', fields: [1, 2, 3, 4], specifications: [26] });
  //     await screens.put({ id:  7, frontendId: 1, name: 'List Profile', fields: [5, 6, 7], specifications: [27] });
  //     await screens.put({ id:  8, frontendId: 1, name: 'Create Profile', fields: [5, 6, 7], specifications: [27] });
  //     await screens.put({ id:  9, frontendId: 1, name: 'Update Profile', fields: [5, 6, 7], specifications: [27] });
  //     await screens.put({ id: 10, frontendId: 1, name: 'Delete Profile', fields: [5, 6, 7], specifications: [27] });

  //     // Adiciona os dados de fields - Profile
  //     await fields.put({ id: 5, screenId: 2, name: 'name', label: 'Name', type: 'string', max: 256, specifications: [9, 10] });
  //     await fields.put({ id: 6, screenId: 2, name: 'company', label: 'Company', type: 'string', max: 256, specifications: [11, 12] });
  //     await fields.put({ id: 7, screenId: 2, name: 'title', label: 'Title', type: 'string', max: 256, specifications: [13, 14] });

  //     // Adiciona os dados de specifications para cada tipo, incluindo novos exemplos para Platform, App, MicroService, Database
  //     await specifications.bulkPut([

  //         // Specifications for iOS - User Screen Fields
  //         { id: 1, type: 'field', referenceId: 1, key: 'placeholder', value: 'Enter username' },
  //         { id: 2, type: 'field', referenceId: 1, key: 'required', value: true },
  //         { id: 3, type: 'field', referenceId: 2, key: 'minLength', value: 8 },
  //         { id: 4, type: 'field', referenceId: 2, key: 'validationPattern', value: '^[A-Za-z0-9]+$' },
  //         { id: 5, type: 'field', referenceId: 3, key: 'validationPattern', value: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$' },
  //         { id: 6, type: 'field', referenceId: 3, key: 'placeholder', value: 'Enter email' },
  //         { id: 7, type: 'field', referenceId: 4, key: 'maxLength', value: 10 },
  //         { id: 8, type: 'field', referenceId: 4, key: 'validationPattern', value: '^[0-9]+$' },

  //         // Specifications for iOS - Profile Screen Fields
  //         { id:  9, type: 'field', referenceId: 5, key: 'required', value: true },
  //         { id: 10, type: 'field', referenceId: 5, key: 'placeholder', value: 'Enter your full name' },
  //         { id: 11, type: 'field', referenceId: 6, key: 'placeholder', value: 'Enter company name' },
  //         { id: 12, type: 'field', referenceId: 7, key: 'placeholder', value: 'Enter job title' },

  //         // Specifications for Android - User Screen Fields
  //         { id: 13, type: 'field', referenceId: 8, key: 'placeholder', value: 'Username' },
  //         { id: 14, type: 'field', referenceId: 8, key: 'autoCapitalize', value: 'none' },
  //         { id: 15, type: 'field', referenceId: 9, key: 'minLength', value: 8 },
  //         { id: 16, type: 'field', referenceId: 9, key: 'autoComplete', value: 'password' },
  //         { id: 17, type: 'field', referenceId: 10, key: 'placeholder', value: 'Email address' },
  //         { id: 18, type: 'field', referenceId: 10, key: 'validationPattern', value: '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$' },
  //         { id: 19, type: 'field', referenceId: 11, key: 'maxLength', value: 12 },
  //         { id: 20, type: 'field', referenceId: 11, key: 'keyboardType', value: 'numeric' },

  //         // Specifications for Android - Profile Screen Fields
  //         { id: 21, type: 'field', referenceId: 12, key: 'placeholder', value: 'Enter name' },
  //         { id: 22, type: 'field', referenceId: 12, key: 'required', value: true },
  //         { id: 23, type: 'field', referenceId: 13, key: 'placeholder', value: 'Enter company' },
  //         { id: 24, type: 'field', referenceId: 13, key: 'autoCapitalize', value: 'words' },
  //         { id: 25, type: 'field', referenceId: 14, key: 'placeholder', value: 'Enter position title' },
  //         { id: 26, type: 'field', referenceId: 14, key: 'placeholder', value: 'Enter name' },
  //         { id: 27, type: 'field', referenceId: 14, key: 'placeholder', value: 'Enter company title' },
  //         { id: 28, type: 'field', referenceId: 14, key: 'placeholder', value: 'Enter the title' },

  //         // Specifications for screens - layout details
  //         { id: 26, type: 'screen', referenceId: 1, key: 'layout', value: 'grid' },
  //         { id: 27, type: 'screen', referenceId: 2, key: 'layout', value: 'list' },
  //         { id: 28, type: 'screen', referenceId: 3, key: 'layout', value: 'form' },
  //         { id: 29, type: 'screen', referenceId: 4, key: 'layout', value: 'table' },

  //         // Specifications for Frontends
  //         { id: 7, type: 'frontend', referenceId: 1, key: 'responsive', value: true },
  //         { id: 8, type: 'frontend', referenceId: 2, key: 'responsive', value: false },
  //         { id: 9, type: 'frontend', referenceId: 1, key: 'theme', value: 'dark' },

  //         // Specifications for Apps
  //         { id: 10, type: 'app', referenceId: 2, key: 'theme', value: 'light' },
  //         { id: 11, type: 'app', referenceId: 1, key: 'loginType', value: 'OAuth' },
  //         { id: 12, type: 'app', referenceId: 2, key: 'sso', value: 'Google' },
  //         { id: 13, type: 'app', referenceId: 1, key: 'sso', value: 'Apple' },

  //         // Specifications for Microservices
  //         { id: 14, type: 'microservice', referenceId: 1, key: 'version', value: '1.0.0' },
  //         { id: 15, type: 'microservice', referenceId: 2, key: 'healthCheck', value: '/health' },
  //         { id: 16, type: 'microservice', referenceId: 1, key: 'retryPolicy', value: { maxRetries: 3, interval: 1000 } },

  //         // Specifications for Databases
  //         { id: 17, type: 'database', referenceId: 1, key: 'connectionTimeout', value: 5000 },
  //         { id: 18, type: 'database', referenceId: 2, key: 'poolSize', value: 10 },
  //         { id: 19, type: 'database', referenceId: 1, key: 'ssl', value: true },

  //         // Specifications for Platforms
  //         { id: 20, type: 'platform', referenceId: 1, key: 'region', value: 'US-East' },
  //         { id: 21, type: 'platform', referenceId: 1, key: 'supportEmail', value: 'support@platform.com' }
  //     ]);
  // }

// export async function deleteDatabase() {
//     await db.checkboxInputs.bulkDelete(
//       await db.checkboxInputs.toCollection().primaryKeys(),
//     );
//     await db.dateInputs.bulkDelete(
//       await db.dateInputs.toCollection().primaryKeys(),
//     );
//     await db.dateTimeInputs.bulkDelete(
//       await db.dateTimeInputs.toCollection().primaryKeys(),
//     );
//     await db.fileInputs.bulkDelete(
//       await db.fileInputs.toCollection().primaryKeys(),
//     );
//     await db.imageInputs.bulkDelete(
//       await db.imageInputs.toCollection().primaryKeys(),
//     );
//     await db.numberInputs.bulkDelete(
//       await db.numberInputs.toCollection().primaryKeys(),
//     );
//     await db.passwordInputs.bulkDelete(
//       await db.passwordInputs.toCollection().primaryKeys(),
//     );
//     await db.referenceInputs.bulkDelete(
//       await db.referenceInputs.toCollection().primaryKeys(),
//     );
//     await db.richTextInputs.bulkDelete(
//       await db.richTextInputs.toCollection().primaryKeys(),
//     );
//     await db.searchInputs.bulkDelete(
//       await db.searchInputs.toCollection().primaryKeys(),
//     );
//     await db.selectInputs.bulkDelete(
//       await db.selectInputs.toCollection().primaryKeys(),
//     );
//     await db.textInputs.bulkDelete(
//       await db.textInputs.toCollection().primaryKeys(),
//     );
//     await db.timeInputs.bulkDelete(
//       await db.timeInputs.toCollection().primaryKeys(),
//     );
//     await db.translatableInputs.bulkDelete(
//       await db.translatableInputs.toCollection().primaryKeys(),
//     );
//   }
// }

