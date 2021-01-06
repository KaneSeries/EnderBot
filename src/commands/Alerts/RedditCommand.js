const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const https = require('https');
const axios =  require('axios')
module.exports = class RedditCommand extends BaseCommand {
  constructor() {
    super('reddit', 'Alerts', []);
  }

  async run(client, message, args) {

//GET SUB URL
const url = `https://www.reddit.com/r/${args[0]}/new/.json?limit=100`



//GET LATEST


//GET SUBREDDIT



if(!args[0]){
   let no_arg = new Discord.MessageEmbed()
  .setTitle("❌ INVALID ❌")
  .setDescription("You didnt specify which subreddit you would like to recieve alerts from")
  .addField("**COMMAND USAGE**", '`--reddit funny`')
  .setFooter("be sure not to put `r/` in front of the argument")
  .setColor('RED')
  message.channel.send(no_arg)
  message.channel.send(args)
}else{



//CREATE PRIM. WEBHOOK1
var wbenme = args[0].toLowerCase()
var hook =  message.channel.createWebhook(`r/${wbenme} • ALERTS `, {
  avatar: `https://cdn.discordapp.com/attachments/793634316844138506/793903314408439888/jYjXOJT.png`,
})
	.then(webhook => console.log(`Created webhook ${webhook}`))
    .catch(console.error);
    let unrealesed = new Discord.MessageEmbed()
    .setTitle("🚧 Under Matience 🚧")
    .setDescription('This command is unavaliabe, but the webhook was created, read on to find out why its  unavaliable')
    .addField('**REASON**', 'The webhooks api is having trouble connecting to the reddit api therefore it can not recieve data.')
    message.channel.send(unrealesed)    
    message.channel.send(url)

}

}


}