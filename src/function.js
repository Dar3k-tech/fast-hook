import Discord from 'discord.js'
import Utils from './utils.js';

class fastHook {

    static async send(trigger, options = {
        webhookName: null,
        username: "No username provided",
        icon: null,
        reason: "Fast-hook for bot",

        content: "No content provided",
        embeds: null,
        files: null,
        components: null,
        mentions: false,
        silent: false,
        flags: [],
        poll: null
    }) {

        try {

            let hook;

            if(!trigger)
                return new TypeError("[FAST-HOOK] You must provide trigger (GuildChannel or Webhook URL)")

            else {

                if(Utils.checkIfWebhook(trigger)) {

                    const webhookData = Utils.extractWebhookData(trigger)

                    hook = new Discord.WebhookClient({
                        id: webhookData.id,
                        token: webhookData.token
                    }) || undefined;

                } else if(!trigger.send && !trigger.fetchWebhooks())
                    return new TypeError("[FAST-HOOK] You must provide trigger (GuildChannel or Webhook URL)")
                else if(!hook) {
                    await trigger.fetchWebhooks()
                        .then((hooks) => {
                            if (!hooks)
                                return;

                            hook = hooks.find(hook => hook.owner.id === trigger.client.user.id) || undefined
                        })
                        .catch((err) => {
                            return new TypeError("[FAST-HOOK] Failed to fetch/find webhooks from/in provided channel")
                        })
                }
                if(!hook && trigger.send) {

                    hook = await trigger.createWebhook({
                        name: options.webhookName || trigger.client.user.username,
                        avatar: options.icon || trigger.client.user.displayAvatarURL(),
                        reason: options.reason
                    }).catch((err) => {
                        return new TypeError(`[FAST-HOOK] I don't have permissions to create/manage webhooks; #${trigger.name} (${trigger.id}) at guild ${trigger.guild.name} (${trigger.guild.id})`)
                    });
                } else if(!hook && !trigger)
                    return new TypeError("[FAST-HOOK] Invalid method to send webhook. Please provide trigger (GuildChannel or Webhook URL)")
            }

            if(hook) {

                const messagePayload = {
                    username: options.username,
                    avatarURL: options.icon,

                    content: options.content,
                    embeds: options.embeds,
                    files: options.files,
                    components: options.components,
                    flags: options.flags || [],
                    poll: options.poll,
                }

                if(!options.mentions)
                    messagePayload.allowedMentions = { parse: [] }

                if(options.silent)
                    messagePayload.flags.push(4096);

                return await hook.send(messagePayload);
            }

        } catch (e) {
            throw new TypeError(`[FAST-HOOK] Something went wrong (Probably something in message content must same like in docs - https://discord.js.org/docs/packages/discord.js/14.16.3/MessageCreateOptions:Interface) ${e}`);
        }
    }
}

export default fastHook;