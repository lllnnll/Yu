const discord = require('discord.js');
const axios = require ('axios')

const commands = {
    name: 'betrayal',
    category: 'game',
    handle: async (client, message, args) => {
        const channel = message.mentions.channels.first()
        if (!channel) return message.reply('zebi t trop con')
        await axios ({
            url: 'https://discord.com/api/v8/channels/' + channel.id + '/invites',
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization:'Bot ' + client.token,
                'User-Agent':'DiscordBot (1.0.0);toz'
            },
            data:{
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400",
                target_type: 2,
                temporary: false,
                validate: null,
            }
        }).then(({data:{code}})=>{
            if (!code) return message.reply('triplement con')
            message.reply('links: https://discord.gg/' + code )
        }).catch(()=>message.reply('error'))
    },
}; 
module.exports = commands;