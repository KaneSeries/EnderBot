const BaseCommand = require('../../utils/structures/BaseCommand');
const ownerId = '692051505188044850' // my discord user ID
const channelId = '793634316844138506' // private channel ID
const {
  MessageEmbed
} = require('discord.js');

module.exports = class EvalCommand extends BaseCommand {
  constructor() {
    super('eval', 'ddOwner', []);
  }

 async run(client, message, args) {
   if (message.author.id !== '692051505188044850') return;
   const embed = new MessageEmbed()
     .setTitle('Evaluating...')
   const msg = await message.channel.send(embed);
   try {
     const data = eval(args.join(' ').replace(/```/g, ''));
     const embed = new MessageEmbed()
       .setTitle('Output: ')
       .setDescription(await data)
     await msg.edit(embed)
     await msg.react('✅')
     await msg.react('❌')
     const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
     msg.awaitReactions(filter, {
         max: 1
       })
       .then((collected) => {
         collected.map((emoji) => {
           switch (emoji._emoji.name) {
             case '✅':
               msg.reactions.removeAll();
               break;
             case '❌':
               msg.delete()
               break;
           }
         })
       })
   } catch (e) {
     const embed = new MessageEmbed()
       .setTitle('An Error has occured')
     return await msg.edit(embed);

   }
  }
  }
