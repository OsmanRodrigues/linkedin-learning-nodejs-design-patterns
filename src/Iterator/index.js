const Iterator = require('./Iterator');
const Inventory = require('./Inventory');
const { emitKeypressEvents } = require('readline');

const runExample = () => {
  emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  
  console.log('Press any direction key (ctrl+c to exit)...');
  const items = [
    { name: 'Poles', price: 9.99 },
    { name: 'Skis', price: 799.99 },
    { name: 'Boots', price: 699.99 },
    { name: 'Jeans', price: 59.99 }
  ]
  const inventory = new Iterator(
    items.map(item => new Inventory(item.name, item.price))
  );
  
  process.stdin.on('keypress', (str, key) => {
    
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch (key.name) {
      
      case 'right':
        inventory.next().writeLine();
        break;
      
      case 'left':
        inventory.prev().writeLine();
        break;
      
      case 'down':
        inventory.last().writeLine();
        break;
      
      case 'up':
        inventory.first().writeLine();
        break;
      
      case 'c':
        if (key.ctrl) {
          console.log('Exiting... Bye!')
          process.exit()
        }
    }
  })

}

module.exports = { runExample };