// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const localStorageRoutes = require('./routes/localStorageRoutes');
const sequelize = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use(localStorageRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});
