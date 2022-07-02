import express from 'express'
import Hotel from '../models/Hotel.js'
import {
    createHotel,
    getAllHotels,
    getHotelByID,
    updateHotel,
    deleteHotel
} from '../controllers/hotelController.js';

const router = express.Router();

// CREATE
router.post('/create-hotel', createHotel)
    // GET All
router.get('/', getAllHotels)
    // GET BY ID
router.get('/:id', getHotelByID)
    // UPDATE
router.put('/update-hotel/:id', updateHotel)
    // DELETE
router.delete('/delete/:id', deleteHotel)

export default router