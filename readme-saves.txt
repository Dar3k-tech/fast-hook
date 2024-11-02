content: options.content, JEST
embeds: null, JEST
files: null, JEST
components: null, JEST
mentions: false, JEST
silent: false, JEST
poll: null, JEST


NORMAL MESSAGE

[img]https://i.imgur.com/teMcWVs.png[/img]
```
await Test.send(message.channel, {
    username: "Settings",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/KfGlCvl.png",

    content: "Current settings... <:boosting_9:1272525921747734538>",
})
```

EMBED MESSAGE
[img]https://i.imgur.com/BfJs3oR.png[/img]
```
const verificationEmbed = new Discord.EmbedBuilder()
    .setTitle("Verification code")
    .setDescription("Please type this code to this <#1296927000836968571> channel!")
    .setImage(`https://i.imgur.com/SByNj7t.png`)
    .setColor("#6f7174")
    .setTimestamp(Date.now())


await Test.send(message.channel, {
    username: "Verification",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/ROVjINf.png",

    content: "Please, verify yourself",
    embeds: [verificationEmbed]
})
```
OR
```
await Test.send(message.channel, {
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

FILES IN MESSAGE
[img]https://i.imgur.com/WRAgRmn.png[/img]
```
const imageFile = new Discord.AttachmentBuilder()
    .setFile("https://i.imgur.com/SByNj7t.png")
    .setName("Image.png")
    .setDescription("Simple image")


await Test.send(message.channel, {
    username: "Files bot",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/GG84X9q.png",

    content: "Check this file!",
    files: [imageFile]
})
```
or
```
await Test.send(message.channel, {
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


COMPONENTS IN MESSAGE
[img]https://i.imgur.com/CdCB4GQ.png[/img]
```
const Button = new Discord.ButtonBuilder()
    .setLabel("Button")
    .setCustomId("CustomButton")
    .setStyle(Discord.ButtonStyle.Secondary)

const ButtonRow = new Discord.ActionRowBuilder()
    .addComponents([
        Button
    ])

await Test.send(message.channel, {
    username: "Simple button",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/ZjzaujP.png",

    content: "Hmmmm if you boring, click button",
    components: [
        ButtonRow
    ]
})
```
or
```
await Test.send(message.channel, {
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

SILENT MESSAGE
[img]https://i.imgur.com/axHgqlL.png[/img]
```
await Test.send(message.channel, {
    username: "Who are there?",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/WN2Exdv.png",

    content: "Shhhhhhhh this is silent message",
    silent: true,
})
```

MENTIONS IN MESSAGE

ENABLED:
[img]https://i.imgur.com/B1cAW1C.png[/img]
```
await Test.send(message.channel, {
    username: "Activity bot",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/SX1s9RZ.png",

    content: "<@586132986756333568> Are you here?",
    mentions: true,
})
```

DISABLED:
[img]https://i.imgur.com/tFcyNZw.png[/img]
```
await Test.send(message.channel, {
    username: "Activity bot",
    webhookName: "my best bot webhook",
    icon: "https://i.imgur.com/SX1s9RZ.png",

    content: "<@586132986756333568> Are you here?",
    mentions: false,
})
```


POLLS IN MESSAGE
[img]https://i.imgur.com/7vf9dVP.png[/img]
```
await Test.send(message.channel, {
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

ALL without poll because it must be only one attachment in message
[img]https://i.imgur.com/JelpOlt.png[/img]
```
await Test.send(message.channel, {
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