import pubsub from "../pubsub";
import { SUBSCRIBE_CHANNEL } from "../subscribeUtils";

const resolvers = {
  Mutation:{
    sendMessage: async(_,{payload}) => {
      try { 
        await pubsub.publish(SUBSCRIBE_CHANNEL, {
          roomUpdate:{
            id:Math.floor(Math.random()*10000000),
            payload,
            user:{
            userName:"aa",
            avatar:"aa"
          },
          read:true
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