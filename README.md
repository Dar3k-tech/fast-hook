

# 💨 ・ fast-hook ・ 💨

---
The package is a module that makes it easy to work with webhooks (discord.js). With fast-hook, you can enter only the required variables and the webhook will be sent quickly.

[![downloadsBadge](https://img.shields.io/npm/dt/fast-hook?style=for-the-badge)](https://npmjs.com/fast-hook)
[![versionBadge](https://img.shields.io/npm/v/fast-hook?style=for-the-badge)](https://npmjs.com/fast-hook)
[![discordBadge](https://img.shields.io/discord/896887381997813810?style=for-the-badge&color=7289da)](https://discord.gg/JCaTDJRz7P)

> W następnej aktualizacji - awaryjne rozwiązania w przypadku braku uprawnień, wysyłanie zwykłej wiadomości gdy client nie posiada uprawnienia `Manage Webhooks` , poprawa kodu

[![DBIT SUPPORT](https://discordapp.com/api/guilds/896887381997813810/embed.png?style=banner2)](https://discord.gg/JCaTDJRz7P)

## Instalation

---

```bash
$ npm install --save fast-hook
```

## Usage

---
```js
import fhook from 'fast-hook';

// or

const fhook = require("fast-hook");

fhook.send(trigger, options = {});
```

Check the [documentation table](#documentation) to understand what the `trigger` and `options` are.

### Example with normal message


<img src="https://i.imgur.com/teMcWVs.png" alt="normal message">

```js
import fhook from 'fast-hook';

await fhook.send(trigger, {
    username: "Settings",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/KfGlCvl.png",

    content: "Current settings... <:boosting_9:1272525921747734538>",
});
```

## Rest of examples:

---
_Click to show content_


<details>
  <summary><b>📌・Message with embed</b></summary>

![](https://i.imgur.com/BfJs3oR.png)

<details>
    <summary><b>Using discord.js embed builder</b></summary>

```js
import Discord from 'discord.js';

const verificationEmbed = new Discord.EmbedBuilder()
    .setTitle("Verification code")
    .setDescription("Please type this code to this <#1296927000836968571> channel!")
    .setImage(`https://i.imgur.com/SByNj7t.png`)
    .setColor("#6f7174")
    .setTimestamp(Date.now())


await fhook.send(trigger, {
    username: "Verification",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/ROVjINf.png",

    content: "Please, verify yourself",
    embeds: [verificationEmbed]
})
```
</details>

**Recommended:**
```js
await fhook.send(triggee, {
    username: "Verification",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/ROVjINf.png",

    content: "Please, verify yourself",
    embeds: [
        {
            title: "Verification code",
            description: "Please type this code to this <#1296927000836968571> channel!",
            image: {
                url: "https://i.imgur.com/SByNj7t.png",
            },
            color: 0x6f7174,
            timestamp: new Date().toISOString()
        }
    ]
})
```
</details>

<br>

<details>
  <summary><b>🔗・Message with files</b></summary>

![](https://i.imgur.com/WRAgRmn.png)

<details>
    <summary><b>Using discord.js attachment builder</b></summary>

```js
import Discord from 'discord.js';

const imageFile = new Discord.AttachmentBuilder()
    .setFile("https://i.imgur.com/SByNj7t.png")
    .setName("Image.png")
    .setDescription("Simple image")


await fhook.send(trigger, {
    username: "Files bot",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/GG84X9q.png",

    content: "Check this file!",
    files: [imageFile]
})
```
</details>

**Recommended:**
```js
await fhook.send(trigger, {
    username: "Files bot",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/GG84X9q.png",

    content: "Check this file!",
    files: [{
        attachment: "https://i.imgur.com/LAfRcD1.png",
        name: "Image.png",
        description: "Simple image"
    }]
})
```
</details>

<br>

<details>
  <summary><b>✅・Message with components</b></summary>

![](https://i.imgur.com/CdCB4GQ.png)

<details>
    <summary><b>Using discord.js components builder</b></summary>

```js
import Discord from 'discord.js';

const Button = new Discord.ButtonBuilder()
    .setLabel("Button")
    .setCustomId("CustomButton")
    .setStyle(Discord.ButtonStyle.Secondary)

const ButtonRow = new Discord.ActionRowBuilder()
    .addComponents([
        Button
    ])

await fhook.send(trigger, {
    username: "Simple button",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/ZjzaujP.png",

    content: "Hmmmm if you boring, click button",
    components: [
        ButtonRow
    ]
})
```
</details>

**Recommended:**
```js
import Discord from 'discord.js';

await fhook.send(trigger, {
    username: "Simple button",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/ZjzaujP.png",

    content: "Hmmmm if you boring, click button",
    components: [{
        type: Discord.ComponentType.ActionRow,
        components: [{
            type: Discord.ComponentType.Button,
            label: 'Button',
            custom_id: 'CustomButton',
            style: Discord.ButtonStyle.Secondary
        }]
    }]
})
```
</details>

<br>

<details>
  <summary><b>🔇・Message with silent mode</b></summary>

![](https://i.imgur.com/axHgqlL.png)

```js
await fhook.send(trigger, {
    username: "Who are there?",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/WN2Exdv.png",

    content: "Shhhhhhhh this is silent message",
    silent: true,
})
```
</details>

<br>

<details>
  <summary><b>📧・Message with mentions</b></summary>

<details>
  <summary><b>Enabled mentions</b></summary>

![](https://i.imgur.com/B1cAW1C.png)

```js
await fhook.send(trigger, {
    username: "Activity bot",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/SX1s9RZ.png",

    content: "<@586132986756333568> Are you here?",
    mentions: true,
})
```
</details>

<details>
  <summary><b>Disabled mentions</b></summary>

![](https://i.imgur.com/tFcyNZw.png)

```js
await fhook.send(trigger, {
    username: "Activity bot",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/SX1s9RZ.png",

    content: "<@586132986756333568> Are you here?",
    mentions: false,
})
```
</details>

</details>

<br>

<details>
  <summary><b>📝・Message with poll</b></summary>

![](https://i.imgur.com/7vf9dVP.png)

```js
import Discord from 'discord.js';

await fhook.send(trigger, {
    username: "Polls man",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/4aoh5Dn.png",

    poll: {
        allowMultiple: true,
        question: {
            text: "What would you want to choose?"
        },
        layoutType: Discord.PollLayoutType.Default,
        answers: [
            {
                emoji: "❌",
                text: "First answer"
            },
            {
                emoji: "❤️",
                text: "Second answer"
            }
        ],
        duration: 30
    }
})
```
</details>

<br>

<details>
  <summary><b>🤙・Message with everything showed above</b></summary>

![](https://i.imgur.com/JelpOlt.png)

_Contains everything except surveys because a survey can be sent without any other components_

```js
import Discord from 'discord.js';

await fhook.send(trigger, {
    username: "All utility",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/shCopCz.png",

    content: "Look at this <@586132986756333568>",
    silent: true,
    mentions: true,
    embeds: [
        {
            title: "Verification code",
            description: "Please type this code to this <#1296927000836968571> channel!",
            image: {
                url: "https://i.imgur.com/SByNj7t.png",
            },
            color: 0x6f7174,
            timestamp: new Date().toISOString()
        }
    ],
    files: [{
        attachment: "https://i.imgur.com/LAfRcD1.png",
        name: "Image.png",
        description: "Simple image"
    }],
    components: [{
        type: Discord.ComponentType.ActionRow,
        components: [{
            type: Discord.ComponentType.Button,
            label: 'Button',
            custom_id: 'CustomButton',
            style: Discord.ButtonStyle.Secondary
        }]
    }]
})
```
</details>



## Documentation table

---
| Parameter           | Type                           | Optional | Default               | Description                                                                                                                                                                                                                                                                                                    |
|---------------------|--------------------------------|----------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| trigger             | `textChannel` or `Webhook URL` | false    | *none*                | The trigger is a guild channel object or webhook url. If you specify a channel, the package searches for a webhook created by the bot on that channel and uses it (if it doesn't have one, it creates one). If you specify a webhook url, the package will search for it and, if it can, send a message there. |
| options             | `Object{}`                     | false    | **Presented below**   | Object with options for webhook                                                                                                                                                                                                                                                                                |
|                     |                                |          |                       |                                                                                                                                                                                                                                                                                                                |
| options.webhookName | `String`                       | true     | *Client username*     | Webhook name in channel interactions tab                                                                                                                                                                                                                                                                       |
| options.reason      | `String`                       | true     | *Fast-hook for bot*   | Reason to guild audit logs for creating webhook                                                                                                                                                                                                                                                                |
| options.username    | `String`                       | false    | *No user provided*    | Webhook app username                                                                                                                                                                                                                                                                                           |
| options.icon        | `String`                       | true     | *Client iconURL*      | Webhook app avatar                                                                                                                                                                                                                                                                                             |
|                     |                                |          |                       |                                                                                                                                                                                                                                                                                                                |
| options.mentions    | `Boolean`                      | true     | *false*               | If `false` webhook will don't ping anyone                                                                                                                                                                                                                                                                      |
| options.silent      | `Boolean`                      | true     | *false*               | If `true` webhook will sent in silent mode                                                                                                                                                                                                                                                                     |
|                     |                                |          |                       |                                                                                                                                                                                                                                                                                                                |
| options.content     | `String`                       | false    | *No content provided* | The message of the webhook                                                                                                                                                                                                                                                                                     |
| options.embeds      | `Object[]`                     | true     | *none*                | Object with embeds                                                                                                                                                                                                                                                                                             |
| options.files       | `Object[]`                     | true     | *none*                | Object with files (attachments)                                                                                                                                                                                                                                                                                |
| options.components  | `Object[]`                     | true     | *none*                | Object with components                                                                                                                                                                                                                                                                                         |
| options.poll        | `Object{}`                     | true     | *none*                | Object with poll                                                                                                                                                                                                                                                                                               |

---

© 2018-2024 Created by [@realdarek](https://discord.gg/JCaTDJRz7P) 