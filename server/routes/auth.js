import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is Auth Router')
})

router.get('/register', (req, res) => {
    res.send('This is the Auth Register endpoint')
})

export default router