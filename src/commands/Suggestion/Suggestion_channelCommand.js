const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
module.exports = class Suggestion_channelCommand extends BaseCommand {
  constructor() {
    super('suggestionchannel', 'Suggestion', []);
  }

  run(client, message, args) {

if (!message.member.guild.me.hasPermission('ADMINISTRATOR')){
  let invalid_perms = new Discord.MessageEmbed()
  console.log("Doesn't have permission")

  .setTitle("Error")
  .setDescription("It looks like your missing the permisson: \n `ADMINISTRATOR`")
  message.channel.send(invalid_perms)
}

let set_embed = new Discord.MessageEmbed()
  .setTitle("Done!")
  .setColor("GREEN")
  .setFooter("Set by: " + message.author.username)
    
let checkChannel = message.mentions.channels.first().id;
set_embed.setDescription("This channel is now set as a suggestion channel! \n\n" + `<#${checkChannel}>`)
client.channels.cache.get(checkChannel).send(set_embed);

}
}