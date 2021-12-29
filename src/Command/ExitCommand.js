class ExitCommand {
  
  get greentings() {
    return 'Exit. Bye!'
  }

  execute() {
    process.exit(0);
  }

}

module.exports = ExitCommand;