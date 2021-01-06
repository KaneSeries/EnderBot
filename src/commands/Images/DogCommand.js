const BaseCommand = require('../../utils/structures/BaseCommand');
const got = require('got');
  const Discord = require('discord.js');
module.exports = class MemeCommand extends BaseCommand {
  constructor() {
    super('dog', 'Images', []);
  }

  async run(client, message, args) {
const embed = new Discord.MessageEmbed();
got('https://www.reddit.com/r/dog/random/.json')
  .then(response => {
    const [list] = JSON.parse(response.body);
    const [post] = list.data.children;

    const permalink = post.data.permalink;
    const memeUrl = `https://reddit.com${permalink}`;
    const memeImage = post.data.url;
    const memeTitle = post.data.title;
    const memeUpvotes = post.data.ups;
    const memeNumComments = post.data.num_comments;

    embed.setTitle(`${memeTitle}`);
    embed.setURL(`${memeUrl}`);
    embed.setColor('RANDOM');
    embed.setImage(memeImage);
    embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

    message.channel.send(embed);
  })
  .catch(console.error);
  }
}