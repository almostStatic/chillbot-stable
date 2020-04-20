const Discord = require('discord.js');

module.exports = {
	name: 'updates',
	aliases: ["updates", "update"],
	desc: "Assigns you a role in the support server to get pinged for new updates at the time when they are released. If you already have that role, it will be removed. If you do not have that role it will be added to you.",
	usage: "updates",
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		if (message.guild.id != '575388933941231638') return message.reply("You must be in our support server in order for this command to work!");
		let role = message.guild.roles.find(r => r.id == "685114327069491237");
		if (!message.member.roles.has(role.id)) {
		message.member.addRole(role.id)
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setDescription(`${message.author.tag} has received the ${role} role; they will now get pinged as soon as new updates have been released`)
			.setColor(jsonColor)
		})
		}
		if (message.member.roles.has(role.id)) {
			message.member.removeRole(role.id)
			message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`${message.author.tag} has lost the ${role} role and will no longer get pinged for announcements/updates`)
				.setColor("#da0000")
			})
		}
		
	},
};