const { GuildMember } = require("discord.js");

const commands = {
    name: 'kick',
    category: 'administration',
    handle: (client, message, args) => { 
        const member = message.mentions.members.first()
        if (member == null) {
            message.channel.send('aucune mention 🤨')
            return
        }
        if (!message.member.hasPermission('ADMINISTRATOR',{checkAdmin:true})){
            message.channel.send('t\'es pas admin sale hmar')
            return
        }
        member.kick('casse les couilles')
    },
};

module.exports = commands;