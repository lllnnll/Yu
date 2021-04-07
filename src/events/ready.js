function events(client) {
    console.log('Bot connecté');
    const channel = client.channels.cache.get('800796473934479364')
    channel.send ('Je suis là !👌')
};

module.exports = events;