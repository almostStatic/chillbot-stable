const Discord = require('discord.js')
const fs = require('fs')
const warns = fs.readFileSync("./warns.json", "utf-8");

module.exports.run = async(client, message, args, green, red) => {
	if (!message.member.hasPermission("MANAGE_CHANNELS")) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setAuthor("Error", clinet.user.avatarURL)
			.setDescription("You do not have permission to use this command!")
		});
	};
	
};

module.exports.help = {
	name: 'warn',
};