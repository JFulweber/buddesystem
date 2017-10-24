import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import Group from './group';

var User = {
    username: String,
    email: String,
    joined: {
        type: Date, default: Date.now()
    },
    interests: [String],
    groups: [Group]
};

export default User;