const BaseCommand = require('../../utils/structures/BaseCommand');
const {
  MessageEmbed
} = require('discord.js');

module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('lock', 'Moderation', []);
  }

 async run(client, message, args) {
   const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                      CONNECT: false,
                        VIEW_CHANNEL: false,


                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('locked all channels');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true,
                                          CONNECT: true,
  VIEW_CHANNEL: true,

                }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }
                )
            })
            return message.channel.send('unlocked all channels')
        }  }
}