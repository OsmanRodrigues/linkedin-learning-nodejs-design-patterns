const PatternName = process.argv[2]

const Pattern = require(`./${PatternName}`)

console.log(Pattern)

Pattern.runExample()