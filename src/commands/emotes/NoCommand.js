const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class YesCommand extends BaseCommand {
  constructor() {
    super('no', 'emotes', []);
  }

  run(client, message, args) {
    var man = message.author.username.toUpperCase()
    let embed_no = new Discord.MessageEmbed()
    .setTitle("NO")
   .setDescription(`NO ${man}!!!! NOOO`)
   .setImage('https://media.giphy.com/media/3o7TKwmnDgQb5jemjK/giphy.gif')
   message.channel.send(embed_no)
  }
}