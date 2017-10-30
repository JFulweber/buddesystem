import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const resolverArray = fileLoader(path.join(__dirname, '/resolvers/'));

export default mergeResolvers(resolverArray);