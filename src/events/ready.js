function events(client) {
    console.log('Bot connecté');
    const channel = client.channels.cache.get('800796473934479364')
    channel.send ('Je suis là !👌')

    client.ector.setName(client.user.username);
};

module.exports = events;