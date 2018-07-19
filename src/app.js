const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routesTasks = require('./routes/tasks');

// Connections
mongoose.connect('mongodb://localhost/test')
        .then(db=> console.log('DB Connected') )
        .catch(err=> console.log('Fallo a conectar la base de datos', err) );

// config
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs' );

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

// routes
app.use('/', routesTasks);


app.listen(app.get('port'), ()=>{
    console.log( 'Escuchando en el puerto: ' + app.get('port') );
    
});