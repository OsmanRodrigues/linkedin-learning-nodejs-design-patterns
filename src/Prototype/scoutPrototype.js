const Shopper = require("./Shopper");

const scout = new Shopper();
scout.addItemToList('camp knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');

module.exports = scout;