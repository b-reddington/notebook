// Required Libraries
const express = require('express');
const path = require('path');
const fs = require('fs');

// Potential use of uuid (to be determined later)
const uuid = require('./helpers/uuid');


// PORT
const PORT = process.env.PORT || 3001;


// App instance of express
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));

});

// GET request for notes
app.get('/api/notes', (req, res) => {
    // Read the contents of the db.json file
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, './db/db.json')));
    console.log(notes);
    // Send the notes as a JSON response
    res.json(notes);
    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
});

app.post('/api/notes', (req, res) => {
    // Destructure the request body
    const {noteTitle, noteText } = req.body;
    // This will create a new note
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
