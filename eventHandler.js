module.exports = (client) => {

    // This is just a basic event handler nothing special all you need to do is just pass in your client variable and require this class in your entry point class
    // and do eventHandler(client);

    client.once('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
      
        // Register slash commands when the bot is ready
        client.application.commands.set(client.commands).then(() => {
          console.log('Successfully registered application (/) commands.');
        }).catch(console.error);
      });


      client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return;
    
        const { commandName, options } = interaction;
    
        const command = client.commands.get(commandName)
    
        if(!command) return;
    
        try {
            command.execute(interaction, options);
          } catch (error) {
            console.error(error);
          }
    });

}