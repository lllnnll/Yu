const ms = require('ms')

const commands = {
    name: 'chut',
    category: 'administration',
    handle: (client, message, args) => { 
        if (!message.mentions.members.first()) 
            return message.channel.send('tu doit mentionner quelqu\'un') 

        if (!message.mentions.members.first().voice.channel ) 
            return message.channel.send('he must be in a channel / il doit etre dans un channel ')
        let temps = args[1]
        
        message.mentions.members.first().voice.setMute(true,'tg')

        if (temps) {
            setTimeout(() => {
                message.mentions.members.first().voice.setMute(false,'c bon ta fermer ta geule')
            }, ms(temps));
        } 
    },
};

module.exports = commands;