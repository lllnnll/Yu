const commands = {
    name: 'ping',
    category: 'message',
    handle: (client, message, args) => {
        message.channel.send(`Pong 🏓, ${client.ws.ping} ms`);
    },
}; 

module.exports = commands; 
