require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Setup');
})

app.get('/favicon.ico', (req, res) => res.status(204));

const chatRoutes = require('./routes/chat');
app.use('/chat', chatRoutes);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));