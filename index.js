const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;
const { engine } = require('express-handlebars');

app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});
//Create a static folder to serve up static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log("Listening..."));