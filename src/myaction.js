const Action = require("@lightbend/akkaserverless-javascript-sdk").Action;


const action = new Action(
    [
      "myaction.proto"
    ],
    "com.example.MyServiceAction",
    {
      includeDirs: ["./proto"]
    }
  );


action.commandHandlers = {Hello: hello};

function hello(command, ctx) {
  return {text: "Do you want to play a game, " + command.name + "?"};
}

module.exports = action;