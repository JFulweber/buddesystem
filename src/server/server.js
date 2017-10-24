
/*
    MONGO (PROCESS) SETUP
*/
var ps = require('ps-node');
const { spawn } = require('child_process');

ps.lookup({
    command: "mongod",
}, function (err, res) {
    if (err) throw err;
    res.forEach(function (process) {
        if (process) {
            if (process.pid != mongodb_process.pid)
                console.log(ps.kill(process.pid));
        }
    });
})

process.on('exit', function () {
    ps.kill(process.pid);
})

process.on('uncaughtException', function (exception) {
    console.log(exception); // to see your exception details in the console
    // if you are on production, maybe you can send the exception details to your
    // email as well ?
});

var mongodb_process = spawn('mongod');

mongodb_process.stdout.on('data', (data) => {
    //console.log(`stdout: ${data}`);
});

mongodb_process.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

mongodb_process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

/*
    EXPRESS SETUP
*/
var express = require('express');

var server = express();

const PORT = 3000;

server.use(express.static('./dist'));

/*
    GRAPHQL SETUP
*/
var graphQlHTTP = require('express-graphql');

var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello(ints:[Int]): Person
    }

    type Person {
        id: Int!
        title: String
        firstName: String!
        lastName: String!
    }
`)


var root = {
    hello: function(args){
        return {
            id: 10,
            title: "Jeff",
            firstName: "uhuuu",
            lastName:"last"
        }    
    },
    person: () => {
        return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    }
};


server.use('/graphql', graphQlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

/*
    MONGOOSE/MONGO SETUP
*/
var mongoose = require('mongoose');

var UserObj= require('./mongo/schemas/user');
console.log(UserObj);

var UserSchema = new mongoose.Schema(UserObj);

//console.log(UserSchema);

console.log("TYPEOF USERSCHEMA:"+typeof(UserSchema));

mongoose.connect('localhost:27017', function(err){
    if(err) throw err;
});

var userModel = mongoose.model('User',UserSchema);

var user = new userModel({
    username: "hi"
})
console.log(user);
/*
HOST MONGODB DATABASE ON WEBSITE
*/




server.get('/db', function(req,res){
    console.log('getting database');
    mongoose.connect('localhost:27017', function (err) {
        if(err) throw err;    
    });


    mongoose.disconnect();
   // res.send('Check mongo!');
});


/*
   RUN SERVER
*/

server.listen(PORT, function () {
    console.log(`Listening on ${PORT}`)
})