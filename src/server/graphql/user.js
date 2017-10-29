var typeDefs = `

    scalar Date {
        day: Int,
        month: Int,
        year: Int
    }

    type Query {
        users: [User]!
    }

    type User {
        _id: String!
        username: String!,
        email: String!,
        joined: String,
        interests: [String],
        friends: [User]
    }
`

var resolvers = {
    Query: {
        users: async function (parent, args, { User }) {
            var mongoose = require('mongoose');
            return await new Promise((resolve, reject) => {
                mongoose.connect('localhost:27017', function (err) {
                    if (err)
                        reject(err);
                    User.find({}).then(results => {
                        resolve(results);
                        mongoose.disconnect();
                    });
                });
            });  
        }
    }
}

const getUsers = function(User){
    
}

export default { typeDefs, resolvers };