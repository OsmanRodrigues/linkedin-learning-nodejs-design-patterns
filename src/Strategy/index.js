const logger = require('./Logger');

const runExample = () => {
  
  logger.log(`
  ==========
  A message from after life...
  ==========
  My son,
  The day you were born,
  The very forests of Lordaeron whispered the name:
  "Arthas".
  My child,
  I watched you with pride,
  As you grew into a weapon,
  Of rightousness.
  ==========
  End 
  ==========
  `);

  logger.changeStrategy('toFile');
  
  logger.log(`A message from after life was sent by King Terenas Menethil.`);
  logger.log('The destinary is Arthar Menethil.');
  logger.log('They were father and son. Both are fallen kings.');

};

module.exports = { runExample };