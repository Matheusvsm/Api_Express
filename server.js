const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');


const app = express();

app.use(bodyParser.json());
const upload = multer({ dest: 'uploads/' });

app.get('/api/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const usuario = {
    id: id,
    nome: 'Usuário',
    foto: 'caminho-da-foto.jpg'
  };
  res.json(usuario);
});

app.post('/api/usuarios/:id/foto', upload.single('foto'), (req, res) => {
    const id = req.params.id;
    const foto = req.file;
    res.json({ message: 'Foto de perfil atualizada com sucesso.' });
  });

  const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});
