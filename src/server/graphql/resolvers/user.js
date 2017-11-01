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
        // whats going on here??
        joinGroup: async function (parent, args, {User, Group}){
            return await new Promise((resolve,reject)=>{
                var group;
                Group.find({_id: args.groupId}).then((group)=>{
                    console.log(group);
                    User.findOne({email:args.email}).then((user)=>{
                        user.groups.push(group);
                        console.log(user.groups);
                        var myPromise = user.save();
                        console.log(`Promise:\n${myPromise}`)
                        myPromise.then(()=>{
                            console.log("in then");
                        })
                        myPromise.catch((err)=>{
                            console.log("in catch");
                            console.log(err);
                            throw err;
                        })
                    })
                })
            })
        }
    }
}


export default resolvers;