const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter');
const path = require('path');

const PORT = process.env.PORT || 3030

//Middleware
app.use(express.static('public')); // Recursos estaticos

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine','ejs');

app.listen(PORT,() => console.log("Server listening on port  " + PORT));

//Rutas
app.use('/',mainRouter);