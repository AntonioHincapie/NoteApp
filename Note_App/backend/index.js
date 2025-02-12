const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/db');
const routes = require('./src/routes/noteRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());

db.sync().then(() => {
  console.log('Database connected');
});

app.use('/api/notes', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
