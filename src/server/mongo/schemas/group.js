import mongoose from 'mongoose';
import { Schema } from 'mongoose';

let Group = new Schema({
    name: String,
    description: String,
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    creation: {
        type: Date, default: Date.now()
    },
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

export default Group;