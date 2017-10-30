import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const typeDefArray = fileLoader(path.join(__dirname, '/typeDefs/'));

export default mergeTypes(typeDefArray);