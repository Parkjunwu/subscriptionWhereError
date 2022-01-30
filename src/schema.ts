// import { loadFilesSync } from "@graphql-tools/load-files";
// import { mergeTypeDefs } from "@graphql-tools/merge";

// const loadTypeDefs = loadFilesSync(`${__dirname}/**/*.typeDefs.*`);
// const loadResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.*`);

// export const typeDefs = mergeTypeDefs(loadTypeDefs);
// export const resolvers:any = mergeTypeDefs(loadResolvers);
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.*`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.*`);
export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers: any = mergeResolvers(loadedResolvers);
