const discord = require('discord.js');

const commands = {
    name: 'ginfo',
    category: 'administration',
    handle: (client, message, args) => {
        const embed = new discord.MessageEmbed()
            .setTitle('Guild info')
            .setColor(message.member.displayHexColor)
            .addField('Server Name: ',message.guild.name)
            .setThumbnail(message.guild.iconURL())
            .addField('Server Image: ', message.guild.iconURL())
            .addField('Number of Channel: ', message.guild.channels.cache.filter(channel => channel.type != 'category').size ,true)
            .addField('Member: ' , message.guild.members.cache.filter(member => !member.user.bot).size ,true)
            .addField('Bot: ' , message.guild.members.cache.filter(member => member.user.bot).size ,true)
            .addField('Role: ' , message.guild.roles.cache.size ,true)
            .addField('Emoji: ' , message.guild.emojis.cache.size ,true)
            .addField('Online: ' , message.guild.members.cache.filter(member => !member.user.bot).filter(member =>member.user.presence.status == 'online').size ,true)
            .addField('Idle: ' , message.guild.members.cache.filter(member => !member.user.bot).filter(member =>member.user.presence.status == 'idle').size ,true)
            .addField('Offline: ' , message.guild.members.cache.filter(member => !member.user.bot).filter(member =>member.user.presence.status == 'offline').size ,true)
            .addField('Do not Disturb: ' , message.guild.members.cache.filter(member => !member.user.bot).filter(member =>member.user.presence.status == 'dnd').size ,true)
        
         message.channel.send (embed)
    },
}; 
            


module.exports = commands;