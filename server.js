const express = require('express'); //dependencey package
const path = require('path'); //dependency package

const app = express();

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'user_login',
    user: 'root',
    password: '**',
});

module.exports = connection;

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/HomePage.html'));
});


//app.listen(6)


//if you cant terminal to print out ssomething when its connected
app.listen(7, function () {
    console.log('App listening on port 7');
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Database connected!");
    })
});




// var connection = mysql.createConnection({
//     host: 'localhost',
//     database: '',
//     user: 'root',
//     password: 'AudreyKacur',
// })


// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mydb", function (err, result) {
//         if (err) throw err;
//         console.log("Database created");
//     });
// });



//

//GOALS: serve web pages
    //- home page in homepage.html