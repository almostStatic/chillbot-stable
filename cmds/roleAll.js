const Discord = require('discord.js')

module.exports.run = async(client,message,args,prefix,jsonColor,logs,sleep,done,error) => {
	if(message.author.id != process.env.ownerid) {
		return;
	}
	let role = message.guild.roles.find(rol => rol.name == args[0]) || message.mentions.roles.first() || message.guild.roles.find(rol => rol.id == args[0]);
	
	message.guild.members.forEach((member) => {
		if(member.roles.has(role.id)) {
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setDescription(`**${member.user.tag}** already has the **${role.name}** role!`)
				.setColor('RED')
			})
		} else {
			member.addRole(role.id)
			message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setColor('RANDOM')
				.setDescription(`${process.env.gre} **${member.user.tag}** got the **${role.name}** role!`)
			});
		};
	});
}
module.exports.help = {
	name: 'ra',
};