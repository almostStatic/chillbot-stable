const Discord = require("discord.js")
module.exports = {
	name: "unban",
	aliases: ['unban'],
	usage: 'unban <user id to unban> [reason]',
	desc: 'Unban someone who has been banned from the server. Use the bans command to see the IDs of the banned user, then run the unban command on the ID of the user',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
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
		.then(async() => {
			let user = await client.fetchUser(unban);
			if(!user) return message.reply("User not found.");
			let tag = `${user.username}#${user.discriminator}`;
			message.channel.send(`${process.env.gre} ${tag} was unbanned`, {
				embed: new Discord.RichEmbed()
				.setDescription(`**Reason**: ${reason}`)
				.setColor(jsonColor)
			})
		})
			.catch(er => {
				message.channel.send("The user is not banned from this server!")
			})
}
}