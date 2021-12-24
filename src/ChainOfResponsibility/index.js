/** The Chain of responsibility desing pattern allow us to chain 
 * together objects to handle a request. When a request comes, 
 * it's received to a handler that can send back a response or 
 * pass to next object which have the same behavior.  
 **/
const inventory = require("./inventory.json");
const Store = require("./Store");

const runExample = () => {
  const skiShop = new Store('Steep and Deep', inventory);

  const nameItemToSearch = 'ski poles';
  const result = skiShop.find(nameItemToSearch);

  console.log(result);

}

module.exports = { runExample };