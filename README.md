# 🚀 MREY Express

A modern, production-ready Express.js with TypeScript, MongoDB integration, and robust configuration management.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## ✨ Features

- **TypeScript First** - Full TypeScript support with proper type definitions
- **MongoDB Integration** - Mongoose ODM with custom database drivers
- **Modular Architecture** - Clean separation of concerns with models, controllers, and routes
- **Security Ready** - CORS configuration, rate limiting, and environment variable management
- **Production Ready** - Built-in configuration for different environments
- **Scalable Structure** - Easy to extend and maintain

## Project Structure
```bash
mrey-express/
├── src/
│   ├── app/
│   │   ├── middleware/
│   │   │   ├── api.middleware.ts
│   │   │   └── rateLimiter.middleware.ts
│   │   └── providers/
│   │       ├── globalMiddleware.provider.ts
│   │       └── register.provider.ts
│   ├── core/
│   │   ├── database/
│   │   │   ├── database.connection.ts
│   │   │   ├── drivers/
│   │   │   │   └── mongoose.driver.ts
│   │   │   └── types/
│   │   │       └── database.type.ts
│   │   ├── database.core.ts
│   │   └── providers/
│   │       └── system.provider.ts
│   ├── middleware/
│   │   └── middleware.ts
│   ├── utils/
│   │   └── appMiddleware.ts
│   ├── kernel.ts
│   ├── types/
│   │   └── appKernel.type.ts
│   ├── config/
│   │   ├── app.config.ts
│   │   ├── cors.config.ts
│   │   ├── database.config.ts
│   │   ├── index.ts
│   │   ├── rateLimiter.config.ts
│   │   └── session.config.ts
│   └── utils/
│       └── env.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

### File Roles and Guidelines

Below is a simple description of what each file or directory is responsible for:

#### `/src`
- Contains all source code (TypeScript).

#### `/src/app/middleware/`
- `api.middleware.ts` — Middleware functions for handling API-specific logic.
- `rateLimiter.middleware.ts` — Middleware for rate limiting incoming requests.

#### `/src/app/providers/`
- `globalMiddleware.provider.ts` — Registers global middleware for the application.
- `register.provider.ts` — Helps register service providers for dependency injection or app configuration.

#### `/src/core/database/`
- `database.connection.ts` — Handles setup and connection to the database.
- `drivers/mongoose.driver.ts` — Mongoose ODM integration for MongoDB.
- `types/database.type.ts` — TypeScript types/interfaces for database entities and config.

#### `/src/core/`
- `database.core.ts` — Core database logic and abstractions.
- `providers/system.provider.ts` — System level service providers registration.

#### `/src/middleware/`
- `middleware.ts` — Application-wide middleware definitions.

#### `/src/utils/`
- `appMiddleware.ts` — Utility/helper functions for middleware.

#### `/src/kernel.ts`
- Main application kernel; handles server initialization, routing, and bootstrapping.

#### `/src/types/`
- `appKernel.type.ts` — TypeScript types and interfaces for the app kernel.

#### `/src/config/`
- Configuration files for all major services and environment handling:
  - `app.config.ts` — App-wide configuration values.
  - `cors.config.ts` — CORS-related configuration.
  - `database.config.ts` — Database setup/config values.
  - `index.ts` — Export hub for configs.
  - `rateLimiter.config.ts` — Configurations for request rate limiting.
  - `session.config.ts` — Session/authorization configuration.

#### `/src/utils/env.ts`
- Loads and manages environment variables.

#### `.env`
- Stores environment variables for local development.

#### `package.json`
- Project dependencies and scripts.

#### `tsconfig.json`
- TypeScript compiler options and configurations.

#### `README.md`
- Project documentation and guidelines.




