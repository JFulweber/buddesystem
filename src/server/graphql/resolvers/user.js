var mongoose = require('../../server');

var resolvers = {
    Query: {
        users: async function (parent, args, { User }) {
            console.log('resolving')
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
        },
        joinGroup: async function (parent, args, {User, Group}){
            return await new Promise((resolve,reject)=>{
                var group;
                Group.find({_id: args.groupId}).then((result)=>{
                    group = result;
                })
                User.findOne({email:args.email}).then((result)=>{
                    if(!group) reject(false);
                    result.groups.add(group);
                    result.save().then(()=>{
                        resolve(true);
                    });
                })
            })
        }
    }
}


export default resolvers;