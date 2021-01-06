const BaseCommand = require('../../utils/structures/BaseCommand');
const Commando = require('discord.js-commando');
const Discord = require('discord.js')
module.exports = class AnnouncementCommand extends BaseCommand {
  constructor() {
    super('announcement', 'Util', []);
  }

  run(client, message, args) {
this.client.guilds.array().forEach((guild) => {
  let channels = guild.channels.filter((channel) => {
    return channel.type === 'text' && channel.permissionsFor(guild.me).has(['VIEW_CHANNEL', 'SEND_MESSAGES']);
  });
  if (channels.array().length > 0) {
    channels = channels.sort((a, b) => {
      return a.calculatedPosition - b.calculatedPosition;
    }).array();
    channels[0].send(args.msg).catch(e => console.error(e));
  }
});
}
}