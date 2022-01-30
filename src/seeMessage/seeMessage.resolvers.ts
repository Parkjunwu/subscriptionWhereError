
const resolver = {
  Query :{
    seeMessage:() => [
      {
        id:Math.floor(Math.random()*10000000),
        payload:"aaa"
      },
      {
        id:Math.floor(Math.random()*10000000),
        payload:"bbb"
      }
    ]
  }
}
export default resolver;