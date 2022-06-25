import express from 'express';
import dbo from './db/conn.js';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import viewRoutes from './routers/views.js';
import dataRoutes from './routers/data.js';

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
app.use(express.json());
app.use('/public', express.static('./public'))
app.use(dataRoutes)
app.use(viewRoutes)

dbo.connectToServer((err) => {
    if (err) {
        console.error(err);
        process.exit();
    }
    app.listen(port, () => {
        console.log(`Server is up on port ${port}`);
    });
});