import express from 'express'
import {
    createRoom,
    getRooms,
    updateRoom,
    getRoomByID,
    deleteRoom
} from '../controllers/roomController.js';

const router = express.Router();

// CREATE
router.post('/create-room', createRoom)
    //     // GET All
router.get('/', getRooms)
    //     // GET BY ID
router.get('/:id', getRoomByID)
    //     // UPDATE
router.put('/update-room/:id', updateRoom)
    //     // DELETE
router.delete('/delete/:id', deleteRoom)

export default router