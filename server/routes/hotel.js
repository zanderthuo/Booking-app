import express from 'express'
import Hotel from '../models/Hotel.js'

const router = express.Router();

// CREATE
router.post('/create-hotel', async(req, res) => {
        // initialize the new hotel variable
        const newHotel = new Hotel(req.body)
        try {
            // save new hotel in db
            const savedHotel = newHotel.save()
                // if saved successfully status code is 200
            res.status(200).json(savedHotel)
            console.log(savedHotel)
        } catch (err) {
            // if any error return status code 500
            res.status(500).json(err)
        }
    })
    // GET All
router.get('/', async(req, res) => {
        try {
            const hotel = await Hotel.find(req.params.id);
            // if query successfully send status code is 200
            res.status(200).json(hotel);
        } catch (err) {
            // if any error return send status code 500
            res.status(500).json(err)
        }
    })
    // GET BY ID
router.get('/:id', async(req, res) => {
        try {
            const hotels = await Hotel.findById(req.params.id);
            // if query successfully send status code is 200
            res.status(200).json(hotels);
        } catch (err) {
            // if any error return send status code 500
            res.status(500).json(err)
        }
    })
    // UPDATE
router.put('/update-hotel/:id', async(req, res) => {
    try {
        // update hotel in db
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            // if updated successfully status code is 200
        res.status(200).json(updatedHotel)
        console.log(updatedHotel)
    } catch (err) {
        // if any error return status code 500
        res.status(500).json(err)
    }
})

// DELETE

router.delete('/delete/:id', async(req, res) => {
    try {
        // delete hotel in db
        await Hotel.findByIdAndDelete(req.params.id)
            // if deleted successfully return status code is 200
        res.status(200).json("Hotel has been deleted successfully")
    } catch (err) {
        // if any error return status code 500
        res.status(500).json(err)
    }
})

// router.get('/', (req, res) => {
//     res.send('This is Hotels Router')
// })

// router.get('/register', (req, res) => {
//     res.send('This is the Hotel Register endpoint')
// })

export default router