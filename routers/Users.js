const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/users', (req, res) => {
  const users = [
    { id: 1, nome: 'Usuário 1', email: 'usuario1@example.com' },
    { id: 2, nome: 'Usuário 2', email: 'usuario2@example.com' },
  ];
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = { id: userId, nome: 'Usuário', email: `usuario${userId}@example.com` };
  res.json(user);
});

router.post('/users', (req, res) => {
  const newUser = req.body;
  res.json(newUser);
});

router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json(updatedUser);
});

router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: 'Usuário excluído com sucesso.' });
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
