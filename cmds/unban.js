const Discord = require("discord.js")

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	let unban = args[0];
	let reason = args.slice(1).join(" ");
	if(!reason) {
		reason = "no reason given"
	}
	if (!message.member.permissions.has("BAN_MEMBERS")) {
		return message.channel.send(`${process.env.re} You do not have permission to use this command!`)
	}
	if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
		return message.channel.send(`I do not have permissions to unban this user.`)
	}
	message.guild.unban(unban, reason)
		.then(() => {
			message.channel.send(`${process.env.gre} I have unbanned \`${unban}\` (<@${unban}>)`, {
				embed: new Discord.RichEmbed()
				.setDescription(`**Reason**: ${reason}`)
				.setColor(jsonColor)
			})
		})
			.catch(er => {
				message.channel.send("The user is not banned from this server!")
			})
};

module.exports.help = {
	name: "unban",
};