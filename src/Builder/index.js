/** The Builder pattern allows us to break down the 
 * construction of complex object into separate concerns. 
 * It's useful when we need customize object instances 
 * that we will create. It's a response to the antipattern 
 * named telecope constructor. 
 **/
const PersonBuilder = require("./PersonBuilder");

//Employees

const runExample = () => {
   
  const firstPerson = new PersonBuilder('Mary')
  .makeEmployee()
  .makeManager(60)
  .build(); 
  
  const secondPerson = new PersonBuilder('Jimmi')
  .makeEmployee()
  .makePartTime()
  .build();
  
  //Shoppers
  
  const thirdPerson = new PersonBuilder('Jane')
  .withMoney(150)
  .withShoppingList(['ocb rolling paper', 'matchsticks'])
  .build();
  
  const fourthPerson = new PersonBuilder('Hendrix')
  .withMoney(500)
  .withShoppingList(['grinder', 'slim oak pipe'])
  .build();
  
  for (const person of [firstPerson, secondPerson, thirdPerson, fourthPerson]) {
    console.log(`${person.name} is a awesome person! See more: ${person.toString()}`);
  }
  
}

module.exports = { runExample };
