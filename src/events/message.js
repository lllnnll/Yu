function event(client, message) {
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.content.startsWith(client.prefix)) return;

    // play lien  -> ['lien']
    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.find((command) => command.name == cmd);

    if (!command) return message.channel.send('Command not found🤔');

    command.handle(client, message, args);
};

module.exports = event;