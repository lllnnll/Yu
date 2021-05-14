const discord = require('discord.js');

const commands = {
    name: 'eval',
    category: 'administration',
    handle: (client, message, args) => {
        const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
              if(!['304658715099922434', '363603951163015168'].includes(message.author.id)) return;
              try {
                const code = args.join(" ");
                let evaled = eval(code);
           
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
           
                message.channel.send(clean(evaled), {code:"xl"});
              } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
              }
    },
}; 
            


module.exports = commands;