# Core Domain (Entities)

We start with exactly three entities. **No more.**

## 1. User

Represents a person who can log in.

### Fields (v1):

- `id`
- `email (unique)`
- `passwordHash`
- `role` → `ADMIN` | `USER`
- `createdAt`
- `updatedAt`

## 2. Customer

Represents a business client.

### Fields (v1):

- `id`
- `name`
- `email (unique)`
- `status` → `ACTIVE` | `INACTIVE`
- `createdAt`
- `updatedAt`

## 3. Project

Represents work done for a customer.

### Fields (v1):

- `id`
- `name`
- `customerId`
- `ownerId` (User)
- `status` → `ACTIVE` | `ARCHIVED`
- `createdAt`
- `updatedAt`

## Relationships (important)

- A User can own many Projects
- A Customer can have many Projects
- Only Admins can manage Users
- Users can see only their own Projects

This already gives us:

- Relations
- Access rules
- Interview talking points
