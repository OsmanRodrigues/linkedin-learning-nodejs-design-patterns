const logger = require('./Logger');

const runExample = () => {

  logger.log('A message from after life...');
  logger.log('My son,');
  logger.log('The day you were born,');
  logger.log('the very forests of Lordaeron whispered the name:');
  logger.log('"Arthas."');
  logger.log('My child,');
  logger.log('I watched you with pride,');
  logger.log('As you grew into a weapon');
  logger.log('Of rightousness.');
  
  logger.changeStrategy('toFile');
  
  logger.log('A message from after life was sent by King Terenas Menethil.');
  logger.log('The destinary is Arthar Menethil.');
  logger.log('They were father and son. Both are fallen kings.');

};

module.exports = { runExample };