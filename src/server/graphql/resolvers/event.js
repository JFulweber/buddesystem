var mongoose = require('../../server');

var resolvers = {
    Query: {
        events: async function (parent, args, { Event }) {
            return await new Promise((resolve, reject) => {
                Event.find().then((results) => {
                    resolve(results);
                });
            })
        },
        event: async function (parent, args, { Event }) {
            return await new Promise((resolve, reject) => {
                Event.findById(args.id).then((result) => {
                    resolve(result);
                })
            });
        }
    },
    Mutation: {
        createEvent: async function (args, parent, { Event }) {
            return await new Promise((resolve, reject)=>{
                var newEvent = new Event(args.event);
                newEvent.save().then(()=>resolve(true));
            })
        }
    }
};

export default resolvers;