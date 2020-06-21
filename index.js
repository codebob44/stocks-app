const express = require('express')
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');


const PORT = process.env.PORT || 5000;

// Set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// variables to pass into templates... strings, arrays, objects, functions
const otherStuff = "hello there this is other stuff";

// set handlebar routes 
app.get('/', function (req, res) {
    res.render('home', {
      stuff: otherStuff
    });
});

// Set static folder to define the path of public directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});