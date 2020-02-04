const Discord = require("discord.js");

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) => {
	if(message.channel.nsfw) return message.channel.send("This command only works in NSFW channels.")
	
}

module.exports.help = {
	name: "urban",
}