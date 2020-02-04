const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports.run = async(client,message,args,prefix,jsonColor,logs,sleep,done,error) => {
	if(!message.guild.me.permissions.has("EMBED_LINKS")) {
		return message.channel.send("")
	}
	const { file } = await fetch('https://aws.random.cat/meow').then((res) => res.json());
	await message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setImage(file)
		.setColor(jsonColor)
		.setTitle("meow")
	})
};

module.exports.help = {
	name: "cat",
};