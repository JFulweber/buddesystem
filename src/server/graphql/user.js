var typeDefs = `

    scalar Date {
        day: Int,
        month: Int,
        year: Int
    }

    type Query {
        users: [User!]!
    }

    type User {
        _id: String!
        username: String!,
        email: String!,
        joined: Date,
        interests: [String],
        friends: [User]
    }
`

var resolvers = {
    Query: {
        users: function(parent, args, { User }){
            var mongoose = require('mongoose');
            mongoose.connect('localhost:27017');
            User.find({}, function(err, result){
                return result.map((x)=>{
                    x._id = x._id.toString();
                }).then(()=>mongoose.disconnect());
            });
            //return null;
        }
    }
}

export default {typeDefs, resolvers};