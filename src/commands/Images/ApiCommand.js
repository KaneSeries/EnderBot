const BaseCommand = require('../../utils/structures/BaseCommand');
const got = require('got');
  const Discord = require('discord.js');
module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('api', 'Images', []);
  }

  async run(client, message, args) {
      message.channel.send('https://www.reddit.com/r/cat/random/.json \n https://www.reddit.com/r/dog/random/.json \n https://www.reddit.com/r/meme/random/.json')
  }
}