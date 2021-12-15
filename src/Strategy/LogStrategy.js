const path = require('path'),
  { appendFile } = require('fs');

class LogStrategy{

  static noDate(message) {
    console.log(message);
  }

  static toFile(message, timestamp) {
    const fileName = path.join(__dirname, 'logs.txt');
    const logTemplate = `${timestamp} - ${message} \n`;
    appendFile(fileName, logTemplate, err => {
      if (err) {
        console.log(`
        Error writing to file:
        ${err}
        `)
      }
    });
  }

  static toConsole(message, timestamp) {
    console.log(`${timestamp} - ${message}`);
  }
  
}

module.exports = LogStrategy;