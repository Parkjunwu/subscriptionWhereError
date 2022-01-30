
// const resolver = {
//   Query :{
//     seeMessage:() => [
//       {
//         id:Math.floor(Math.random()*10000000),
//         payload:"aaa"
//       },
//       {
//         id:Math.floor(Math.random()*10000000),
//         payload:"bbb"
//       }
//     ]
//   }
// }
// export default resolver;



const resolver = {
  Query :{
    seeMessage:() => { return {
      id:1,
      messages:
      // [
        [{
          id:Math.floor(Math.random()*10000000),
          payload:"aaa",
          user:{
            userName:"aa",
            avatar:"aa"
          },
          read:true
        }]
      //   {
      //     id:Math.floor(Math.random()*10000000),
      //     payload:"bbb",
      //     user:{
      //       userName:"bb",
      //       avatar:"bb"
      //     },
      //     read:false
      //   },
      // ]
    }}
  }
}
export default resolver;