const commands = {
    name: 'sucemoi',
    category: 'misc',
    handle: (client, message, args) => { 
        message.delete()
       message.reply('est trop beau')
    },
};

module.exports = commands;