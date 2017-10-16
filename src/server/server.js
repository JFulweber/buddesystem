var express = require('express');
var mongoose = require('mongoose');
var groups = require('./mongo/schemas/group');

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';

var myGraphQLSchema = require('./graphql/schemas/test');

var server = express();

const PORT = 3000;

server.use(express.static('./dist'));

mongoose.connect('localhost:27017', function(err){
    
})

/* server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
server.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled
 */
server.listen(PORT, function(){
    console.log(`Listening on ${PORT}`)
})