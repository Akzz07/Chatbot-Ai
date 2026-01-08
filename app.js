const express = require('express');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
