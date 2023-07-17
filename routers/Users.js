const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const users = [
    { id: 1, nome: 'Usuário 1', email: 'usuario1@example.com' },
    { id: 2, nome: 'Usuário 2', email: 'usuario2@example.com' },
  ];
  res.json(users);
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  const user = { id: userId, nome: 'Usuário', email: `usuario${userId}@example.com` };
  res.json(user);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  res.json(newUser);
});

router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json(updatedUser);
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: 'Usuário excluído com sucesso.' });
});

module.exports = router;
