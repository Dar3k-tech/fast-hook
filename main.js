module.exports = async(options = {}) => {

    options = {
        channel: options.channel || null,
        message: options.message || null,
        embeds: options.embeds || null,
        attachments: options.attachments || null,
        components: options.components || null,
        mentions: options.mentions || false,
        name: options.name || (options.channel.client.user.username || "Bot"),
        icon: options.icon || (options.channel.client.user.displayAvatarURL({dynamic: true}) || ""),
    }
    if (!options.channel)
        return console.log(`[FAST-HOOK] Invalid channel.`);
    if (!options.channel.send || !options.channel.fetchWebhooks)
        return console.log(`[FAST-HOOK] Invalid channel.`)
    if (!options.message)
        return console.log(`[FAST-HOOK] Invalid message/embed.`)


    let webhooks = await options.channel.fetchWebhooks().catch(() => {
        console.log(`[FAST-HOOK] Can't fetch webhooks in #${options.channel.name} (${options.channel.id}) at guild ${options.channel.guild.name} (${options.channel.guild.id})`)
    });

    if (!webhooks) return;

    let hook = webhooks.find(w => w.name === options.channel.client.user.username)

    if (!hook) {
        try {
            hook = await options.channel.createWebhook(options.channel.client.user.username || "Ups", {
                avatar: options.channel.client.user.displayAvatarURL({dynamic: true}) || ""
            });
        } catch (err) {
            console.log(`[FAST-HOOK] Can't create webhook in #${options.channel.name} (${options.channel.id}) at guild ${options.channel.guild.name} (${options.channel.guild.id})`)
        }
    }

    if(options.mentions) {
        return await hook.send({
            content: options.message,
            username: options.name,
            avatarURL: options.icon,
            embeds: options.embeds,
            files: options.attachments,
            components: options.components
        });
    } else {
        return await hook.send({
            content: options.message,
            username: options.name,
            avatarURL: options.icon,
            embeds: options.embeds,
            files: options.attachments,
            components: options.components,
            allowedMentions: {parse: []}
        });
    }

}