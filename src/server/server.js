
/*
    MONGO (PROCESS) SETUP
*/

//#region mongo_setup
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
//#endregion mongo_setup

/*
    EXPRESS SETUP
*/

//#region express_setup
var express = require('express');

var server = express();

const PORT = 3000;

server.use(express.static('./dist'));

//#endregion express_setup

/*
    GRAPHQL SETUP
*/

//#region graphql_setup

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

//#endregion graphql_setup

/*
    MONGOOSE/MONGO SETUP
*/

//#region mongoose_setup

var mongoose = require('mongoose');

var UserSchema = require('./mongo/schemas/user');
var User = mongoose.model('User', UserSchema);


// testing setting up a user

/* mongoose.connect('localhost:27017', function (err) {
    if (err) throw err;

    var mUser = new User({
        username: 'jeff'
    });
    var promise = mUser.save();
    promise.then(result => {
        mongoose.disconnect();
    });
});
 */

//#endregion mongoose_setup

/*
HOST MONGODB DATABASE ON WEBSITE
*/

server.get('/db', function (req, res) {
    var _send = "";
    mongoose.connect('localhost:27017', function (err) {
        var stack = {};
        User.find({}, function (err,result) {
            while(result.length > 0){
                var pop = result.pop();
                _send += `<p>User ${result.length}: username: ${pop.username} in the database</p>`;
            }
            res.send(_send);
            mongoose.disconnect();
        });
    }); 
})

server.get('/adduserdb', function(req,res){
    mongoose.connect('localhost:27017', function(err){
        if(err) throw err;
        var mUser = new User({
            username: req.query.username,
            email: req.query.email,
            joined: Date.now()
        });
        var Promise = mUser.save();
        Promise.then(result => mongoose.disconnect());
    })
    res.redirect('/db');
});

/*
   RUN SERVER
*/

server.listen(PORT, function () {
    console.log(`Listening on ${PORT}`)
})