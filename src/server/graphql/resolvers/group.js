var mongoose = require('../../server');

var resolvers = {
    Query: {
        groups: async function (parent, args, { Group }) {
            console.log('finding groups');
            return await new Promise((resolve, reject) => {
                Group.find({}).then((results) => resolve(results));
            })
        },
        group: async function (parent, args, { Group }) {
            return await new Promise((resolve, reject) => {
                Group.findById(args.id).then((result) => {
                    resolve(result);
                })
            })
        }
    },
    Mutation: {
        addGroup: async function (parent, args, { Group, User }) {
            console.log(args);
            return await new Promise((resolve, reject) => {
                console.log('trying?');
                var promise = User.findOne({ email: args.creator });
                promise.then((result) => {
                    var newGroup = new Group({
                        name: args.name,
                        admins: [result],
                        creation: Date.now(),
                        members: [result],
                        description: args.name
                    });
                    console.log(result);
                    console.log(`NEW GROUP: ${newGroup}`)
                    newGroup.save().then(() => resolve(true));
                });
            });
        },
    }
}

export default resolvers;