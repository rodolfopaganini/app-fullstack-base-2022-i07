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

app.get('/devices/', function(req, res, next) {
    devices = [
        { 
            'id': 1, 
            'name': 'Main lamp - living room', 
            'description': 'Main lamp of the living room', 
            'state': 0, 
            'type': 1, 
        },
        { 
            'id': 2, 
            'name': 'Fan - living room', 
            'description': 'Roof fan of the livinf room', 
            'state': 1, 
            'type': 2, 
        },
        { 
            'id': 3, 
            'name': 'Main lamp - bedroom', 
            'description': 'Main lamp of the bedroom', 
            'state': 0, 
            'type': 1, 
        },
    ]
    res.send(JSON.stringify(devices)).status(200);
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
