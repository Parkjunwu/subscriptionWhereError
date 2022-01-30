import { gql } from "apollo-server-express";

// export default gql`
//   type Query {
//     seeMessage:[Message]
//   }
// `;

export default gql`
  type Query {
    # seeMessage(id:Int!):
    seeMessage(id:Int!):Room
  }
`;
