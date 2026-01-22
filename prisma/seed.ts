import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/client';
import { Role } from '../generated/prisma/enums';

const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter: pool });

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      passwordHash,
      role: Role.ADMIN,
    },
  });

  console.log('✅ Admin user seeded');

  const admin = await prisma.user.findUnique({
    where: { email: 'admin@example.com' },
  });

  if (!admin) return;

  // Create customer first
  const customer = await prisma.customer.create({
    data: {
      name: 'Acme Corp',
      email: 'contact@acme.com',
    },
  });

  // Then create project with customerId
  await prisma.project.create({
    data: {
      name: 'Internal Admin Tool',
      ownerId: admin.id,
      customerId: customer.id,
    },
  });

  console.log('✅ Admin project seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
