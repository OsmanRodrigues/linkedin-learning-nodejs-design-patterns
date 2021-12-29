const { writeFile, unlink } = require('fs');
const path = require('path');

class CreateCommand {
  
  constructor(fileName, content) {
    this.fileName = fileName;
    this.content = content;
    this.fullPath = path.join(__dirname, fileName);
  }

  get greetings() {
    return `Create ${this.fileName}`;
  }

  execute() {
    writeFile(this.fullPath, this.content, callback => callback);
  }

  undo() {
    unlink(this.fullPath, callback => callback);
  }

}

module.exports = CreateCommand;