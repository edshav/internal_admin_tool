# Project Structure & Architecture

## Directory Organization

```
src/
├── auth/                 # Authentication module
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── jwt.strategy.ts
│   ├── jwt.guard.ts
│   └── current_user.decorator.ts
├── project/              # Project management module
│   ├── project.controller.ts
│   ├── project.service.ts
│   └── project.module.ts
├── common/               # Shared utilities
│   └── types/
│       └── user-context.ts
├── app.module.ts         # Root application module
├── prisma.module.ts      # Database module
├── prisma.service.ts     # Database service
└── main.ts              # Application entry point

prisma/
├── schema.prisma         # Database schema
├── migrations/           # Database migrations
└── seed.ts              # Database seeding

docs/                     # Project documentation
├── 00_overview.md        # Product definition
├── 01_domain.md          # Domain models
├── 02_auth.md           # Authentication rules
└── 03_api.md            # API design

test/                     # E2E tests
generated/prisma/         # Generated Prisma client
```

## Architecture Patterns

### Module Structure

- **Feature-based modules** (auth, project)
- **Shared modules** (prisma, common)
- **Dependency injection** via NestJS decorators
- **Module imports** for cross-feature dependencies

### File Naming Conventions

- **Controllers:** `*.controller.ts`
- **Services:** `*.service.ts`
- **Modules:** `*.module.ts`
- **Tests:** `*.spec.ts` (unit), `*.e2e-spec.ts` (e2e)
- **Types:** `*.ts` in common/types/

### Database Layer

- **Single PrismaService** for all database operations
- **Generated client** in separate directory
- **Schema-first** approach with Prisma
- **Migration-based** database versioning

### Authentication Architecture

- **JWT Strategy** with Passport.js
- **Guards** for route protection
- **Decorators** for user context injection
- **Role-based** access control (ADMIN/USER)

## API Design Patterns

### REST Endpoints

```
POST /auth/register       # Admin only
POST /auth/login         # Public
POST /auth/refresh       # Authenticated
POST /auth/logout        # Authenticated
GET  /auth/me           # Authenticated

GET  /users             # Admin only
POST /users             # Admin only
GET  /users/:id         # Admin only
PATCH /users/:id        # Admin only

GET  /customers         # Admin only
POST /customers         # Admin only
PATCH /customers/:id    # Admin only

GET  /projects          # Role-based filtering
POST /projects          # Authenticated
PATCH /projects/:id     # Owner or admin
```

### Response Patterns

- **Consistent error handling** via NestJS exception filters
- **DTO validation** using class-validator
- **Serialization** via Prisma select/include
- **Role-based filtering** in service layer

## Testing Structure

### Unit Tests

- **Co-located** with source files (`*.spec.ts`)
- **NestJS testing module** for dependency injection
- **Mocked dependencies** for isolated testing
- **Jest** as test runner

### E2E Tests

- **Separate test directory** (`test/`)
- **Full application context** testing
- **Database integration** testing
- **Supertest** for HTTP testing

## Development Guidelines

### Code Organization

- **One class per file** with matching filename
- **Barrel exports** from module index files
- **Absolute imports** from src root
- **Type definitions** in common/types

### Error Handling

- **NestJS exceptions** for HTTP errors
- **Validation pipes** for input validation
- **Global exception filters** for consistent responses
- **Environment-specific** error details

### Security Patterns

- **JWT tokens** in HTTP-only cookies
- **Password hashing** with bcrypt
- **Role-based guards** on protected routes
- **Input validation** on all endpoints
