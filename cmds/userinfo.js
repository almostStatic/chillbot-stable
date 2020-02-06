// credit to danielpmc (github)

const Discord = require("discord.js");

module.exports = {
	name: "userinfo",
	aliases: ["user"],
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		

	message.delete().catch((lmao) => {})
	let msg = await message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setDescription("Fetching user data...")
	})
		let u = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  let author = new Discord.RichEmbed()
  .setColor(jsonColor)
  .setThumbnail(message.author.avatarURL)
	.setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .addField("> Username ", `${message.author.tag}`, true)
	.addField("> Status", message.member.presence !== null && message.member.presence.status !== null ? message.member.presence.status : "Offline")
  .addField("> Playing ", `${message.member.presence.game === null ? "None" :  message.author.presence.game.state}`, true)
  .addField("> Nickname ", `${message.member.displayName}`, true)
  .addField("> Roles", `${message.member.roles.map(r => r.name).join(", ")}`)
  .addField("> Highest Role ", message.member.highestRole.name, true)
	.addField("> Avatar", `> [View](${message.member.user.avatarURL})`, true)
  .addField("? Joined Guild At ", `${message.member.joinedAt.toDateString()}`, true)
  .addField("> Joined Discord At ", `${message.author.createdAt.toDateString()}`, true)
  .setTimestamp()
  .setFooter(`ID: ${message.author.id}`, message.author.avatarURL);
if (!u) {
	return msg.edit({ embed: author })
		.catch(err => {
			msg.edit("Sorry, there was an error. " + err)
		});
};  
let memberPinged = new Discord.RichEmbed()
  .setColor(jsonColor)
  .setThumbnail(u.user.avatarURL)
	.setAuthor(u.user.tag, u.user.avatarURL)
  .addField("> Username ", `${u.user.tag}`, true)
  .addField("> Status", u.presence !== null && u.presence.status !== null ? u.presence.status : "Offline", true)
  .addField("> Playing ", `${u.user.presence.game === null ? "Nothing" :  u.user.presence.game.state}`, true)
  .addField("> Nickname ", `${u.nickname === null ? "None" : u.nickname}`, true)
  .addField("> Roles ", `${u.roles.map(r => r.name).join(", ")}`)
  .addField("> Highest Role ", u.highestRole.name, true)
	.addField("> Avatar", `> [View](${u.user.avatarURL})`, true)
  .addField("> Joined Guild At ", `${u.joinedAt.toDateString()}`, true)
  .addField("> Joined Discord At ", `${u.user.createdAt.toDateString()}`, true)
  .setTimestamp()
	.setFooter(`ID: ${u.id}`, u.user.avatarURL);
  msg.edit({ embed: memberPinged })
}
}