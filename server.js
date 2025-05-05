const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let trips = [];

app.get('/api/trips', (req, res) => {
    res.json(trips);
});

app.post('/api/trips', (req, res) => {
    trips.push(req.body);
    res.status(201).json({ message: 'Trip added successfully' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
