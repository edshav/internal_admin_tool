# API Design (v1)

## Auth

- `POST /auth/register` (admin only)
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `GET /auth/me`

## Users (admin only)

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PATCH /users/:id`

## Customers (admin only)

- `GET /customers`
- `POST /customers`
- `PATCH /customers/:id`

## Projects

- `GET /projects`
- `POST /projects`
- `PATCH /projects/:id`

### Rules:

- `GET /projects`:
  - **Admin** → all
  - **User** → only own

  Note: No soft deletes in v1.
