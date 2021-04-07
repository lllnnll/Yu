const discord = require('discord.js');
const axios = require('axios');

class commands {
    constructor (name) {
        this.category = 'image';
        this.name = name
    };
    static hasAuto = true

    static template = ['eat','hug','pat','kiss','pout','run','sparkle','tickle','angry','blush','cry','slap','stare','baka','bang','confused','cuddle','dance','feed','handholding','highfive','insult','lewd','pat','poke','shrug','sleepy','smug','wasted'];
    
    async handle(client, message, args) {
        let response = ''
        if (message.mentions.members.first()){
            response = message.author.toString() + ' ' + this.name + ' ' + message.mentions.members.first().toString()
        }
        else {
            response = client.user.toString()+' '+ this.name +' '  + message.author.toString()
        }
        const api = await axios.get('https://yokoso.ohori.me/images/sfw/'+this.name)
        const attachment = new discord.MessageAttachment(api.data.url)
        
        message.channel.send(response,{files:[attachment]})
    };
};

module.exports = commands;