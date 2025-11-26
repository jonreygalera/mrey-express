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

```
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







