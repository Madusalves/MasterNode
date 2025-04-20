const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');

const app = express();

// Configurando o Handlebars
app.engine('hbs', engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs',
    partialsDir: 'views/'
}));

app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Middleware para processar o corpo da requisição
app.use(bodyParser.urlencoded({ extended: false }));

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// Tratamento de erros 404
app.use((req, res, next) => {
    res.status(404).render('404', { 
        pageTitle: 'Page Not Found',
        path: '/404'
    });
});

app.listen(3000);