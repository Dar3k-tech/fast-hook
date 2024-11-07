
class Utils {
    static async getOrCreateHook(channel, name, icon, reason) {
        if (!channel.send || !channel.fetchWebhooks) {
            throw new TypeError("[FAST-HOOK] Invalid trigger provided. Must be a GuildChannel or Webhook URL.");
        }

        const webhooks = await channel.fetchWebhooks().catch(() => null);
        if (webhooks) {
            const existingHook = webhooks.find(h => h.owner.id === channel.client.user.id);
            if (existingHook) return existingHook;
        }

        return channel.createWebhook({ name, avatar: icon, reason }).catch(() => null);
    }

    static checkIfWebhook(link) {
        const regex = /^https:\/\/(?:canary\.|ptb\.)?discord\.com\/api\/webhooks\/\d+\/[\w-]+$/;
        return regex.test(link);
    }

    static extractWebhookData(url) {
        const regex = /https:\/\/(?:canary\.|ptb\.)?discord\.com\/api\/webhooks\/(\d+)\/([\w-]+)/;
        const match = url.match(regex);

        if (match) {
            const id = match[1];
            const token = match[2];
            return { id, token };
        } else return null;
    }
}

export default Utils;