var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');


var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// configura o middleware express-session
app.use(expressSession({
    secret : 'jUK2IbUG2HGT43FT4fR0DEVBG9cddfED', // segredo para assinar o cookie de sessão
    resave : false, // faz com que a sessão seja regravaga no servidor mesmo não havendo modificação no request
    saveUninitialized : false// cria uma sessão nova sempre que a mesma for modificada
}));

consign()
.include('app/routes')
.then('config/database.js')
.then('config/ini.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;