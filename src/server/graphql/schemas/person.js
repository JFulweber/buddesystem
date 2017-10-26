import mongoose from 'mongoose';
var graphql = require('graphql');

var typedefs = `

    scalar Date

    type User {
        username: String,
        email: String,
        joined: Date,
        interests: [String],
        friends: [User]
    }

    type Query {
        user(username: String): User
    }
`

var rootValue = {
    RootQuery:{
        user(username){
            mongoose.connect('localhost:27017', function(err){
                var UserModel = mongoose.model('User', require('../../mongo/schemas/user'));
                UserModel.findOne({username:username.username}, function(err, result){
                    return result;
                }).then(()=>mongoose.disconnect());
            });
        }
    },
    User:{
        email(user){
            return user.email;
        },
        displayName(user){
            return user.displayName;
        },
        firstName(user){
            return user.firstName;
        },
        lastName(user){
            return user.lastName
        },
        fullName(user){
            return user.firstName + " " + user.lastName;
        }
    }
}

module.exports = {typedefs, rootValue};