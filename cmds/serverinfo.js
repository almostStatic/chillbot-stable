const Discord = require("discord.js");

module.exports.run = async (client, message, args, error) => {
	try {
		let embed = new Discord.RichEmbed()
		.setTitle(message.guild.name)
		.setThumbnail(message.guild.iconURL)
		.setColor(message.member.displayColor)
		.setTimestamp()
		.addField("> Owner", message.guild.owner.user.tag)
		.addField("> Created On", message.guild.createdAt.toDateString())
		.addField("> Channels ", `${message.guild.channels.filter(r => r.type === 'category').size} Categories,\n${message.guild.channels.filter(e=>e.type === 'text').size} Text,\n${message.guild.channels.filter(b=>b.type == 'voice').size} Voice,\n${message.guild.channels.size} Total.`)
		.addField("> Members", `${message.guild.members.filter(u=>u.presence !== 'online').size} Online,\n${message.guild.members.filter(m=>!m.user.bot).size} Humans,\n${message.guild.members.filter(e=>e.user.bot).size} Bots,\n${message.guild.memberCount} Total Members.`)
		.addField("> Server Region", message.guild.region)
		.addField("> Roles", message.guild.roles.size)
		.addField("> You Joined ", message.member.joinedAt.toDateString())
		.setFooter(`ID: ${message.guild.id}`, message.guild.iconURL)
		message.channel.send({ embed })
	}catch(e){
		console.error(e)
		error(`Sorry, an error occured. Please contact support\n\`\`\`${e}\`\`\`\n${process.env.supportServer}`)
	}
}

module.exports.help = {
	name: 'serverinfo',
};