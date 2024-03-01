const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage for survey data
const surveyData = [];

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Survey HTML file
app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'survey.html'));
});

// Handle survey submission
app.post('/submit-survey', (req, res) => {
    const submittedData = req.body;
    surveyData.push(submittedData); // Store the survey data
    console.log(submittedData);



    res.send('Survey submitted successfully!');
});

// Results HTML file
app.get('/results', (req, res) => {
    // Render the results page and pass the survey data to it
    res.render('results', { surveyData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
