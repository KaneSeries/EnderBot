const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class ProfileCommand extends BaseCommand {
  constructor() {
    super('profile', 'acount', []);
  }

  run(client, message, args) {
      let profile = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}'s Profile`)
      .setDescription('')
     .setThumbnail(message.author.displayAvatarURL())
     .addField("\n\n**Premium Rank: **", '\n*NONE*')
     message.channel.send(profile)
  }
}