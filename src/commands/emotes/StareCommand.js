const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class YesCommand extends BaseCommand {
  constructor() {
    super('stare', 'emotes', []);
  }

  run(client, message, args) {
    let embed_yes = new Discord.MessageEmbed()
    .setTitle("👀")
   .setDescription(`👀 ${message.author.username}!!!! 👀`)
   .setImage(
'https://media.giphy.com/media/bBSJD9fijxZZu/giphy.gif')
   message.channel.send(embed_yes)
  }
}