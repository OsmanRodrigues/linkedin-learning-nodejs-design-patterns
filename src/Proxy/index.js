const FSProxy = require('./FSProxy');

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

  fs.readFile(txtFile, format, result);
  fs.readFile(mdFile, format, result);

}

module.exports = { runExample };