const express = require('express'); //dependencey package
const path = require('path'); //dependency package

const app = express();
app.use('/static', express.static('public'))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/HomePage.html'));
});

app.listen(5)

//GOALS: serve web pages
    //- home page in homepage.html