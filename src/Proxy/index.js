/** The Proxy design pattern is a object that controls 
 * access to another object. It's similar to Prototype 
 * pattern, that is necessary implement all methods of 
 * controlled object. It's useful to adapt and get more 
 * control of source code dependencies and implementations. 
 **/

const FSProxy = require('./FSProxy');
const path = require('path');

const runExample = () => {
  const fs = new FSProxy();
  const txtFile = path.join(__dirname, 'README.txt');
  const mdFile = path.join(__dirname, 'README.md');
  const format = 'UTF-8';

  const result = (err, contents) => {
    if (err) {
      console.log('\x07');
      console.error(err);
      process.exit(0);
    }

    console.log(`
      Reading file...
      ${contents}
    `)
  }
  //Commment the line below to avoid invalid file read error
  fs.readFile(txtFile, format, result);
  fs.readFile(mdFile, format, result);

}

module.exports = { runExample };