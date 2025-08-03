# 📧 Google API Integration (Gmail + Calendar)

Este projeto é uma aplicação Node.js que realiza autenticação com a conta do Google do usuário via OAuth2, permitindo ler e-mails recebidos (Gmail) e eventos do Google Agenda. Ideal para aplicações que precisam integrar funcionalidades de comunicação e calendário de forma segura.

## 🚀 Funcionalidades

- Autenticação OAuth2 com conta Google
- Leitura dos e-mails recebidos (Gmail)
- Listagem de eventos futuros (Google Agenda)
- Armazenamento de tokens em arquivo local para reutilização de sessão

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- Google APIs (gmail, calendar)
- OAuth2
- JavaScript (ES6)
- File System (`fs`)
- dotenv (opcional)

## 📁 Estrutura de Pastas

```

📦root/
┣ 📂data/ → Contém as credenciais e o token gerado
┣ 📂src/
┃ ┣ 📂routes/ → Rotas de autenticação, e-mail e eventos
┃ ┗ 📂services/ → (opcional) Serviços para organizar a lógica
┣ 📄index.js → Arquivo principal da aplicação
┣ 📄.env → Variáveis de ambiente (não incluído no repositório)
┣ 📄.gitignore → Arquivos e pastas ignoradas no versionamento
┗ 📄README.md → Este arquivo

```

## 🔧 Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/Eduardoss45/painel-google-api.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Coloque o arquivo `credentials.json` em `data/` (você obtém isso no [Google Cloud Console](https://console.cloud.google.com/apis/credentials)).

4. (Opcional) Configure um `.env` com variáveis que quiser usar no futuro.

5. Inicie o servidor:

   ```bash
   npm run test
   ```

6. Acesse no navegador:

   ```
   http://localhost:3000/auth
   ```

## 🔐 Segurança

- Tokens de autenticação são armazenados localmente em `data/token.json`.
- Nunca compartilhe `credentials.json`, `token.json` ou `.env` publicamente.

## 📝 Licença

Este projeto é de uso privado e foi desenvolvido para fins de estudo ou integração interna. Entre em contato para outras permissões.

