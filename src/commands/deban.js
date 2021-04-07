const commands = {
    name: 'unban',
    category: 'administration',
    handle: (client, message, args) => { 
        if (!message.member.hasPermission('ADMINISTRATOR',{checkAdmin:true})){
            message.channel.send('t\'es pas admin sale hmar')
            return
        }
        message.guild.members.unban(args.join(''))
  .then(user => message.channel.send(`j'ai unban ${user.username} de ${message.guild.name}`))
  .catch(err=> {
      message.channel.send('je peux pas le deban hmar')
  });
    },
};

module.exports = commands;