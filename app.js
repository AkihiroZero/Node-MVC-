const router = require('./routes/routes')
const express = require('express');
const ejs = require('ejs');
const expressEjsLayouts = require('express-ejs-layouts');
const port = 5000;

const app = express();
app.use(expressEjsLayouts)
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.set('layout', './layouts/layout')
app.set('view engine','ejs');
app.use('/',router);


app.listen(port,()=> console.log(`Server running on http://localhost:${port}`));