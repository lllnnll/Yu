const discord = require('discord.js');
const axios = require('axios');

class commands {
    constructor (name) {
        this.category = 'nsfw';
        this.name = name
    };
    static hasAuto = true

    static template = ['neko','yuri'];
    
    async handle(client, message, args) {
        let response = ''
        if (message.mentions.members.first()){
            response = message.author.toString() + ' ' + this.name + ' ' + message.mentions.members.first().toString()
        }
        else {
            response = client.user.toString()+' '+ this.name +' '  + message.author.toString()
        }
        if (!message.channel.nsfw) {
            return message.channel.send ('c pas le bon salon mon cochon ( •̀ ω •́ )✧')
        }
        const api = await axios.get('https://yokoso.ohori.me/images/nsfw/'+this.name+'?allownsfw=true')
        const attachment = new discord.MessageAttachment(api.data.url)
        
        message.channel.send(response,{files:[attachment]})
    };
};

module.exports = commands;