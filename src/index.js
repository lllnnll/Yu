const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');
const config = require ('./../config');
const Ector = require('ector');

client.prefix = '_'
client.commands = new discord.Collection();
client.musics = new discord.Collection();
client.reactionrole = new discord.Collection();
client.ector = new Ector();

// ['ready.js', 'message.js']
const eventsFiles = fs.readdirSync('./src/events');

for (const element of eventsFiles) {
    const event = require(`./events/${element}`);

    client.on(element.split('.')[0], (...args) => event(client, ...args));
};

// ['ping.js']
const commandFiles = fs.readdirSync('./src/commands');

for (const element of commandFiles) {
    const command = require(`./commands/${element}`);
    if (command.hasAuto){
        command.template.forEach((item) => {
            const cmd = new command (item)
            client.commands.set(cmd.name,cmd);
        })
    }
    else {
        client.commands.set(command.name,command);
    }
};

client.login(config.token);