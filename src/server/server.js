
/*
    MONGO SETUP
*/
var ps = require('ps-node');
const { spawn } = require('child_process');

ps.lookup({
    command: "mongod",
}, function (err, res) {
    if (err) throw err;
    res.forEach(function (process) {
        if (process) {
            if (process.pid != mongodb.pid)
                console.log(ps.kill(process.pid));
        }
    });
})

var mongodb = spawn('mongod');

mongodb.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

mongodb.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

mongodb.on('close', (code) => {
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
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';

var myGraphQLSchema = require('./graphql/schemas/test');

var mongoose = require('mongoose');
var groups = require('./mongo/schemas/group');

mongoose.connect('localhost:27017', function (err) {

})

/* server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
server.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled
 */

/*
   RUN SERVER
*/
server.listen(PORT, function () {
    console.log(`Listening on ${PORT}`)
})