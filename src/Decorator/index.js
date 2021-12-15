/** 
 * The Decorator pattern allow us to modify a base object
 * giving to it other properties and/or methods at runtime 
 * execution. It's helpful for making dynamic changes.
 **/
const Shopper = require('./Shopper'),
  { 
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
  } = require('./InventoryItem');

const runExampĺe = () => {
  const adventurer = new Shopper('Osman', 5000);
  const items = {
    sword: new InventoryItem("Sword", 250),
    cuirass: new InventoryItem("Cuirass", 150)
  };

  //After a loot, the adventurer finds a legendary blacksmith who improves their items!
  const enhancedItems = {
    goldenCuirass: new GoldenInventoryItem(items.cuirass),
    diamondSword: new DiamondInventoryItem(items.sword)
  };

  adventurer.purchase(enhancedItems.goldenCuirass);
  adventurer.purchase(enhancedItems.diamondSword);

  adventurer.printStatus();

  enhancedItems.diamondSword.print()

};

module.exports = { runExampĺe };