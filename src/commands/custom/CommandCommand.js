const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CommandCommand extends BaseCommand {
  constructor() {
    super('command', 'custom', []);
  }

  run(client, message, args) {
    var trigger = args[0]

    const messageArray = message.content.split(' ');
    const arg = messageArray.slice(2).join(' ')

    if(!trigger){
      message.channel.send("You must specify a trigger \n\n **EXAMPLE** \n\n `--command Youtube {action}` <---- Trigger");
    } 
    if(!arg){
       message.channel.send("You must specify a action \n\n **EXAMPLE** \n\n `--command {trigger} The command works!!!!` <---- Trigger \n\n **RETURNS** \n\n The command works!!!!");

    }

    if(arg && trigger){
      message.channel.send("The commmands all setup! You can now do \n ```--"+trigger+"``` \n to make your command work! \n\n please note this command only works in this guild");
    }

    if(arg[0] == trigger){
      message.channel.send(arg)
    }

  }
}