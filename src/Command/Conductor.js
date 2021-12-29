class Conductor {

  constructor() {
    this.historyDone = [];
    this.historyUndone = [];
  }

  run(command) {
    console.log(`Executing command: ${command.greetings}`);
    command.execute();
    this.historyDone.push(command);
  }

  printHistory() {
    const historyToPrint = [
      { greetings: '=====Done=====' },
      ...this.historyDone,
      { greetings: '=====Undone=====' }, 
      ...this.historyUndone
    ];
   
    if (historyToPrint.length > 2) {
      historyToPrint.forEach((command) => {
          console.log(command.greetings);
      });
    } else {
      console.log('No command yet.')
    }
  }

  undo() {
    const command = this.historyDone.pop();
    console.log(`Undo ${command.greetings}`);
    command.undo();
    this.historyUndone.push(command);
  }

  redo() {
    const command = this.historyUndone.pop();
    console.log(`Redo ${command.greetings}`);
    command.execute();
    this.historyDone.push(command);
  }

}

module.exports = new Conductor();