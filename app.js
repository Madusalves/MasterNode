const path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const { engine } = require('express-handlebars'); // Importing the engine from express-handlebars

const app = express();

// Handlebars
app.engine('hbs', engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs',         // File extension for Handlebars
    partialsDir: 'views/'   // Directory for partials (small reusable templates)
}));

app.set('view engine', 'hbs'); // Setting the view engine to Handlebars
app.set('views', 'views');

const adminData = require('./routes/admin'); // Importing admin routes
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); // Middleware to parse URL-encoded data


app.use(express.static(path.join(__dirname, 'public'))); // Middleware to serve static files from the public directory

app.use('/admin', adminData.routes); // Mounting admin routes under /admin
app.use(shopRoutes); // Mounting shop routes

app.use((req, res, next) => {       // Middleware to handle 404 errors
    res.status(404).render('404', { 
        pageTitle: 'Page Not Found',
        path: '/404'
    });
});

app.listen(3000); 