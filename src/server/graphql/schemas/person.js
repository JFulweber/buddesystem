import { makeExecutableSchema } from 'graphql-tools';

const typedefs = `
    type Person{
        id: Int!
        firstName: String
        lastName: String
        interests: [String]
    }

    type Query{
        person(id: Int!): Person
    }

    schema{
        query: Query
    }
`

const resolvers = {
    Query: {
      person: (_, {id}) => find(person, {id: id})
    }
  };

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})