const express = require('express');

const sequelize = require('sequelize');

const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;

const app = express();

//You can use static content from the public directory
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json())

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))

app.set("view engine", "handlebars");

//establish routes here

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});