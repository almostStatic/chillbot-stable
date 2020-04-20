const Discord = require("discord.js")

module.exports = {
	name: "role",
	aliases: ['role'],
	desc: 'Give or remove a role from a user, if they already have a role then I will remove it, if they do not have it then they will have the role added to them',
	usage: 'role <role id, mention or name> <user id, or mention>',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	const msg = await message.channel.send("Processing...")

	if (!message.guild.me.permissions.has("MANAGE_ROLES")) {
		msg.edit(`${process.env.re} I do not have the **MANAGE ROLES** permission. Please make sure I have this permission!`)
	}

	if (!message.member.permissions.has("MANAGE_ROLES")) {
		return msg.edit(`${process.env.re} You do not have permission to use this command!\n> You need the **MANAGE ROLES** permission in order to use this command!`)
	}

	let userArg = args[0];
	let roleArg = args.slice(1).join(" ").toLowerCase();

	if (!userArg) return msg.edit(process.env.re + " Please provide a user arguement")
	if (!roleArg) return msg.edit(process.env.re + " Please provide a role arguement")

	let guildMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(userArg))
	let guildRole = message.guild.roles.find(r => r.name.toLowerCase() == args.slice(1).join(' ').toLowerCase()) || message.guild.roles.find(x => x.name.toLowerCase().startsWith(roleArg)) || message.mentions.roles.first();


	if (!guildMember) return msg.edit(`${process.env.re} I cannot find that user!`)
	if (!guildRole) return msg.edit(process.env.re + " I cannot find that role!")

	try {
		if (guildMember.roles.has(guildRole.id)) {
			guildMember.removeRole(guildRole.id)
			msg.edit('', {
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription(`${guildMember.user.tag} has lost the ${guildRole.name} role`)
			})
		} else {
			guildMember.addRole(guildRole.id)
			msg.edit(``, {
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription(`${guildMember.user.tag} has received the ${guildRole.name} role`)
			})
		}
	} catch (e) {
		msg.edit(`${message.author} ${process.env.re} I was unable to add/remove that role. Please ensure that I have permission to do so.\n\nIf this is still occuring, please contact support (${process.env.supportServer}) with the following error: \`${e}\``)
	};
}
}