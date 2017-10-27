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
        users: function (parent, args, { User }) {
            var mongoose = require('mongoose');
            return [{
                _id: "hi",
                username: "jeff",
                email: "hi",
                joined: Date.now().toString(),
                interests: {},
                friends: {}
            }]
            //return null;
        }
    }
}

export default { typeDefs, resolvers };