import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"

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

mongoose.connection.on("disconnected", () => {
    console.log('mongoDB disconnected')
})

mongoose.connection.on("connected", () => {
    console.log('mongoDB connected')
})

const port = process.env.PORT;

app.listen(port, () => {
    connect();
    console.log(`Connected to backend server on port number ${port}`);
})