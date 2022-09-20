
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const hbs = handlebars.create({ defaultLayout:'main', extname: '.hbs' });
const app = express();
const port = 3000;
const path = require('path')
const route = require('./routes')
const db = require('./config/db')

//connect db
db.connect()


app.use(express.urlencoded({extended:true}));
app.use(express.json());


//HTTP Logger
// app.use(morgan('combined'));

//Template Engine
app.engine('hbs', hbs.engine);
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources','views'));

//
app.use(express.static(path.join(__dirname, 'public' )));

//Routes init
route(app);







app.listen(port, ()=> console.log(`listen: ${port}`))
