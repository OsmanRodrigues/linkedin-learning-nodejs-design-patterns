/** 
 * The Singleton pattern allow us to use a single instance of 
 * an object throughout an application. It's helpful to save 
 * memory and give more control of methods execution.
 **/
const logger = require('./Logger'),
  Shopper = require('./Shopper'),
  Store = require('./Store');

const runExampĺe = () => {
  
  logger.log('Starting app...');
  
  new Shopper('Osman', 500);
  new Store('Steep and Deep Suplies', [
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

}

module.exports = { runExampĺe }