

Fast-Hook
========

<div align="center">
    <p>
        <a href="https://discord.com/invite/Qjuy3AHAYy"><img src="https://discordapp.com/api/guilds/794655657433104425/embed.png" alt="Discord Server" /></a>
    </p>
</div> 

### Support Discord: [https://discord.gg/support](https://discord.gg/63sQPf5vMQ)

---

This package creates an easy way to send webhooks, *as well as providing fallbacks if the client does not have the proper permissions*.

*If the client does not have the permission `Manage Webhooks`, it will send a normal message instead, causing no issues and working seamlessly*

---

```js
const send = require('fast-webhook');
```

## Documentation
Parameter | Type | Optional | Default | Description
--- | --- | --- | --- | ---
channel | `textChannel` | false | *none* | The channel to send the webhook to
message | `string` **or** `embed` | false | *none* | The message or embed to send
components | `object` | true | *none* | The components from Discord (buttons etc)
attachments | `object` | true | *none* | The attachments (image etc)
options | `object` | true | *none* | The options for the webhook
options.name | `string` | true | Server Invite | The title of the webhook
options.icon | `iconURL` | true | *Webhook Icon* | The icon of the webhook
options.mentions | `boolean` | true | *True* | If `false` webhook will don't ping anyone.
---

## Examples

<details>
  <summary><b>Normal message</b></summary>

  ![](https://i.imgur.com/rW8ciG1.png) 
```js
const send = require('fast-webhook');


send(message.channel, 'Current Settings...', {
    name: 'Settings',
    icon: 'https://i.imgur.com/X9eAmHm.png'
})
```
</details>

<details>
  <summary><b>Embed message</b></summary>

![](https://i.imgur.com/U4lItWR.png) 
```js
const Discord = require('discord.js');
const send = require('fast-webhook');

const embed = new Discord.MessageEmbed()
    .setColor("#77C2AE")
    .setTitle(`California`)
    .setDescription(`**By *Clayton James***`)
    .setFooter(`Just a normal embed!`);

send(message.channel, embed, {
    name: 'Now Playing',
    icon: 'https://i.imgur.com/44YTwve.png'
})
```
</details>

---

© [DomeQ#0001](https://discord.gg/63sQPf5vMQ) 2018 || Edited by [Derex#0002](https://discord.gg/63sQPf5vMQ)