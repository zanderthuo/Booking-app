import Room from "../models/Room.js";

// Create a new Room
export const createRoom = async(req, res, next) => {
        // initialize the new Room variable
        const newRoom = new Room(req.body)
        try {
            // save new hotel in db
            const savedRoom = newRoom.save()
                // if saved successfully status code is 200
            res.status(200).json(savedRoom)
            console.log(savedRoom)
        } catch (err) {
            // if any error return status code 500
            next(err)
        }
    }
    // Update a room
export const updateRoom = async(req, res, next) => {
        try {
            // update room in db
            const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
                // if updated successfully status code is 200
            res.status(200).json(updatedRoom)
            console.log(updatedRoom)
        } catch (err) {
            // return an error message
            next(err)
        }
    }
    // Update room availability
    // Delete a Room
export const deleteRoom = async(req, res, next) => {
        try {
            // delete hotel in db
            await Room.findByIdAndDelete(req.params.id)
                // if deleted successfully return status code is 200
            res.status(200).json("Room has been deleted successfully")
        } catch (err) {
            // if any error return status code 500
            res.status(500).json(err)
        }
    }
    //Get One room
export const getRoomByID = async(req, res, next) => {
        try {
            const room = await Room.findById(req.params.id);
            // if query successfully send status code is 200
            res.status(200).json(room);
        } catch (err) {
            // if any error return send status code 500
            res.status(500).json(err)
        }
    }
    // Get all rooms
export const getRooms = async(req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};