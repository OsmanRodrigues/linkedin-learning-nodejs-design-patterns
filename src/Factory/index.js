/** The Factory patterns allow us to improve our 
 * code by encapsulating all of the constructors 
 * into a single module and creating a function 
 * that will create the objects for us. It's helpful 
 * maintain sustainability our applications as they 
 * grow and change. 
 **/
const userFactory = require("./userFactory");

const runExample = () => {
  const firstUser = userFactory('shopper', 'Mary Jane', 200);
  const secondUser = userFactory('employee', 'Jimmi Hendrix', 50, 'Olympic London');

  console.log(firstUser,secondUser);
  
}

module.exports = { runExample };