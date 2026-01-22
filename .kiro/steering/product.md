# Product Overview

## Internal Admin Tool

This is an internal administration system for managing company data with strict role-based access control.

**Primary Users:**

- **Admins** (internal staff) - full system access
- **Users** (internal staff) - limited access to own data

**Important Note:** Both Admins and Users are internal staff members who authenticate to the system. Customers are data-only entities representing business clients - they do not authenticate or use the system directly.

**Core Purpose:**

- Centralize internal operations
- Enforce strict access control
- Manage customers, projects, and users
- Provide secure authentication and authorization

**Key Characteristics:**

- Internal-facing only (not public)
- Single-tenant architecture
- Security-focused with JWT Bearer token authentication
- PostgreSQL-backed data persistence
- Role-based permissions (ADMIN vs USER)

**Domain Models:**

- **Users** - internal staff with roles (USER/ADMIN) who authenticate to the system
- **Customers** - business client data (no authentication, managed by internal staff)
- **Projects** - work items linking customers and user owners

**Access Control Rules:**

- Only internal staff (Users/Admins) can authenticate to the system
- Only admins can manage users and customers
- Users can only see their own projects
- Admins have full system access
- Customers are data-only entities managed by internal staff

**What This Is NOT:**

- Public-facing application
- Multi-tenant SaaS platform
- Fancy UI product
- Customer-facing system
