// exports.handler = async () => {
//   return {
//     statusCode: 200,
//     body: 'Hello egghead!',
//   };
// };

exports.handler = async () => {

  console.log({"TEST_VAR" : process.env.TEST_VAR})
  return {
    statusCode: 200,
    body: 'Hello Brian watching tutorials!',
  };
};