const commands = {
    name: 'incruste',
    category: 'administration',
    handle: async (client, message, args) => { 
        if (!message.member.voice.channel) return message.channel.send('You must join a channel before execute this command');
        message.member.voice.channel.join();
        message.channel.send(`Wesh je m'incruste`);
    },
};

module.exports = commands;