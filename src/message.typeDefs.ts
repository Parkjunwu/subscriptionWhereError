import { gql } from "apollo-server-express";

export default gql`
  type User {
    id:Int!
    userName:String!
    avatar:String!
  }
  type Message {
    id:Int!
    payload:String!
    user:User!
    read:Boolean!
  }
  type Room {
    id:Int!
    messages:[Message]
  }
`;
