

Fast-Hook
========

<div align="center">
    <p>
        <a href="https://discord.com/invite/Qjuy3AHAYy"><img src="https://discordapp.com/api/guilds/794655657433104425/embed.png" alt="Discord Server" /></a>
    </p>
</div> 

### Support Discord: soon (Dar3k#1121)

---

This package creates an easy way to send webhooks, *as well as providing fallbacks if the client does not have the proper permissions*.

*If the client does not have the permission `Manage Webhooks`, it will send a normal message instead, causing no issues and working seamlessly*

---

```js
const send = require('fast-hook');
```

## Documentation
Parameter | Type          | Optional | Default        | Description
--- |---------------|----------|----------------| ---
options | `object`      | true     | *none*         | The options for the webhook
options.channel | `textChannel` | false    | *none*         | Channel to send webhook
options.message | `message`     | true     | *none*         | Message to send with webhook
options.name | `string`      | true     | Server Invite  | The title of the webhook
options.icon | `iconURL`     | true     | *Webhook Icon* | The icon of the webhook
options.mentions | `boolean`     | true     | *True*         | If `false` webhook will don't ping anyone.
options.attachments | `object`      | true     | *null*         | Object with attachments
options.components | `object`      | true     | *null*         | Object with components
options.embed | `object` | true | *null* | Object with embeds
---

## Examples

<details>
  <summary><b>Normal message (clik)</b></summary>

  ![](https://i.imgur.com/rW8ciG1.png) 
```js
const send = require('fast-hook');


send({
    channel: message.channel,
    message: 'Current Settings...',
    name: 'Settings',
    icon: 'https://i.imgur.com/X9eAmHm.png',
    mentions: false,
})
```
</details>

<details>
  <summary><b>Embed message (clik)</b></summary>

![](https://i.imgur.com/U4lItWR.png) 
```js
const Discord = require('discord.js');
const send = require('fast-hook');

const embed = new Discord.MessageEmbed()
    .setColor("#77C2AE")
    .setTitle(`California`)
    .setDescription(`**By *Clayton James***`)
    .setFooter(`Just a normal embed!`);

send({
    channel: message.channel,
    embeds: [embed],
    name: 'Now Playing',
    icon: 'https://i.imgur.com/44YTwve.png',
    mentions: false
})
```
</details>

---

© [DomeQ#0001](https://discord.gg) 2018 || Edited by [Dar3k#1121](https://discord.gg/)