const ytdl = require('ytdl-core');

async function play(client, message) {
    const music = client.musics.get(message.guild.id);

    if (music.queue.length < 1) return message.channel.send('Queue is empty');

    music.dispatcher = await music.connection.play(
        ytdl(music.queue[music.index], {
            filter: 'audioonly',
        }),
        {
            volume: music.volume,
        },
    );
    
    music.dispatcher.on('finish', () => {
        // END
        music.dispatcher = null;

        // loop
        if (music.loop == 'off') {
            // on supprime le 1er element de l'array
            music.queue.shift();

            if (music.index > music.queue.length-1) {
                music.index = 0;
            };

        } else if (music.loop == 'on') {
            music.index++;
            if (music.index > music.queue.length-1) {
                music.index = 0;
            };
        };

        /**
         *
         * url 2 - 0 <- index 
         * url 3 - 1
         * url 4 - 2 
         *  -****    
         */

        play(client, message);
    });
};

module.exports.play = play;