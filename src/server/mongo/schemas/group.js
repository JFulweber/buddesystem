import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import Post from './post';
import User from './user';

let Group = new Schema({
    name: String,
    description: String,
    users: [User],
    creation: {
        type: Date, default: Date.now()
    },
    posts: [Post]
});

module.exports = Group;