const commands = {
    name: 'degage',
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
        if (!member.voice.channel) return message.channel.send('He is not in a vocal');
        member.voice.kick('casse les couilles')
    },
};

module.exports = commands;