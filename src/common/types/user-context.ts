import { Role } from 'generated/prisma/client';

export type UserContext = {
  id: number;
  role: Role;
};
