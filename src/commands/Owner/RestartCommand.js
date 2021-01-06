const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RestartCommand extends BaseCommand {
  constructor() {
    super('restart', 'Owner', []);
  }

  async run(client, message, args) {
 if (message.author.id !== '692051505188044850') {
   return message.channel.send(`You cannot use this command!`)
 }
 await message.channel.send(`Restarting bot...`)
 process.exit();

 }
 }
