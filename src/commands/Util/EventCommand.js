const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const ms =require('ms')
module.exports = class GiveawayCommand extends BaseCommand {
  constructor() {
    super('event', 'Util', []);
  }

  async run(client, message, args) {
    const messageArray = message.content.split(" ");
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("You don't have enough permissions to start a evemt !")
    var item = "";
    var time;
    var winnerCount;
    for (var i = 1; i < args.length; i++) { 
      item += (args[i] + " ");
    }
    time = args[0];
    if (!time) {
      return message.channel.send(`Invalid duration provided`);
    }
    if (!item) {
      item = "No title"
    }
    var embed = new Discord.MessageEmbed();
    embed.setColor(0x3333ff);
    embed.setTitle("New Event !");
    embed.setDescription("**" + item + "**");
    embed.addField(`Duration : `, ms(ms(time), {
      long: true
    }), true);
    embed.setFooter("Hosted by " + message.author.tag);
    var embedSent = await message.channel.send(embed);
    embedSent.react("😀");
    embedSent.react('😃');
    embedSent.react('😄');
    embedSent.react('😁');
    embedSent.react('😅');
    embedSent.react('😂');
    embedSent.react('🤣');
    embedSent.react('😊');
    embedSent.react('😇');
    embedSent.react('😉');
    embedSent.react('😌');
    embedSent.react('😍');
    embedSent.react('🥰');
    embedSent.react('😘');
    embedSent.react('😗');
    embedSent.react('😋');
    embedSent.react('😛');
    embedSent.react('😝');
    embedSent.react('😜');
    embedSent.react('🤪');


    
  }
  }