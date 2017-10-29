import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import Group from './group';

var User = new Schema({
    username: !String,
    email: !String,
    joined: String,
    interests: [String],
    friends: [[this]]
});

module.exports = User;