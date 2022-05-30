import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import hbs from 'hbs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDir));


// ROUTES
app.get('/', (req, res) => {
    res.render('index', {
        name: 'Arkadiusz Letowski',
        active: {profile: true}
    });
});

app.get('/exp', (req, res) => {
    res.render('exp', {
        name: 'Arkadiusz Letowski',
        active: {exp: true}
    });
});

app.get('/stack', (req, res) => {
    res.render('stack', {
        name: 'Arkadiusz Letowski',
        active: {stack: true}
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        name: 'Arkadiusz Letowski',
        active: {contact: true}
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});