/* import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Test {
        id: ID!
        title: String!
        num: Int
    }

    type Query {
        tests: [Test]
    }

    type Mutation {
        cp (
            testId: ID!
        ): Test
    }
     
    schema {
        query: Query
        mutation: Mutation
    }
`;

const resolvers = {
    Query: {
        tests(){
            return tests
        }
    },
    Mutation: {
        cp(_, { testId }){
            const test = find(tests, {id: testId});
            if(!test){
                throw new Error('Cant find that post');
            }
            test.num += 1;
            return test;
        }
    },
    Test: {
        tests(title){
            return find(tests, {title: title});
        }
    }
};

const execSchema = makeExecutableSchema({
    typeDefs, resolvers
});

export default execSchema; */