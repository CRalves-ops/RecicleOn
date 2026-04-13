# RecicleON — Guia de Setup do Ambiente

## Pré-requisitos

### 1. Instalar Node.js (via NVM — recomendado para equipes)

```bash
# Instalar o NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Recarregar o terminal
source ~/.bashrc

# Instalar o Node.js LTS
nvm install --lts
nvm use --lts

# Verificar instalação
node -v   # deve exibir v20.x.x ou superior
npm -v
```

---

### 2. Instalar o Expo CLI (para React Native)

```bash
npm install -g expo-cli
```

---

### 3. Instalar o PostgreSQL

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib

# Iniciar o serviço
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Acessar o psql como superusuário
sudo -u postgres psql

# Dentro do psql, criar banco e usuário do projeto
CREATE USER recleon_user WITH PASSWORD 'recileon_pass';
CREATE DATABASE recleon_db OWNER recleon_user;
\q
```

---

### 4. Clonar e configurar o projeto

```bash
# Clonar o repositório (substitua pela URL real do repo)
git clone https://github.com/CRalves-ops/RecicleOn.git
cd RecicleOn
```

---

## Configurar o Back-end

```bash
cd backend
npm install

# Copiar o arquivo de variáveis de ambiente
cp .env.example .env
```

Edite o `.env` com seus dados:

```
PORT=3000
DATABASE_URL=postgresql://recleon_user:recileon_pass@localhost:5432/recleon_db
JWT_SECRET=sua_chave_secreta_aqui
OPENAI_API_KEY=sua_chave_openai_aqui
```

Rodar as migrations do banco:

```bash
npm run migrate
```

Iniciar o servidor:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

---

## Configurar o Front-end

```bash
cd ../frontend
npm install

# Copiar o arquivo de variáveis de ambiente
cp .env.example .env
```

Edite o `.env`:

```
EXPO_PUBLIC_API_URL=http://localhost:3000
```

Iniciar o app:

```bash
npx expo start
```

Use o app **Expo Go** no celular (Android ou iOS) para escanear o QR Code, ou pressione `a` para abrir no emulador Android.

---

## Estrutura do projeto

```
recleon/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Lógica das rotas
│   │   ├── middlewares/     # Auth, validação, erros
│   │   ├── models/          # Modelos do banco (PostgreSQL)
│   │   ├── routes/          # Definição das rotas
│   │   └── server.js        # Ponto de entrada
│   ├── .env.example
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── screens/         # Telas do app
    │   ├── components/      # Componentes reutilizáveis
    │   ├── services/        # Chamadas à API
    │   ├── contexts/        # Context API (auth, etc.)
    │   └── theme/           # Cores, fontes, estilos globais
    ├── App.js
    ├── .env.example
    └── package.json
```

---

## Convenções da equipe

- Branches: `feature/nome-da-feature`, `fix/nome-do-bug`
- Commits em português, descritivos: `feat: adiciona tela de login`
- Nunca commitar o arquivo `.env` (já está no `.gitignore`)
- Pull requests precisam de ao menos 1 aprovação antes do merge