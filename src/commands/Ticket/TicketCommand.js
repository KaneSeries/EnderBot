const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const Client = new Discord.Client();

module.exports = class TicketCommand extends BaseCommand {
  constructor() {
    super('ticket', 'Ticket', []);
  }

  run(client, message, args) {
    var enabled = Boolean;
   if(args[0] == 'disable'){
      var enabled = false;
     message.channel.send("I disabled the command, do `--ticket enable` to enable it")
   }

   if (args[0] == 'enable') {
     var enabled = true;
     message.channel.send("I enabled the command, do `--ticket disable` to disable it")
   }
     if(enabled == true && args[0] == undefined){
   const reason = message.content.split(" ").slice(1).join(" ");
   if (message.guild.channels.cache.find(c => c === `ticket-${message.author.id}`)) return message.channel.send(`You already opened a ticket.`);
   message.guild.channels.create(`ticket-${message.author.id}`, "text").then(c => {
     let role2 = message.guild.cache.roles.find("name", "@everyone");
     c.overwritePermissions(role, {
       SEND_MESSAGES: true,
       READ_MESSAGES: true
     });
     c.overwritePermissions(role2, {
       SEND_MESSAGES: false,
       READ_MESSAGES: false
     });
     c.overwritePermissions(message.author, {
       SEND_MESSAGES: true,
       READ_MESSAGES: true
     });
     message.channel.send(`Your ticket is opened, #${c.name}.`);
     const embed = new Discord.MessageEmbed()
       .setColor(0xCF40FA)
       .addField(`Hey ${message.author.username}!`, `Your Ticket is opened.`)
       .setTimestamp();
     c.send({
       embed: embed
     });
     message.delete();
   }).catch(console.error);
   }
  else{
    return;
  }}
   }