import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get('/phonebook', async (req, res) => {
  try {
    const users = await prisma.phonebook.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
});
