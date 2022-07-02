import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import { createError } from '../utils/error.js'


// TODO: USE JWT WITH COOKIE IN THE PROJECT

// Register a new user
export const registerController = async(req, res, next) => {
    try {
        // hashing our users password using bcrypt
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // initialize new user details
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        // save the new user
        await newUser.save()
            // if saved successfully return status code 201
        res.status(201).send('User has been created successfully')
    } catch (err) {
        next(err);
    }
};


// Login user

export const loginController = async(req, res, next) => {
    try {
        // check for use in db and if no user throw an error
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, 'User not found'));

        // compare the credentials on db with the one entered
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) return next(createError(404, 'Password incorrect'));

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.status(201).json({...otherDetails })
    } catch (err) {
        next(err);
    }
};