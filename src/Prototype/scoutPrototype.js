const Shopper = require("./Shopper");

const scoutPrototype = new Shopper();
scoutPrototype.addItemToList('camp knife');
scoutPrototype.addItemToList('tent');
scoutPrototype.addItemToList('backpack');
scoutPrototype.addItemToList('map');

module.exports = scoutPrototype;