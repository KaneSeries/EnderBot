const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class YesCommand extends BaseCommand {
  constructor() {
    super('yes', 'emotes', []);
  }

  run(client, message, args) {
    let embed_yes = new Discord.MessageEmbed()
    .setTitle("Yes")
   .setDescription(`YES ${message.author.username}!!!! YESS`)
   .setImage(
'https://media.giphy.com/media/3ornjPrVfRT0Nze3o4/giphy.gif')
   message.channel.send(embed_yes)
  }
}