import { Schema } from "mongoose";
import User from './user';
import Post from './post';

let Event = new Schema({
    title: String,
    description: String,
    usersInterested: [User],
    date: Date,
    comments: [Post],
    locationName: String,
    locationAddress: String,
    group_id: Schema.Types.ObjectId
})

module.exports = Event;