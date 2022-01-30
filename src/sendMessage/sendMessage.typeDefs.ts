import { gql } from "apollo-server-express";

export default gql`
  type Result {
    ok:Boolean!,error:String
  }
  type Mutation {
    sendMessage(
      payload:String!
    ):Result
  }
`;