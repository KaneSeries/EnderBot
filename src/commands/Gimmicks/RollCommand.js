const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class RollCommand extends BaseCommand {
  constructor() {
    super('roll', 'Gimmicks', []);
  }

  run(client, message, args) {
    //CONSTRUCT COOLDOWN SET
    const cooldown = new Set();
    const cdseconds = 5;
    //GET ARGUEMENT PRAMS


    //RETURNS RANDOM VAR INT
   var rolled = Math.floor(Math.random() * 6) + 0;
   let embed = new Discord.MessageEmbed()
   .setTitle(`🎲  🎲\n     ${rolled}\n🎲  🎲`)
   .setColor("RANDOM")
   message.channel.send(embed)
  }
}