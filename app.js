const { Client, Intents, Interaction, CommandInteraction, Collection } = require('discord.js');
const fs = require("fs");
const eventHandler = require("./eventHandler");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  });

eventHandler(client);


// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const BOT_TOKEN = 'YOUR_BOT_TOKEN';
 // If you are using something like replit for bot hosting then put this in their enviroment table.


client.commands = new Collection()

const commandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./slashCommands/${file}`);
  console.log(`Registered command: ${command.name}`);
  client.commands.set(command.name, command);
}

client.login(BOT_TOKEN);