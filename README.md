# 🎸 API Loja de Instrumentos Musicais

API RESTful desenvolvida com Node.js e Express para gerenciamento de uma loja de instrumentos musicais, permitindo o controle de produtos, clientes e pedidos.

## 📋 Índice

- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Endpoints da API](#endpoints-da-api)
- [Exemplos de Requisições](#exemplos-de-requisições)

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **CORS** - Middleware para habilitar CORS
- **Nodemon** - Ferramenta para desenvolvimento (reinicialização automática)

## 📦 Instalação

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone ou baixe o projeto**
```bash
# Se estiver usando git
git clone <url-do-repositorio>

# Ou simplesmente extraia os arquivos do projeto
```

2. **Navegue até o diretório do projeto**
```bash
cd nome-do-projeto
```

3. **Instale as dependências**
```bash
npm install
```

4. **Inicie o servidor**

Para desenvolvimento (com auto-reload):
```bash
npm run dev
```

Para produção:
```bash
npm start
```

5. **Verifique se está funcionando**

Abra seu navegador e acesse: `http://localhost:3000`

Você deverá ver a mensagem de boas-vindas da API.

## 📁 Estrutura do Projeto

```
projeto/
├── src/
│   ├── controllers/
│   │   ├── clienteController.js    # Lógica de clientes
│   │   ├── pedidoController.js     # Lógica de pedidos
│   │   └── produtoController.js    # Lógica de produtos
│   ├── models/
│   │   └── data.js                 # Dados em memória
│   ├── routes/
│   │   ├── clienteRoutes.js        # Rotas de clientes
│   │   ├── pedidoRoutes.js         # Rotas de pedidos
│   │   └── produtoRoutes.js        # Rotas de produtos
│   └── server.js                   # Arquivo principal
├── package.json
└── package-lock.json
```

## 🎯 Como Usar

### Porta do Servidor

Por padrão, o servidor roda na porta `3000`. Para mudar a porta, defina a variável de ambiente `PORT`:

```bash
PORT=4000 npm start
```

### Testando a API

Você pode testar a API usando:
- **Postman** - Aplicativo desktop/web
- **Insomnia** - Aplicativo desktop
- **Thunder Client** - Extensão do VS Code
- **curl** - Linha de comando

## 📚 Endpoints da API

### Base URL
```
http://localhost:3000/api
```

### 🎹 Produtos (Instrumentos)

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/produtos` | Lista todos os produtos |
| GET | `/produtos/:id` | Busca um produto por ID |
| POST | `/produtos` | Cria um novo produto |
| PUT | `/produtos/:id` | Atualiza um produto |
| DELETE | `/produtos/:id` | Remove um produto |

### 👤 Clientes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/clientes` | Lista todos os clientes |
| GET | `/clientes/:id` | Busca um cliente por ID |
| POST | `/clientes` | Cria um novo cliente |
| PUT | `/clientes/:id` | Atualiza um cliente |
| DELETE | `/clientes/:id` | Remove um cliente |

### 🛒 Pedidos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/pedidos` | Lista todos os pedidos |
| GET | `/pedidos/:id` | Busca um pedido por ID |
| POST | `/pedidos` | Cria um novo pedido |
| PUT | `/pedidos/:id` | Atualiza status do pedido |
| DELETE | `/pedidos/:id` | Cancela um pedido |

## 💡 Exemplos de Requisições

### 1. Listar todos os produtos

**Requisição:**
```http
GET http://localhost:3000/api/produtos
```

**Resposta:**
```json
{
  "sucesso": true,
  "quantidade": 3,
  "dados": [
    {
      "id": 1,
      "nome": "Violão Clássico",
      "categoria": "Cordas",
      "preco": 450.00,
      "descricao": "Violão clássico acústico para iniciantes",
      "estoque": 12
    }
  ]
}
```

### 2. Criar um novo produto

**Requisição:**
```http
POST http://localhost:3000/api/produtos
Content-Type: application/json

{
  "nome": "Guitarra Elétrica Fender",
  "categoria": "Cordas",
  "preco": 2500.00,
  "descricao": "Guitarra elétrica profissional",
  "estoque": 5
}
```

**Resposta:**
```json
{
  "sucesso": true,
  "mensagem": "Produto criado com sucesso",
  "dados": {
    "id": 4,
    "nome": "Guitarra Elétrica Fender",
    "categoria": "Cordas",
    "preco": 2500.00,
    "descricao": "Guitarra elétrica profissional",
    "estoque": 5
  }
}
```

### 3. Criar um novo cliente

**Requisição:**
```http
POST http://localhost:3000/api/clientes
Content-Type: application/json

{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "telefone": "(11) 99999-8888"
}
```

**Resposta:**
```json
{
  "sucesso": true,
  "mensagem": "Cliente criado com sucesso",
  "dados": {
    "id": 3,
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "telefone": "(11) 99999-8888",
    "dataCadastro": "2024-11-25"
  }
}
```

### 4. Criar um novo pedido

**Requisição:**
```http
POST http://localhost:3000/api/pedidos
Content-Type: application/json

{
  "clienteId": 1,
  "itens": [
    {
      "produtoId": 1,
      "quantidade": 2
    },
    {
      "produtoId": 2,
      "quantidade": 1
    }
  ]
}
```

**Resposta:**
```json
{
  "sucesso": true,
  "mensagem": "Pedido criado com sucesso",
  "dados": {
    "id": 2,
    "clienteId": 1,
    "itens": [
      {
        "produtoId": 1,
        "quantidade": 2,
        "precoUnitario": 450.00
      },
      {
        "produtoId": 2,
        "quantidade": 1,
        "precoUnitario": 1200.00
      }
    ],
    "valorTotal": 2100.00,
    "status": "pendente",
    "data": "2024-11-25T14:30:00.000Z"
  }
}
```

### 5. Atualizar um produto

**Requisição:**
```http
PUT http://localhost:3000/api/produtos/1
Content-Type: application/json

{
  "preco": 480.00,
  "estoque": 15
}
```

### 6. Atualizar status de um pedido

**Requisição:**
```http
PUT http://localhost:3000/api/pedidos/1
Content-Type: application/json

{
  "status": "enviado"
}
```

### 7. Deletar um cliente

**Requisição:**
```http
DELETE http://localhost:3000/api/clientes/2
```

**Resposta:**
```json
{
  "sucesso": true,
  "mensagem": "Cliente removido com sucesso",
  "dados": {
    "id": 2,
    "nome": "Ana Ribeiro",
    "email": "ana@email.com",
    "telefone": "(11) 98123-9988",
    "dataCadastro": "2024-03-22"
  }
}
```

## ⚠️ Observações Importantes

1. **Dados em Memória**: Esta API armazena dados em memória. Ao reiniciar o servidor, todos os dados retornam ao estado inicial.

2. **Validações**: A API possui validações básicas:
   - Produtos: nome, categoria e preço são obrigatórios
   - Clientes: nome e email são obrigatórios
   - Pedidos: clienteId e itens são obrigatórios

3. **Status de Pedidos**: Os possíveis status são: `pendente`, `processando`, `enviado`, `entregue`, `cancelado`

4. **CORS**: A API está configurada para aceitar requisições de qualquer origem (útil para desenvolvimento)

## 🛠️ Desenvolvimento

### Modificar a Porta

Edite o arquivo `src/server.js` ou use variável de ambiente:
```javascript
const PORT = process.env.PORT || 3000;
```

### Adicionar Novos Dados Iniciais

Edite o arquivo `src/models/data.js` para adicionar produtos, clientes ou pedidos iniciais.

## 📝 Licença

ISC

## Link Youtube
https://youtu.be/4Zr-FxQ91Bo

## 👨‍💻 Autor
Letícia Aragão Cerial

---
