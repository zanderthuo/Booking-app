import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is Users Router')
})

router.get('/register', (req, res) => {
    res.send('This is the User Register endpoint')
})

export default router