const discord = require('discord.js');

const commands = {
    name: 'help',
    category: 'misc',
    handle: (client, message, args) => {
        const embed = new discord.MessageEmbed()
            .setTitle('help:')
            .setColor('RANDOM');

        const categorys = {};

        for (const cmd of client.commands.array()) {
            // cmd.category -> misc
            // categorys.misc
            if (categorys[cmd.category]) {
                categorys[cmd.category].push(cmd.name);
            } else {
                categorys[cmd.category] = [cmd.name];
            };
        };

        for (const command of Object.entries(categorys)) {
                  // ^ -> ['misc', ['ping', 'help']]
            embed.addField(`${command[1].length} - ${command[0]}`, command[1].join(', '));
        };                    //nbr de commande    //nom de la category   //transformer le array en string 

        return message.channel.send(embed);
    },
}; 

module.exports = commands; 
