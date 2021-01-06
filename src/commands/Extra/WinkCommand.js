const BaseCommand = require('../../utils/structures/BaseCommand');
const {
  MessageEmbed
} = require('discord.js');
const axios = require('axios');

module.exports = class WinkCommand extends BaseCommand {
  constructor() {
    super('wink', 'Extra', []);
  }

 async run(client, message, args) {
const url = 'https://some-random-api.ml/animu/wink';

let response, data;
try {
  response = await axios.get(url);
  data = response.data;
} catch (e) {
  return message.channel.send(`An error occured!`)
}

const embed = new MessageEmbed()
  .setTitle(`@${message.author.username} winks at @${message.mentions.users.first() || message.mentions.members.first()}`)
  .setImage(data.link)

await message.channel.send(embed)
}
}