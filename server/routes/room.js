import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is Rooms Router')
})

router.get('/register', (req, res) => {
    res.send('This is the Rooms Register endpoint')
})

export default router