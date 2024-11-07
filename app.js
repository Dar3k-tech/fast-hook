import Discord from 'discord.js';
import Utils from './utils.js';

/**
 * @typedef {Object} SendOptions
 * @property {string|null} [webhookName] - Webhook name in channel integrations tab
 * @property {string|"No username provided"} [username] - Username for webhook
 * @property {string|null} [icon] - Avatar for webhook ( must be URL to image )
 * @property {string|"Fast-hook module for discord bots"} [reason] - Reason for creating webhook in provided channel
 * @property {string|"No content provided"} [content] - Message content for webhook
 * @property {Array|null} [embeds] - Array with embeds to send ( Check readme.md for more info )
 * @property {Array|null} [files] - Array with files to send ( Check readme.md for more info )
 * @property {Array|null} [components] - Array with files to send ( Check readme.md for more info )
 * @property {boolean} [mentions] - Allow mentions in webhook message
 * @property {boolean} [silent] - Send message in silent mode
 * @property {Object|null} [poll] - Object with poll to send ( Check readme.md for more info )
 */

class FastHook {

    /**
     * Sends a message via a webhook quickly.
     *
     * @param {Discord.TextChannel | string} trigger - Text channel or Webhook URL to send message to.
     * @param {SendOptions} [options={ webhookName = null, username = "No username provided", icon = null, reason = "Fast-hook module for discord bots", content = "No content provided", embeds = null, files = null, components = null, mentions = false, silent = false, poll = null }] - Options for webhook message.
     * @returns {Promise<Discord.Message|undefined>}
     */
    static async send(trigger, options = {}) {
        const {
            webhookName = null,
            username = "No username provided",
            icon = null,
            reason = "Fast-hook module for discord bots",
            content = "No content provided",
            embeds = null,
            files = null,
            components = null,
            mentions = false,
            silent = false,
            flags = [],
            poll = null
        } = options;

        try {
            let hook;

            if (!trigger) {
                throw new TypeError("[FAST-HOOK] You must provide a valid trigger (GuildChannel or Webhook URL)");
            }

            const messagePayload = {
                content,
                embeds,
                files,
                components,
                poll,
                flags: silent ? [...flags, 4096] : flags,
                allowedMentions: mentions ? undefined : { parse: [] }
            };

            if (Utils.checkIfWebhook(trigger)) {
                const { id, token } = Utils.extractWebhookData(trigger);
                hook = new Discord.WebhookClient({ id, token });
            } else {
                const permissions = trigger.guild.members.me.permissionsIn(trigger);
                if (!permissions.has("ManageWebhooks")) {
                    if (permissions.has("SendMessages")) {
                        return await trigger.send(messagePayload);
                    } else {
                        throw new TypeError("[FAST-HOOK] Missing permissions to send messages or manage webhooks.");
                    }
                }

                hook = await Utils.getOrCreateHook(trigger, webhookName, icon, reason);
            }

            if (!hook) {
                throw new TypeError("[FAST-HOOK] Failed to initialize webhook. Check permissions and channel or webhook url setup.");
            }

            Object.assign(messagePayload, {
                username,
                avatarURL: icon
            });

            return await hook.send(messagePayload);
        } catch (error) {
            throw new TypeError(`[FAST-HOOK] An error occurred while sending the webhook message: ${error.message}`);
        }
    }
}

export default FastHook;
