module.exports = {
    name: 'ping',
    description: 'Responds with Pong!',
    execute(interaction, options) {
        return interaction.reply("Pong!");
    }
  }