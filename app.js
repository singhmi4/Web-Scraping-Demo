const express = require('express');
const path = require('path');

// Init App
const app = express();

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


let scrape = require('./scrape.js');
let siteStatusJSON = scrape.siteStatusJSON;

app.get('/', (req, res) => {
    // Scrape JSON Array
    scrape = require('./scrape.js');
    siteStatusJSON = scrape.siteStatusJSON;
    console.log('Scraping Website...')
    // console.log(siteStatusJSON);
    res.render('index', {
        siteStatusJSON: siteStatusJSON
    });
})

// Refresh page after button was clicked
app.post('/clicked', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Server starting on port 3000....`);
})

