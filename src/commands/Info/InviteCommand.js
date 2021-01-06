const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'Info', []);
  }

  run(client, message, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("✅ Invite The Bot! ✅")
    .setDescription("Click on the text above to be redirected")
    .setURL('https://discord.com/api/oauth2/authorize?client_id=793666845731323934&permissions=8&scope=bot')
    message.channel.send(embed)
  }
}