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
        addMemberToGroup: async function (parent, args, { Group, User }) {
            return await new Promise((resolve, reject) => {
                User.findOne({ _id: args.member }).then((user) => {
                    Group.findById(args.group).then((group) => {
                        group.members.add(user);
                        resolve(true);
                    })
                });
            });
        }
    }
}

export default resolvers;