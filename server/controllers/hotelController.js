import Hotel from '../models/Hotel.js'

// Create a new Hotel
export const createHotel = async(req, res, next) => {
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
        next(err)
    }
}

// Get All Hotels
export const getAllHotels = async(req, res, next) => {
    try {
        // const hotel = await Hotel.find(req.params.id);
        const hotels = await Hotel.find();
        // if query successfully send status code is 200
        res.status(200).json(hotels);
    } catch (err) {
        // if any error return send status code 500
        next(err)
    }
}


// Get Hotel By ID
export const getHotelByID = async(req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        // if query successfully send status code is 200
        res.status(200).json(hotel);
    } catch (err) {
        // if any error return send status code 500
        res.status(500).json(err)
    }
}


//Update Hotel By ID
export const updateHotel = async(req, res, next) => {
    try {
        // update hotel in db
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            // if updated successfully status code is 200
        res.status(200).json(updatedHotel)
        console.log(updatedHotel)
    } catch (err) {
        // return an error message
        next(err)
    }
}

// Delete A hotel
export const deleteHotel = async(req, res, next) => {
    try {
        // delete hotel in db
        await Hotel.findByIdAndDelete(req.params.id)
            // if deleted successfully return status code is 200
        res.status(200).json("Hotel has been deleted successfully")
    } catch (err) {
        // if any error return status code 500
        res.status(500).json(err)
    }
}