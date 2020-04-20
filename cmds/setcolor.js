const Discord = require('discord.js')
const keyv = require("keyv");
const colors = new keyv("sqlite://./database/colors.sqlite")

module.exports = {
	name: "setcolor",
	aliases: ['setcolor'],
	usage: 'setcolor <new hex color>',
	desc: 'Change **your** default color preference for embeds (messages with the colored strip next to them)',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let msg = await message.channel.send('Setting color...')
	let color = args[0];
	if(!color) {
		return msg.edit(`${process.env.re} **${message.author.username}**, You need to include a color to set your preference to!`)
	}
	if (!color.startsWith('#')) {
		color = `#${args[0]}`
	} else {
		color = args[0];
	};
	if (args[0].toLowerCase() == '#white') {
		color = '#FFFFFF';
	} else if (args[0].toLowerCase() == '#red') {
		color = "#da0000";
	} else if (args[0].toLowerCase() == '#yellow') {
		color = "#FFFF00";
	} 
	let regex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")
	var result = regex.test(color);
	if(result == true) {
	colors.set('color' + message.author.id, color);
		return msg.edit("", {
			embed: new Discord.RichEmbed()
			.setDescription(`${process.env.gre} **${message.author.tag}** has successfully updated their color preference to **${color}**`)
			.setColor(color)
		});
	} else {
		return msg.edit(`${process.env.re} You need to provide a valic HEX color code`, {
			embed: new Discord.RichEmbed()
			.setColor("RANDOM")
			.setDescription(`**Examples:** \`#ff0000\` or \`#ffff00\`\nFor help, use a [Hex color picker](https://htmlcolorcodes.com/)!`)
		})
	}
}
}