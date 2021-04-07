const discord = require('discord.js');

const commands = {
    name: 'uinfo',
    category: 'administration',
    handle: (client, message, args) => {
        var member = message.mentions.members.first() || message.member
        var nickname = member.nickname
        if (nickname == null) { 
            nickname = 't\'en a pas enculer'
        }
        const embed = new discord.MessageEmbed()
            .setTitle('User info')
            .setColor(member.displayHexColor)
            .addField('username',member.user.username,true) 
            .addField('nickname',nickname,true)
            .addField('color',member.displayHexColor,true)
            .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
         message.channel.send (embed)
    },
}; 
module.exports = commands;