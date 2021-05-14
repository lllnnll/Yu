const ms = require('ms')

const commands = {
    name: 'parle',
    category: 'administration',
    handle: (client, message, args) => { 
        if (!message.mentions.members.first()) 
            return message.channel.send('tu doit mentionner quelqu\'un')
        
        message.mentions.members.first().voice.setMute(false,'parle')

    },
};

module.exports = commands;