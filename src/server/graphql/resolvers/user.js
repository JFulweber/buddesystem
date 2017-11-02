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
                Group.findById(args.groupId).then((group)=>{
                    User.findOne({email:args.email}).then((user)=>{
                        var contains = false;
                        user.groups.forEach((usergroup)=>{
                            if(usergroup._id.toString() == args.groupId.toString()){
                                contains = true;
                            }
                        });
                        if(contains) resolve(false);
                        return;
                        user.groups.push(group);
                        group.members.push(user);
                        group.save().then(()=>resolve(true));
                        var promise = user.save();
                        promise.then(()=>resolve(true));
                        promise.catch((err)=>reject(err));
                    })
                })
            })
        },
        interestedInEvent: async function(parent, args, {User, Event}){
            return await new Promise((resolve,reject)=>{
                User.findById(args.userId).then((user)=>{
                    Event.findById(args.eventId).then((event)=>{
                        // finish this
                    })
                })
            });
        }
    }
}


export default resolvers;