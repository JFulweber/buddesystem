import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import {User} from './user';

var Post = new Schema({
    title: String,
    poster: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    text: String,
    timePost: Date,
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
})

export default require('mongoose').model('Post',Post);