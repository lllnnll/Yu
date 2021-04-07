const commands = {
    name: 'quit',
    category: 'music',
    handle: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send('You must join a channel before execute this command');
        message.member.voice.channel.quit();

    },
};

module.exports = commands;