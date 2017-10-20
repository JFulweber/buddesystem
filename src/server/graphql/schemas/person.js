var graphql = require('graphql');

var PersonType = new graphql.GraphQLObjectType({
    name: 'Person',
    fields: function(){
        return{
            id: {
                type: graphql.GraphQLID,
                description: 'ID of Person'
            },
            title: {
                type: graphql.GraphQLString,
                description: 'Title of Person (Mr, Ms, Mrs, Dr, etc)'
            },
            firstName: {
                type: graphql.GraphQLString
            },
            lastName: {
                type: graphql.GraphQLString
            }
        }
    }
})