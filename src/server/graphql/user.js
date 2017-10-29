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
            return await getUsers(User)
        }
    }
}

const getUsers = function(User){
    var mongoose = require('mongoose');
    return new Promise((resolve, reject) => {
        mongoose.connect('localhost:27017', function (err) {
            if (err)
                reject(err);
            User.find({}).then(results => {
                console.log(results);
                resolve(results);
            });
        });
    });  
}

export default { typeDefs, resolvers };