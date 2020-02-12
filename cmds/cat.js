const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
	name: "cat",
	aliases: ["cat"],
	desc: 'Get a picture of a random cat',
	usage: 'cat',
	async run(client,message,args,prefix,jsonColor,logs,sleep,done,error) {
		if(!message.guild.me.permissions.has("EMBED_LINKS")) {
			return message.channel.send("I need the Embed Links permission for this command to work.")
		}
		const { file } = await fetch('https://aws.random.cat/meow').then((res) => res.json());
		await message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setImage(file)
			.setColor(jsonColor)
			.setTitle("meow")
		})
	},
}