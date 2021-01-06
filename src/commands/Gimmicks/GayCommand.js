const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class GayCommand extends BaseCommand {
  constructor() {
    super('gay', 'Gimmicks', []);
  }

  run(client, message, args) {
   let person = message.mentions.members.first() || message.author.username

  var rolled = Math.floor(Math.random() * 100) + 0;
  let embed = new Discord.MessageEmbed()
    .setTitle(`${person} is ${rolled}% gay`)
    .setColor("RANDOM")
  message.channel.send(embed)
  }
}