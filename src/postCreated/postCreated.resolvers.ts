import pubsub from "../pubsub";
import { SUBSCRIBE_CHANNEL } from "../subscribeUtils";

const resolvers = {
  Subscription: {
    //이 아래 이름이 중요함. 얘 이름의 객체로 받음. 당연한거지만.
    postCreated: {
      // More on pubsub below
      subscribe: async(_,{payload}) => {
        const subscribe = pubsub.asyncIterator([SUBSCRIBE_CHANNEL]);
        return subscribe;
      },
    },
  },
  // ...other resolvers...
};

export default resolvers;