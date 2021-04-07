function events(client,messageReaction,user) {
    const rr = client.reactionrole.get(messageReaction.message.id)
    if (!rr) return
    if (!rr.reactions[messageReaction.emoji.name]) return
    const role = messageReaction.message.guild.roles.cache.find(r => r.name == rr.reactions[messageReaction.emoji.name])
    if (!role) return
    messageReaction.message.guild.member(user).roles.remove(role) 
};

module.exports = events;