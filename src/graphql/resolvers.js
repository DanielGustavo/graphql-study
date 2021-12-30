import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const resolversFiles = loadFilesSync(
  path.join(__dirname, 'modules', '**', 'resolvers.js')
);
const resolvers = mergeResolvers(resolversFiles);

export default resolvers;
