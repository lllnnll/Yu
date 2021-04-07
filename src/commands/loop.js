const commands = {
    name: 'loop',
    category: 'music',
    handle: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send('You must join a channel before execute this command');
        if (message.member.voice.channel.id != message.guild.me.voice.channel.id) return message.channel.send('You must be in the same channel as me');

        let music = client.musics.get(message.guild.id);

        if (!music) return message.channel.send('I\'m not playing now');
        
        if (!music.dispatcher) return message.channel.send('I\'m not playing now');
        // yu!loop on/once/off (empty)
        if (!args.join('')) {
            if (music.loop == 'off') {
                music.loop = 'on';
                message.react('🔁');
            } else if (music.loop == 'on') {
                music.loop = 'once';
                message.react('🔂');
            } else {
                music.loop = 'off';
                message.react('➡️');
            };
        } else {
            let type = args.join('');
            if (['off', 'on', 'once'].includes(type.trim().toLowerCase())) {
                music.loop = type;
                /* if (condition) {code true} else {code false} */
                /* condition ? code true : code false*/
                message.react(music.loop == 'off' ? '➡️' : music.loop == 'on' ? '🔁' : '🔂');
            } else {
                return message.channel.send('Please choose between off, on or once !');
            };
        };
    },
};

module.exports = commands;