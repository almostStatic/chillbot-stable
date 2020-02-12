Dc=require("discord.js");
module.exports = {
	name: "invite",
	aliases: ["links", "add", "inv"],
	usage: "invite",
	desc: "Get some pretty useful links about the bot, the invite link to add the bot, the *website* and its support server",
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	client.generateInvite(8).then(inv=>{embed=new Dc.RichEmbed()
	.setAuthor(message.member.username, message.author.avatarURL)
	.setTitle("Useful links for ChillBot")
	.addField("Website", `[Click Here](https://chillbot.asad.codes/)`, true)
	.addField("Support Server", `[Join For Support](https://discord.gg/CmqEgU7)`, true)
	.addField("Bot Invite", `[Invite ChillBot](${inv})`, true)
	.setColor(jsonColor)
	//.addFi(`**[Website](https://chillbot.asad.codes)**\n**[Bot Invite](${inv})**\n**[Support Server]()**`).setColor(jsonColor);message.channel.send({ embed })})};
message.channel.send({ embed })
	});
}
}