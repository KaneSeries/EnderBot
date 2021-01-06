const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = class OnewordCommand extends BaseCommand {
  constructor() {
    super('oneword', 'ChannelSettings', []);
  }

  run(client, message, args) {
    let setupdone = new Discord.MessageEmbed()
      .setTitle("Success!")
      .setDescription("Channel has been successfuly set as the one word channel")
      if(args[0]&& !args[1] == 'setup'){
        let setup = new Discord.MessageEmbed()
        .setTitle("Setup")
        .setDescription("In order to setup this event up you must specify a channel, an example will be shown below")
        .addField("**Example**", '`--oneword setup 79363118755715837`')
        .setFooter("Dont try to attempt the command with the id shown in the example, it will not work")
        message.channel.send(setup)
      }
      var channelid = args[1];
      var channeltosend = client.channels.cache.get(channelid)
      channeltosend.setName('one word')
  }}