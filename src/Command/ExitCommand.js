class ExitCommand {
  
  get greetings() {
    return 'Exit. Bye!'
  }

  execute() {
    process.exit(0);
  }

}

module.exports = ExitCommand;