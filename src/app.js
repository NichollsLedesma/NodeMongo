const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const theRoutes = require('./routes/index');

// config
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs' );

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/', theRoutes);


app.listen(app.get('port'), ()=>{
    console.log( 'Escuchando en el puerto: ' + app.get('port') );
    
});