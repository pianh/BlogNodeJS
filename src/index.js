const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs  = require('express-handlebars');


const app = express()
const port = 3000

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// XMLHttpRequest, fetch, axios, 
// app.use(morgan('combined'));

//Teamplate engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(__dirname)
// console.log('PATH: ', path.join(__dirname, 'resources/views') )

// Route init
route(app);




// 127.0.0.1 -localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})