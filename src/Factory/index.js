const userFactory = require("./userFactory");

const runExample = () => {
  const firstUser = userFactory('shopper', 'Mary Jane', 200);
  const secondUser = userFactory('employee', 'Jimmi Hendrix', 50, 'Olympic London');

  console.log(firstUser,secondUser);
  
}

module.exports = { runExample };