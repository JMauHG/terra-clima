import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { email: 'admin@example.com', password: 'pass1' },
      { email: 'user@example.com', password: 'pass2' },
    ],
  });

  console.log('Seed data inserted!');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());