const commands = {
    name: 'resume',
    category: 'music',
    handle: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send('You must join a channel before execute this command');
        if (message.member.voice.channel.id != message.guild.me.voice.channel.id) return message.channel.send('You must be in the same channel as me');

        let music = client.musics.get(message.guild.id);

        if (!music) return message.channel.send('I\'m not playing now');
        
        if (!music.dispatcher) return message.channel.send('I\'m not playing now');
        
        music.dispatcher.resume();
    },
};

module.exports = commands;