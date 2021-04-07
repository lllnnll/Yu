function events(client,messageReaction,user) {
    if (user.bot) return
    const rr = client.reactionrole.get(messageReaction.message.id)
    if (!rr) return
    if (!rr.reactions[messageReaction.emoji.name]) return
    const role = messageReaction.message.guild.roles.cache.find(r => r.name == rr.reactions[messageReaction.emoji.name])
    if (!role) return
    messageReaction.message.guild.member(user).roles.add(role) 
};

module.exports = events;