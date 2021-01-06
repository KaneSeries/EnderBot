const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class GayCommand extends BaseCommand {
  constructor() {
    super('coinflip', 'Gimmicks', []);
  }

  run(client, message, args) {
  function doRandHT() {
    var rand = ['HEADS!', 'TAILS!'];

    return rand[Math.floor(Math.random() * rand.length)];
  }

  const embed = {
    "title": `Here is the winner!`,
    "description": doRandHT(),
    "color": 7584788,
  };
  message.channel.send({
    embed
  });
  }
}