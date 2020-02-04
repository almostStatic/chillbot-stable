const Discord = require('discord.js')
const js = require('async-jsonstore-io');
const jsonstore = new js(process.env.jstk);
const keyv = require("keyv");
const colors = new keyv("sqlite://./database/colors.sqlite")

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	let msg = await message.channel.send('Setting color...')
	let color = args[0];
	if(!color) {
		return msg.edit(`${process.env.re} **${message.author.username}**, You need to include a color to set your preference to!`)
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
};

module.exports.help = {
	name: 'setcolor',
};