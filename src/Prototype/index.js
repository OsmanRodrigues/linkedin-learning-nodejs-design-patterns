/**The Prototype design pattern allow us to create similar 
 * objects from a unique instance called prototype in a clone 
 * proccess. It's useful to help us to eliminate redundancy 
 * and save time on setup very complicated objects of similar 
 * design. 
 **/
const scoutPrototype = require("./scoutPrototype");

const runExample = () => {
  
  const firstPerson = scoutPrototype.clone();
  firstPerson.name = 'Jimmi Hendrix';
  firstPerson.addItemToList('guitar');

  const secondPerson = scoutPrototype.clone();
  secondPerson.name = 'Mary Jane';
  secondPerson.addItemToList('gaslighter');

  console.log(`
    ${firstPerson.name}: ${firstPerson.shoppingList}
    ${secondPerson.name}: ${secondPerson.shoppingList}
  `);

}

module.exports = { runExample };