const logger = require('./Logger');

class Store {

  constructor(name, inventory=[]) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
  }

}

module.exports = Store;