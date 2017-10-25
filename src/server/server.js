
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

/* mongodb_process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
 */
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
    hello: function (args) {
        return {
            id: 10,
            title: "Jeff",
            firstName: "uhuuu",
            lastName: "last"
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

var UserSchema = require('./mongo/schemas/user');
var User = mongoose.model('User', UserSchema);

mongoose.connect('localhost:27017', function (err) {
    if (err) throw err;

    var mUser = new User({
        username: 'jeff'
    });
    var promise = mUser.save();
    promise.then(result => {
        mongoose.disconnect();
    });
});


/*
HOST MONGODB DATABASE ON WEBSITE
*/

server.get('/db', function (req, res) {
    var _send = "";
    mongoose.connect('localhost:27017', function (err) {
        User.find({}, function (err,result) {
            result.forEach(function(user){
                _send += user.username + "\n";
            })
            res.send(_send);
            mongoose.disconnect();
        });
        //console.log(_send);
        //res.send('ree');
        //res.send(_send.toString());
    });
})

/*
   RUN SERVER
*/

server.listen(PORT, function () {
    console.log(`Listening on ${PORT}`)
})