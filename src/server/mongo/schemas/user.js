import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import Group from './group';

var User = new Schema({
    username: !String,
    email: !String,
    bio: !String,
    joined: String,
    interests: [String],
    groups: [Group],
    friends: [[this]]
});

module.exports = User;