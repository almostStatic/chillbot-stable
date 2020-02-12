const Discord = require("discord.js")

module.exports = {
	name: "cookie",
	aliases: ["cookie"],
	desc: "Give someone a cookie!",
	usage: "cookie <user>",
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	if (!args.length) {
		message.delete().catch(e => { })
		const filter = m => m.author.id === message.author.id;
		const msg = await message.reply("Who do you want to give a :cookie: to?\n\nExpires in 20 seconds...")
		message.channel.awaitMessages(filter, {
			max: 1,
			time: (20 * 1000),
		}).then(async(collected) => {
			collected.first().delete().catch((err) => { });
			msg.edit(`:cookie: **${message.author.tag}** has given ${collected.first().content} a cookie! :cookie:`)
		}).catch(() => {
			msg.delete();
			message.channel.send(`${process.env.re} **${message.author.tag}** took too long to respond; the command was cancelled`)
		})
	} else if (args[0]) { 
		return message.channel.send(`:cookie: **${message.author.tag}** has given ${args.join(' ')} a cookie! :cookie:`)
	}
}
}