import { Schema } from "mongoose";
import User from './user';
import Post from './post';

var event = new Schema({
    title: String,
    description: String,
    usersInterested: [User],
    date: Date,
    comments: [Post],
    locationName: String,
    locationAddress: String
})

module.expots = event;