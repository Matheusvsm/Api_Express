const express = require('express');
const cors = require('cors');
const usersRouter = require('./routers/users');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', usersRouter);

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
