const inventory = require("./inventory.json");
const Store = require("./Store");

const runExample = () => {
  const skiShop = new Store('Steep and Deep', inventory);

  const nameItemToSearch = 'foo';
  const result = skiShop.find(nameItemToSearch);

  console.log(result);

}

module.exports = { runExample };