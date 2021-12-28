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