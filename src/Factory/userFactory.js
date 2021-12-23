const Employee = require("./Employee");
const Shopper = require("./Shopper");

const userFactory = (
  type = 'employee' || 'shopper',
  name,
  money = 0,
  employer = 'Not informed'
) => {

  switch (type) {
    
    case 'employee':
      return new Employee(name, money, employer);
    
    case 'shopper':
      return new Shopper(name, money);
    
    default:
      throw Error('A valid user type must be provided.');
  }
  
}

module.exports = userFactory;