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

app.post('/phonebook', async (req, res) => {
  try {
    const { name, number } = req.body;
    const result = await prisma.phonebook.create({
      data: {
        name,
        number,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong. Your new record did not save.',
    });
  }
});

app.put('/phonebook/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, number } = req.body;
    const result = await prisma.phonebook.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        number,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong. Record ${id} was not updated.`,
    });
  }
});

app.delete('/phonebook/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.phonebook.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong. Record ${id} was not deleted.`,
    });
  }
});
