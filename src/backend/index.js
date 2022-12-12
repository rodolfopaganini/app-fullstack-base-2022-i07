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
            'description': 'Switch the status of the main lamp of the living room', 
            'state': 0, 
            'type': 1, 
        },
        { 
            'id': 6, 
            'name': 'Main lamp - bedroom', 
            'description': 'Switch the status of the main lamp of the bedroom', 
            'state': 0, 
            'type': 1, 
        },
        { 
            'id': 2, 
            'name': 'Voice control', 
            'description': 'Enable voice control', 
            'state': 1, 
            'type': 2, 
        },
        { 
            'id': 3, 
            'name': 'Music - living room', 
            'description': 'Play music in the living room', 
            'state': 0, 
            'type': 3, 
        },
        { 
            'id': 4, 
            'name': 'Air conditioner', 
            'description': 'Switch the status of the air conditioner', 
            'state': 0, 
            'type': 4, 
        },
        { 
            'id': 5, 
            'name': 'Alarm', 
            'description': 'Enable the alarm', 
            'state': 0, 
            'type': 5, 
        },
    ]
    res.send(JSON.stringify(devices)).status(200);
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
