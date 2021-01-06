const BaseCommand = require('../../utils/structures/BaseCommand');
  const {
    MessageEmbed
  } = require('discord.js');
  const axios = require('axios');
module.exports = class BinaryCommand extends BaseCommand {
  constructor() {
    super('binary', 'Extra', []);
  }

  async run(client, message, args) {
 const url = `http://some-random-api.ml/binary?text=${args}`;

 let response, data;
 try {
   response = await axios.get(url);
   data = response.data;
 } catch (e) {
   return message.channel.send(`An error occured, please try again! \n\n **ERROR** \n\n ${e}`)
 }

 const embed = new MessageEmbed()
   .setTitle('Text to Binary')
   .setDescription(data.binary)

 await message.channel.send(embed)
 }
}