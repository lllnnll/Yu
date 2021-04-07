const play = require('./../lib/music').play;

const commands = {
    name: 'play',
    category: 'music',
    handle: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send('You must join a channel before execute this command');

        let music = client.musics.get(message.guild.id);

        if (!music) {
            client.musics.set(message.guild.id, {
                connection: null,
                dispatcher: null,
                queue: [],
                index: 0,
                loop: 'off',
                volume: 1,
            });

            music = client.musics.get(message.guild.id);
        };

        music.connection = await message.member.voice.channel.join();
        
        if (!args[0]) return message.channel.send('Sale hmar, met un lien youtube');

        if (music.dispatcher) {
            music.queue.push(args[0]);

            client.musics.set(message.guild.id, music);
            message.channel.send('I saved your url');
        } else {
            music.queue.push(args[0]);
            play(client, message);
            message.channel.send('I\'m playing music');
        };
    },
};

module.exports = commands;