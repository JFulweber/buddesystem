var typeDefs = `

    type Query {
        users: [User]!
        user(username:String!): User
    }

    type User {
        _id: String!
        username: String!,
        email: String!,
        joined: String,
        interests: [String],
        friends: [User]
    }

    input UserInput {
        username: String!,
        email: String!
    }

    type Mutation {
        addUser(new_user:UserInput!): Boolean!
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
        },
        user: async function (parent, args, {User}){
            var mongoose = require('mongoose');
            return await new Promise((resolve, reject)=>{
                mongoose.connect('localhost:27017', function(err){
                    if(err) reject(err);
                    User.findOne({username:args.username}).then(result=>{
                        resolve(result);
                        mongoose.disconnect();
                    })
                });
            })
        }
    },
    Mutation: {
        addUser: async function (parent, args, {User}){
            var mongoose = require('mongoose');
            return await new Promise((resolve,reject)=>{
                mongoose.connect('localhost:27017', function(err){
                    if(err) reject(err);
                    args.new_user.joined = Date.now();
                    var myUser = new User(args.new_user);
                    myUser.date = Date.now();
                    myUser.save().then(()=>{
                        resolve(true);
                        mongoose.disconnect();
                    });
                });
            })
        }
    }
}

export default { typeDefs, resolvers };