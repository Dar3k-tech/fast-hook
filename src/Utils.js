
class Utils {
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