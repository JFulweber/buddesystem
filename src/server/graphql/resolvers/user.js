var mongoose = require('../../server');

var resolvers = {
    Query: {
        users: async function (parent, args, { User }) {
            return await new Promise((resolve, reject) => {
                User.find({}).then(results => {
                    resolve(results);
                });
            });
        },
        user: async function (parent, args, { User }) {
            return await new Promise((resolve, reject) => {
                User.findOne({ username: args.username }).then(result => {
                    resolve(result);
                });
            })
        }
    },
    Mutation: {
        addUser: async function (parent, args, { User }) {
            return await new Promise((resolve, reject) => {
                args.new_user.joined = Date.now();
                var myUser = new User(args.new_user);
                myUser.save().then(() => {
                    resolve(true);
                });
            });
        }
    }
}


export default resolvers;