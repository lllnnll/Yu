const commands = {
    name: 'ban',
    category: 'administration',
    handle: (client, message, args) => { 
        const member = message.mentions.members.first()
        if (member == null) {
            message.channel.send('aucune mention ๐คจ')
            return
        }
        if (!message.member.hasPermission('ADMINISTRATOR',{checkAdmin:true})){
            message.channel.send('t\'es pas admin sale hmar')
            return
        }
        member.ban({reason: 'Cheh'}).then(()=>{
            message.channel.send('banned ๐')
        }).catch(err => {})
    },
};

module.exports = commands;