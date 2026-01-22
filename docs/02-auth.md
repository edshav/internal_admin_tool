# Authentication & Authorization Rules

## Auth strategy (locked)

- Email + password
- JWT:
  - Access token (short-lived)
  - Refresh token (longer-lived)
- Tokens stored in HTTP-only cookies

**This is interview gold.**

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

This gives us:

- Guards
- Decorators
- Real authorization logic
