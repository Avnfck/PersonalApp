import express from 'express'
const router = new express.Router()

router.get('/', async (req, res) => {
    await res.render('index', {
        name: 'Arkadiusz Letowski',
        active: {profile: true}
    });
});

router.get('/exp', (req, res) => {
    res.render('exp', {
        name: 'Arkadiusz Letowski',
        active: {exp: true}
    });
});

router.get('/stack', (req, res) => {
    res.render('stack', {
        name: 'Arkadiusz Letowski',
        active: {stack: true}
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        name: 'Arkadiusz Letowski',
        active: {contact: true}
    });
});

export default router;