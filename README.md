# NestJS + React Chat App

A full-stack **TypeScript** application built on a modern, production-minded architecture: a **GraphQL** API powered by **NestJS** and **MongoDB**, with a **React + Apollo Client** frontend. Authentication and user management are fully implemented; real-time messaging is the next milestone.

> Built to practice clean, scalable full-stack patterns — code-first GraphQL, a generic repository layer, passport-based auth, structured logging, and database migrations.

---

## ✨ Features

- 🔐 **Authentication** — local strategy via Passport, password hashing with bcrypt, GraphQL-aware guards
- 👤 **User management** — full CRUD exposed through a GraphQL resolver
- 🧩 **Code-first GraphQL** — schema auto-generated from TypeScript (`autoSchemaFile`), Apollo Playground enabled
- 🗄️ **MongoDB** via Mongoose, with a reusable **abstract repository** pattern (`AbstractRepository` / `AbstractEntity`)
- 🚦 **Validation** — request validation with `class-validator` + global `ValidationPipe`; env validation with Joi
- 📝 **Structured logging** — `nestjs-pino` with pretty-printing in dev
- 🔁 **Database migrations** — `migrate-mongo` (e.g. a unique index on user email)
- 🎨 **React frontend** — TypeScript, Apollo Client, Chakra UI + MUI, signup/login flows

## 🏗️ Tech stack

| Layer | Technologies |
|---|---|
| **Backend** | NestJS, GraphQL (Apollo), MongoDB, Mongoose, Passport, bcrypt, Joi, pino |
| **Frontend** | React, TypeScript, Apollo Client, Chakra UI, MUI, React Router |
| **Tooling** | ESLint, Prettier, Jest, migrate-mongo |

## 📁 Structure

```
backend/
  src/
    auth/        # passport local strategy, guards, auth resolver/service
    users/       # entity, dto, repository, resolver, service
    common/
      database/  # abstract repository + entity, migration service
    app.module.ts
frontend/
  src/
    components/  # auth (Login/Signup), routes
    hooks/       # useCreateUser, ...
    constants/   # apollo-client, urls
    models/      # User, AbstractModel
```

## 🚀 Getting started

### Prerequisites
- Node.js 18+
- A MongoDB instance (local or Atlas)

### 1. Backend

```bash
cd backend
npm install

# create backend/.env
cat > .env <<'ENV'
PORT=3000
MONGO_DB_URI=mongodb://localhost:27017/chat-app
NODE_ENV=development
ENV

npm run start:dev
```

GraphQL Playground will be available at `http://localhost:3000/graphql`.

### 2. Frontend

```bash
cd frontend
npm install
# frontend/.env already points REACT_APP_API_URL at http://localhost:3000
npm start
```

The app runs at `http://localhost:3001` (Create React App will offer an alternate port since the API uses 3000).

## 🧪 Tests

```bash
cd backend
npm test          # unit
npm run test:e2e  # end-to-end
```

## 🗺️ Roadmap

- [ ] Message entity + GraphQL mutations/queries
- [ ] Real-time delivery via GraphQL subscriptions
- [ ] Chat rooms / conversations
- [ ] Presence & typing indicators

## 📄 License

[MIT](./LICENSE)
