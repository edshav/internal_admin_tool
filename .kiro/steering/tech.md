# Technology Stack & Build System

## Core Technologies

**Backend Framework:** NestJS v11 (Node.js/TypeScript)
**Database:** PostgreSQL with Prisma ORM v7
**Authentication:** JWT with Passport.js
**Package Manager:** pnpm
**Runtime:** Node.js with ES2023 target

## Key Dependencies

**Production:**

- `@nestjs/core` - Core NestJS framework
- `@nestjs/passport` - Authentication middleware
- `@prisma/client` - Database ORM client
- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT token handling
- `passport-jwt` - JWT authentication strategy
- `pg` - PostgreSQL driver

**Development:**

- `typescript` - TypeScript compiler
- `jest` - Testing framework
- `eslint` - Code linting
- `prettier` - Code formatting
- `@nestjs/testing` - NestJS testing utilities

## Database Configuration

**Prisma Setup:**

- Schema: `prisma/schema.prisma`
- Generated client: `generated/prisma/`
- Migrations: `prisma/migrations/`
- Uses PostgreSQL adapter with connection pooling

## Common Commands

### Development

```bash
# Install dependencies
pnpm install

# Start development server (watch mode)
pnpm run start:dev

# Start with debugging
pnpm run start:debug

# Build for production
pnpm run build

# Start production server
pnpm run start:prod
```

### Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Reset database
npx prisma migrate reset

# Seed database
npx prisma db seed
```

### Testing

```bash
# Run unit tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run e2e tests
pnpm run test:e2e

# Generate coverage report
pnpm run test:cov
```

### Code Quality

```bash
# Lint code
pnpm run lint

# Format code
pnpm run format
```

## TypeScript Configuration

**Module System:** NodeNext with ES modules
**Target:** ES2023
**Strict Mode:** Enabled with null checks
**Decorators:** Experimental decorators enabled for NestJS
**Path Mapping:** Base URL resolution from project root

## Code Style

**ESLint:** TypeScript recommended + Prettier integration
**Prettier:** Single quotes, trailing commas
**File Naming:** kebab-case for files, PascalCase for classes
**Import Style:** Relative imports within modules, absolute from src root
