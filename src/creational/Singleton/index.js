const logger = require('./Logger'),
  Shopper = require('./Shopper'),
  Store = require('./Store');

logger.log('Starting app...');

const Osman = new Shopper('Osman', 500);
const skiShop = new Store('Steep and Deep Suplies', [
  {
    item: 'Downhill Skis',
    qty: 1,
    price: 750
  },
  {
    item: 'Knit Hat',
    qty: 1,
    price: 5
  }
]);

logger.log('Finished config...')

logger.log(`${logger.count} logs total.`);