import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js'
import hotelRouter from './routes/hotel.js'
import roomRouter from './routes/room.js'
import userRouter from './routes/user.js'
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config()

// connection to mongodb
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to mongo db')
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected')
})

mongoose.connection.on('connected', () => {
    console.log('mongoDB connected')
})

const port = process.env.PORT;

// MIDDLEWARE
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRouter);
app.use('/api/hotel', hotelRouter);
app.use('/api/room', roomRouter);
app.use('/api/user', userRouter);

// MIDDLEWARE FOR HANDLING ERRORS
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(port, () => {
    connect();
    console.log(`Connected to backend server on port number ${port}`);
})