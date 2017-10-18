
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

process.on('exit', function(){
    ps.kill(process.pid);
})

var mongodb_process = spawn('mongod');

mongodb_process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
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
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';

var myGraphQLSchema = require('./graphql/schemas/person');

/*TODO: WTF */

server.use('/graphql', bodyParser.json(), graphqlExpress({
    myGraphQLSchema
}));

/*
    MONGOOSE/MONGO SETUP
*/ 
var mongoose = require('mongoose');
var groups = require('./mongo/schemas/group');

mongoose.connect('localhost:27017', function (err) {

})

/*
   RUN SERVER
*/

server.listen(PORT, function () {
    console.log(`Listening on ${PORT}`)
})