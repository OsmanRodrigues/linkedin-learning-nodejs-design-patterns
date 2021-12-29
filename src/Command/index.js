/** The Command design pattern is a set of objects that 
 * work together to execute a specific action on the client. 
 * It's useful to encapsulate requests, in order to dealing 
 * with different requests or queue, and support undoable 
 * operations. 
 **/
const conductor = require('./Conductor');
const { createInterface } = require('readline');
const ExitCommand = require('./ExitCommand');
const CreateCommand = require('./CreateCommand');

const runExample = () => {
  
  const relay = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Commands: create <fileName> <text> | history | undo | redo | exit');
  relay.prompt();

  relay.on('line', input => {
    const [ commandText, ...remainig ] = input.split(' ');
    const [ fileName, ...fileText ] = remainig;
    const text = fileText.join(' ');

    switch (commandText) {
      
      case 'history':
        conductor.printHistory();
        break;

      case 'undo':
        conductor.undo();
        break;

      case 'redo':
        conductor.redo();
        break;
      
      case 'exit':
        conductor.run(new ExitCommand());
        break;
      
      case 'create':
        conductor.run(new CreateCommand(fileName, text));
        break;
      
      default:
        console.log(`Command "${commandText}" not found!`);
        break;
    }

  })

}

module.exports = { runExample };