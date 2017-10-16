import { Schema } from 'mongoose';
var User = require('./user');

let Group = new Schema({
    name: String,
    description: String,
    users: {
        type: [User],
    },
    creation: {
        type: Date, default: Date.now()
    },
    posts: {
        type: [Post]
    }
});

let Post = new Schema({
    title: String,
    date: {
        type: Date, default: Date.now()
    },
    author: User,
    text: String,
    likes: {
        type: [User]
    },
    comments: {
        type: [Post]
    }
})