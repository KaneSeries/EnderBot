const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Embed_makerCommand extends BaseCommand {
  constructor() {
    super('embed', 'custom', []);
  }

  run(client, message, args) {
    message.channel.send('embed_maker command works');
  }
}