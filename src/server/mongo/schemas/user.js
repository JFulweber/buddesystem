import { Schema } from 'mongoose';
import { Login } from './login';
import { Group } from './group';

let User = new Schema({
    username: String,
    email: String,
    joined: {
        type: Date, default: Date.now()
    },
    interests: [String],
    groups: {
        type: [Group]
    },
    friends: {
        type: [User]
    }
});

export default User;