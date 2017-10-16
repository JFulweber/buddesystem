import {Schema} from 'mongoose';

let Login = new Schema({
    username: String,
    password: String,
    email: String,
    joined: {
        type: Date, default: Date.now()
    }
});