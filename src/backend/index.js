//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
var app     = express();
var utils   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Main module code ]==================================================

// load devices info form file
const fileName = './devices.json';
var devices = require(fileName);

app.get('/devices/', function(req, res, next) {
    res.json(devices).status(200);
});

app.post('/updateDevice/', function(req, res, next) {
    for (let device of devices) {
        if (device.id == req.query.id) {
            for (let param in req.query) {
                device[param] = req.query[param];
            }
        }
    }
    res.json(devices).status(200);
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
