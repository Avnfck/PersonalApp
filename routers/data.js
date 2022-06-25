import express from 'express';
import dbo from '../db/conn.js'
const router = new express.Router();

router.get('/profile-data', async (req, res) => {
    const dbConnect = dbo.getDb();
    dbConnect
        .collection('Profile')
        .find({}, {
            projection: {
                _id: 0
            }
        }).limit(50)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error fetching listings!')
            } else {
                res.json(result)
            }
        })
})

router.get('/experience-data', async (req, res) => {
    const dbConnect = dbo.getDb();
    dbConnect
        .collection('Experience')
        .find({}, {
            projection: {
                _id: 0
            }
        }).limit(50)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error fetching listings!')
            } else {
                res.json(result)
            }
        })
})

router.get('/stack-data', async (req, res) => {
    const dbConnect = dbo.getDb();
    dbConnect
        .collection('Stack')
        .find({}, {
            projection: {
                _id: 0
            }
        }).limit(50)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error fetching listings!')
            } else {
                res.json(result)
            }
        })
})

router.get('/contact-data', async (req, res) => {
    const dbConnect = dbo.getDb();
    dbConnect
        .collection('Contact')
        .find({}, {
            projection: {
                _id: 0
            }
        }).limit(50)
        .toArray((err, result) => {
            if (err) {
                res.status(400).send('Error fetching listings!')
            } else {
                res.json(result)
            }
        })
})

export default router;