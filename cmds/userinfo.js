// credit to danielpmc (github)

const Discord = require("discord.js");
module.exports = {
	name: "userinfo",
	aliases: ["user", "who", "whois", 'userinfo'],
	usage: 'userinfo <@user, or ID>',
	desc: 'See some basic user infrormation',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	function getPerms(user) {
		str = user.permissions.toArray().map(x => x.toString()).join(', ');
		var i = 0;
		for(i; i < str.length; i++) {
			str = str.replace("_", " ");
		};
		return str.toLowerCase();
	};
	
	message.delete().catch((lmao) => {})
	let msg = await message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setDescription(process.env.loading + " Fetching user data...")
		.setColor('RED')
		.setFooter("This shouldn't take too long...")
	});
		let u = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  let author = new Discord.RichEmbed()
  .setColor(jsonColor)
  .setThumbnail(message.author.avatarURL)
	.setAuthor(`❯ ${message.author.tag}`, message.author.avatarURL)
  .addField("» Username ", `${message.author.tag}`, true)
	.addField("» Status", message.member.presence !== null && message.member.presence.status !== null ? message.member.presence.status : "Offline")
  .addField("» Playing ", `${message.member.presence.game === null ? "None" :  message.author.presence.game.state}`, true)
  .addField("» Nickname ", `${message.member.displayName || 'None Set'}`, true)
  .addField(`» Roles [${message.member.roles.filter(r => r.id != message.guild.id).size}]`, `${message.member.roles.filter(r => r.id != message.guild.id).map(r => r).join(" ")}`)
  .addField("» Highest Role ", message.member.highestRole, true)
	.addField("» Avatar", `[View](${message.member.user.avatarURL}, "View ${message.author.tag}'s avatar")`, true)
  .addField("» Joined Guild At ", `${message.member.joinedAt.toDateString()}`, true)
  .addField("» Joined Discord At ", `${message.author.createdAt.toDateString()}`, true)
  .setTimestamp()
	.addField('Permissions', getPerms(message.member));
if (!u) {
	await msg.edit({ embed: author })
		.catch(err => {
			msg.edit("Sorry, there was an error. " + err)
		});
	return;
};  
let memberPinged = new Discord.RichEmbed()
  .setColor(jsonColor)
  .setThumbnail(u.user.avatarURL)
	.setAuthor(u.user.tag, u.user.avatarURL)
  .addField("» Username ", `${u.user.tag}`, true)
  .addField("» Status", u.presence !== null && u.presence.status !== null ? u.presence.status : "Offline", true)
  .addField("» Playing ", `${u.user.presence.game === null ? "Nothing" :  u.user.presence.game.state}`, true)
  .addField("» Nickname ", `${u.nickname === null ? "None" : u.nickname}`, true)
	  .addField(`» Roles [${u.roles.filter(r => r.id != message.guild.id).size}]`, `${u.roles.filter(r => r.id != message.guild.id).map(r => r).join(" ")}`)
  .addField("» Highest Role ", u.highestRole, true)
	.addField("» Avatar", `[View](${u.user.avatarURL}, "View ${u.user.tag}'s avatar")`, true)
  .addField("» Joined Guild At ", `${u.joinedAt.toDateString()}`, true)
  .addField("» Joined Discord At ", `${u.user.createdAt.toDateString()}`, true)
	.addField('Permissions', getPerms(u))
  .setTimestamp()
	.setFooter(`» ID: ${u.id}`, u.user.avatarURL);
  msg.edit({ embed: memberPinged })
}
}