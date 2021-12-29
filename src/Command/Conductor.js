class Conductor {

  constructor() {
    this.historyDone = [];
    this.historyUndone = [];
  }

  run(command) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
    this.historyDone.push(command);
  }

  printHistory() {
    this.history.forEach(command => {
      console.log(command.name)
    })
  }

  undo() {
    const command = this.historyDone.pop();
    console.log(`Undo ${command.name}`);
    command.undo();
    this.historyUndone.push(command);
  }

  redo() {
    const command = this.historyUndone.pop();
    console.log(`Redo ${command.name}`);
    command.execute();
    this.historyDone.push(command);
  }

}

module.exports = Conductor;