const Discord = require("discord.js")
const Moment = require("moment");
module.exports = {
	name: "dm",
	aliases: ["dm"],
	desc: "DM a user, intended for support and may only be used by our bot devs!",
	usage: "dm <user> <message>",
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	if (message.author.id != process.env.ownerid) {
		return message.reply(`${process.env.re} you may not use this command.`)
	}
	let dmUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let msg = args.slice(1).join(" ");
	if (!dmUser) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription(`> ${process.env.re} The mentioned user is not in the specified guild!`)
			.setColor([255, 0, 0])
		})
	}
dmUser.send(msg)
	.then(() => {
		message.channel.send(`${process.env.gre} | Your message was sent to **${dmUser.user.tag}**`)
	})
		.catch(er => {
			message.channel.send(`${process.env.re} | Your message was **not** sent to **${dmUser.user.tag}**`)
		})
}
}