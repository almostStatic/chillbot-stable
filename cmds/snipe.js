const Discord = require("discord.js");
const keyv = require('keyv');
const snipes = new keyv("sqlite://./database/snipes.sqlite")

module.exports = {
	name: "snipe",
	aliases: ['s', 'snipe'],
	desc: 'View the last deleted message in the channel, ignores bots.',
	usage: 'snipe',
	async run(client,message,args,prefix,jsonColor,sleep,done,error){
		let snipedMsg = await snipes.get(message.channel.id)
	 let author = await snipes.get("snipe" + message.channel.id)
	 let member = await message.guild.members.get(author)
	 if(!member) {
		 member = "UNKNOWN#0000"
	 };
		if(!snipedMsg) return message.channel.send("Nothing to snipe here!")
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setTitle("Sniped Message")
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setDescription(snipedMsg)
			.setTimestamp()
		}).catch((e) => { message.reply("i need the embed links permission for this to work!") })
	},
}