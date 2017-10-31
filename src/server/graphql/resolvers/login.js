var mongoose = require('../../server');    

var resolvers = {
    Query:{
        validateLogin: async function(parent, args, {Login}){
            return await new Promise((resolve, reject)=>{
                Login.findOne({email:args.email}).then((result)=>{
                    if(!result) reject(false);
                    if(result.password==args.password){
                        resolve(true);
                    }
                    resolve(false);
                });   
            });
        },
        logins: async function(parent, args, {Login}){
            return await new Promise((resolve,reject)=>{
                Login.find({}).then((results)=>{
                    resolve(results);
                })
            })
        }
    },
    Mutation:{
        registerLogin: async function(parent, args, {Login}){
            return await new Promise((resolve,reject)=>{
                var newLogin = new Login({
                    email: args.newuser.email,
                    password: args.newuser.password
                })
                newLogin.save().then(()=>{
                    resolve(true);
                });
            });
        },
        changeEmail: async function(parent, args, {Login}){
            return await new Promise((resolve,reject)=>{
                Login.find({
                    email: args.old
                }).then((result)=>{
                    result.email = args.new;
                    result.save().then(()=>resolve(true));
                })
            });
        },
        changePass: async function(parent, args, {Login}){
            return await new Promise((resolve,reject)=>{
                Login.find({
                    email: args.email
                }).then((result)=>{
                    if(result.password === args.old){
                        result.password = args.new;
                        result.save().then(()=>resolve(true));
                    }
                    else{
                        resolve(false);
                    }
                })
            });
        }
    }
}

export default resolvers;