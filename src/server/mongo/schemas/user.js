import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import Group from './group';

var User = new Schema({
    username: String,
    email: String,
    joined: {
        type: Date, default: Date.now()
    },
    interests: [String],
    groups: [Group],
    friends: [[this]]
});

module.exports = User;