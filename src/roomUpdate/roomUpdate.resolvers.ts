import pubsub from "../pubsub";
import { SUBSCRIBE_CHANNEL } from "../subscribeUtils";

const resolvers = {
  Subscription: {
    //이 아래 이름이 중요함. 얘 이름의 객체로 받음. 당연한거지만.
    roomUpdate: {
      // More on pubsub below
      subscribe: async(_,{id}) => pubsub.asyncIterator([SUBSCRIBE_CHANNEL])
    },
  },
  // ...other resolvers...
};

export default resolvers;