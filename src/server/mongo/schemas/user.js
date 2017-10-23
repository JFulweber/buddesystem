import { Schema } from 'mongoose';
import mongoose from 'mongoose';

var User = new Schema({
    username: String,
    email: String,
    joined: {
        type: Date, default: Date.now()
    },
    interests: [String],
    groups: [{type: mongoose.Schema.Types.ObjectId, ref: 'Group'}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

export default require('mongoose').model('User',User);