const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug'); //pug and express-handlebars are template engines 
app.set('views', 'views'); //Set the views directory to 'views' folder

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));

//Serving static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

//Handling 404 errors OF A MIDDLEWARE
app.use((req, res, next) => {
    res.status(404).render('404'); //rendering 404 page
});

app.listen(3000);
