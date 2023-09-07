const { Guild } = require("discord.js");
const Command = require("../structures/Command.js");
const { Permissions } = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports = new Command({
  name: 'ban',
  description: 'ban',
  async run(message, args, client) {

    if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS))
      return message.reply('You have no permission to ban members');

    if (!message.mentions.members)
      return message.reply('You need to mention a member to ban');

    let mentionedMember = message.mentions.members.first();
    var reason = args.slice(2).join(" ")

    try {
      mentionedMember.ban();
      if (reason === '') {const embed = new MessageEmbed()
        .setColor(`#FF2A2A`)
        .setFields({ name: `${mentionedMember} was banned!!`, value: 'What a bad member'},)
        .setTimestamp();} else {const embed = new MessageEmbed()
          .setColor(`#FF2A2A`)
          .setFields({ name: `${mentionedMember} was banned with the reason: ${reason}!`, value: 'What a bad member'},)
          .setTimestamp();}

      message.reply({embeds: [embed]});
      var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                               hour: "numeric",
                                               minute: "numeric",
                                               second: "numeric"})
      console.log("[",time,"]",message.author,`banned ${mentionedMember} for ${reason}`);

    } catch (err) {
      console.log("[",time,"]",err);
      message.reply(`Oops, there was an error banning ${mentionedMember}`);
    }

  },
});
