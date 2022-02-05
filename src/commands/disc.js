const commands = {
    name: 'disc',
    category: 'ia',
    handle: (client, message, args) => {
        client.ector.setUser(message.author.username)

        client.ector.addEntry(args.join(' '));

        message.channel.send(client.ector.generateResponse().sentence);
    },
};

module.exports = commands;