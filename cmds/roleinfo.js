const Discord = require('discord.js');

module.exports = {
	name: 'roleinfo',
	aliases: ['roleinfo', 'rf'],
	desc: 'Displays information about a certain role',
	usage: 'roleinfo <@role, id or name>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
		if (!args.length) return message.channel.send(`You need to provide a role for me to find! You can @mention the role, the ID or the name of the role`);
		let role = message.guild.roles.find(x => x.name.toLowerCase() == args.join(' ').toLowerCase()) || message.guild.roles.find(x => x.name.toLowerCase().startsWith(args[0].toLowerCase())) || message.guild.roles.find(x => x.id == args[0]) || (message.mentions.roles.first())
		if (!role) return message.channel.send(`${process.env.re} I cannot find that role!`)
		members = trim(role.members.map(x => x.user.tag.toString()).join(', '), 1024)
		let embed = new Discord.RichEmbed()
		.setColor(role.color ? role.color : jsonColor)
		.setTimestamp()
		.setDescription(role)
		.setTitle("Role Information | " + role.name)
		.addField("❯ Role Name", role.name, true)
		.addField("❯ Mention", `\`<@&${role.id}>\``, true)
		.addField("❯ Created On", role.createdAt.toDateString(), true)
		.addField("❯ Color", role.hexColor ? `${role.hexColor} (${role.color})` : "None", true)
		.addField("❯ Position", role.position, true)
		.addField("❯ Hoisted", role.hoisted ? "Yes" : "No", true)
		.addField(`❯ Members [${role.members.size}]`, members.length ? members : "No one has the " + role + " role", true)
		.setFooter("❯ ID: " + role.id)
		message.channel.send({ embed })
			.catch((err) => { });
	},
};