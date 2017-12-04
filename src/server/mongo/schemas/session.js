import {Schema} from 'mongoose';

let Session = new Schema({
    userId: !ID,
    webToken: !String
});

module.exports = Session;