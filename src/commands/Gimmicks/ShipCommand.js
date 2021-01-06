const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class GayCommand extends BaseCommand {
  constructor() {
    super('ship', 'Gimmicks', []);
  }

  run(client, message, args) {
  let person1 = args[0]
  let person2 = args[1]
  let embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} ships ❤️${person1}❤️ and ❤️${person2}❤️`)
    .setColor("RANDOM")
  message.channel.send(embed)
  }
}