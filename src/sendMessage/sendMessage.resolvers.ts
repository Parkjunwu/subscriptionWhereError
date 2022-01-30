import pubsub from "../pubsub";
import { SUBSCRIBE_CHANNEL } from "../subscribeUtils";

const resolvers = {
  Mutation:{
    sendMessage: async(_,{payload}) => {
      try { 
        await pubsub.publish(SUBSCRIBE_CHANNEL, {
          postCreated:{
            id:Math.floor(Math.random()*10000000),
            payload
          }
        });
        return {ok:true}
      } catch (e) {
        console.log(e)
        return {ok:false, error:e}
      }
    }
  },
}
export default resolvers;