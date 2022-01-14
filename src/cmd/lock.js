const { Guild } = require("discord.js");
const Command = require("../structures/Command.js");
const { Permissions } = require('discord.js');

module.exports = new Command({
    name: "lock",
    description: "lock the channel that the command is exucuted",

    async run(message, args, client) {
        if (message.author.bot) return;
        if (message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)){
            message.channel.permissionOverwrites.edit("Enter ID", {
                VIEW_CHANNEL: true,
                SEND_MESSAGES: false,
                READ_MESSAGE_HISTORY: true,
                ATTACH_FILES: false
            });
        } else message.reply(`why do you want to use a mod command when you're not a mod`)

    }
});
