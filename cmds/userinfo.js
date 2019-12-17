// credit to danielpmc (github)

const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
		let u = message.guild.member(message.guild.members.get(args[0]) || message.mentions.users.first())
  let embed2 = new Discord.RichEmbed()
  .setColor(message.member.displayColor)
  .setThumbnail(message.author.avatarURL)
  .addField("Username ", `${message.author.tag} (ID: ${message.author.id})`, true)
  .addField("Status", message.member.presence !== null && message.member.presence.status !== null ? message.member.presence.status : "Offline")
  .addField("Playing ", `${message.author.presence.game === null ? "None" :  message.author.presence.game.name}`)
  .addField("Nickname ", `${message.member.displayName}`)
  .addField("Role(s) ", `${message.member.roles.map(r => r.name).join(", ")}`)
  .addField("Highest Role ", message.member.highestRole.name)
  .addField("Joined Guild At ", `${message.member.joinedAt.toDateString()}`)
  .addField("Joined Discord At ", `${message.author.createdAt.toDateString()}`)
  .setTimestamp()
  .setFooter(`ID: ${message.author.id}`, message.author.avatarURL);
if (!u) {
	return message.channel.send({ embed2 })
}  
let embed = new Discord.RichEmbed()
  .setColor(u.displayColor)
  .setThumbnail(u.user.avatarURL)
  .addField("Username ", `${u.user.tag}`, true)
  .addField("Status", u.presence !== null && u.presence.status !== null ? u.presence.status : "Offline")
  .addField("Playing ", `${u.user.presence.game === null ? "Nothing" :  u.user.presence.game.name}`)
  .addField("Nickname ", `${u.nickname === null ? "None" : u.nickname}`)
  .addField("Role(s) ", `${u.roles.map(r => r.name).join(", ")}`)
  .addField("Highest Role ", u.highestRole.name)
  .addField("Joined Guild At ", `${u.joinedAt.toDateString()}`)
  .addField("Joined Discord At ", `${u.user.createdAt.toDateString()}`)
  .setTimestamp()
	.setFooter(`ID: ${u.id}`, u.avatarURL);
  message.channel.send({embed})
}

module.exports.help = {
	name: 'userinfo'
}