const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter');

const PORT = process.env.PORT || 3030

//Middleware
app.use(express.static('public')); // Recursos estaticos

app.listen(PORT,() => console.log("Server listening on port  " + PORT));

//Rutas
app.use('/',mainRouter);