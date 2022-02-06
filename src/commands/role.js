const discord = require('discord.js');

const commands = {
    name: 'role',
    category: 'administration',
    handle: async (client,message,args) => {
        message.channel.send(`Voici les roles :`);
        msgBot = await message.channel.send('Valorant / LoL / CS:GO / Genshin / Forza / RL');
        msgBot.react('😮');
        msgBot.react('🚿');
        msgBot.react('😎');
        msgBot.react('🍆');
        msgBot.react('🚗');
        msgBot.react('⚽');
        client.reactionrole.set(msgBot.id, {
            messageid:msgBot.id,
            reactions: {'😮':'Valorant',
            '🚿':'LoL',
            '😎':'CS:GO',
            '🍆':'Genshin'
            ,'🚗':'Forza'
            ,'⚽':'RL'
        }

        })
    }
}; 

module.exports = commands;