module.exports = async(channel, message, options = {}, attachment, components) => {

    if (!channel)
        return console.log(`[FAST-HOOK] Invalid channel.`);
    if (!channel.send || !channel.fetchWebhooks)
        return console.log(`[FAST-HOOK] Invalid channel.`)
    if (!message)
        return console.log(`[FAST-HOOK] Invalid message/embed.`)
    options = {
        mentions: options.mentions,
        name: options.name || (channel.client.user.username || "Bot"),
        icon: options.icon || (channel.client.user.displayAvatarURL({dynamic: true}) || ""),
        attachments: options.attachments || false,
        components: options.components || false
    }

    let webhooks = await channel.fetchWebhooks().catch(() => {
        console.log(`[FAST-HOOK] Can't fetch webhooks in #${channel.name} (${channel.id}) at guild ${channel.guild.name} (${channel.guild.id})`)
    });

    if (!webhooks) return;

    let hook = webhooks.find(w => w.name === channel.client.user.username)

    if (!hook) {
        try {
            hook = await channel.createWebhook(channel.client.user.username || "Ups", {
                avatar: channel.client.user.displayAvatarURL({dynamic: true}) || ""
            });
        } catch (err) {
            console.log(`[FAST-HOOK] Can't create webhook in #${channel.name} (${channel.id}) at guild ${channel.guild.name} (${channel.guild.id})`)
        }
    }

    if (typeof message !== 'string' && ['MessageEmbed'].includes(message.constructor.name)) {
        options.embeds = [message];
        message = null;
    }

    let callback;

    if (options.mentions || options.attachments || options.components) {
        callback = await hook.send({
            content: message,
            username: options.name,
            avatarURL: options.icon,
            embeds: options.embeds,
            files: [attachments],
            components: [components]
        });
    } else {
        callback = await hook.send({
            content: message,
            username: options.name,
            avatarURL: options.icon,
            embeds: options.embeds,
            allowedMentions: {parse: []}
        });
    }

    return callback;
}
