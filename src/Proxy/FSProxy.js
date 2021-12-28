const fs = require('fs');

class FSProxy {

  constructor() {
    this.fs = fs;
  }

  readFile(path, format, callback) {
    const isMarkdown = path.match(/.md$|.MD$/);
    if (!isMarkdown) {
      return callback(new Error('Can only read Markdown files.'));
    }

    this.fs.readFile(path, format, (err, contents) => {
      if (err) {
        console.error(err);
        return callback(err);
      }

      return callback(null, contents);
    })
  }

  //TODO: implement other fs methods

}

module.exports = FSProxy;