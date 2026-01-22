# Authentication & Authorization Rules

## Auth strategy (v1 — locked)

- Email + password
- JWT-based authentication:
  - **Access token** (short-lived)
  - **Refresh token** (longer-lived)
- Tokens are transmitted via the `Authorization` header using the Bearer scheme

### Why Bearer tokens?

- Frontend and backend are deployed on **different domains**
- Avoids `SameSite=None` cookies and CSRF complexity
- Works for:
  - Browser SPA
  - Mobile clients
  - API consumers

> In a same-site deployment, HTTP-only cookies would be preferred for better XSS protection.  
> This system is designed so cookie-based auth can be added later without changing core logic.

---

## Token handling

### Access token

- Sent on every protected request:

`Authorization: Bearer <access_token>`

- Short-lived
- Used for authorization and identity

### Refresh token

- Also sent via `Authorization` header
- Used only for `/auth/refresh`
- Issues a new access token

---

## CSRF considerations

- CSRF protection is **not required** in v1
- Bearer tokens are not automatically attached by browsers
- No cookie-based authentication is used

---

## Role-based access

| Action            | ADMIN | USER |
| ----------------- | ----- | ---- |
| Login             | ✅    | ✅   |
| Read own profile  | ✅    | ✅   |
| Create users      | ✅    | ❌   |
| List users        | ✅    | ❌   |
| Create customers  | ✅    | ❌   |
| List customers    | ✅    | ❌   |
| Create projects   | ✅    | ✅   |
| List own projects | ✅    | ✅   |
| List all projects | ✅    | ❌   |

---

## Authorization model

- Authentication is handled via JWT validation
- Authorization is enforced via:
- Role-based guards (`ADMIN` vs `USER`)
- Ownership checks (e.g. users can access only their own projects)

This enables:

- Guards
- Custom decorators
- Real-world authorization logic suitable for enterprise applications
