import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());

const expenses = [];

app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/expenses', (req, res) => {
  const { amount, category, note } = req.body;
  if (!amount || !category) return res.status(400).json({ error: 'amount and category required' });
  const expense = { id: Date.now(), amount, category, note, date: new Date() };
  expenses.push(expense);
  res.status(201).json(expense);
});

app.delete('/expenses/:id', (req, res) => {
  const idx = expenses.findIndex(e => e.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  expenses.splice(idx, 1);
  res.status(204).end();
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
