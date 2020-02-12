const Discord = require("discord.js");
const keyv = require('keyv');
const prefixes = new keyv("sqlite://./database/prefixes.sqlite");

module.exports = {
	name: "change-prefix",
	aliases: ["changeprefix", 'change-prefix'],
	desc: '**DEV ONLY**- Change the prefix for a certain guild',
	usage: 'changeprefix <guildid> <new prefix>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let devs = [process.env.ownerid];
		if (!devs.includes(message.author.id)) {
			return message.channel.send(`${process.env.re} This command can only be used by our developers.\nTo change your server's prefix, use the command \`${prefix}prefix [new prefix]\`. If you have forgotten your server's prefix or have too many bots responding to it, please join our support server (${process.env.supportServer})`)
		}
		let guildid = args[0];
		if (!guildid) {
			return message.channel.send("You need to provide a valid guild ID.")
		}
		try{
			 global.guild = await client.guilds.get(args[0]);
		} catch(e) {
			return message.channel.send(`I am either not a member of that server or you have provided an invalid guild ID.`)
		}
		let newPrefix = args[1];
		if (!newPrefix) {
			return message.channel.send("You need to provide a new prefix!")
		}
		await prefixes.set("prefix" + guild.id, newPrefix);
		message.channel.send(`${process.env.gre} Prefix for ${guild.name} was successfully changed to \`${newPrefix}\``)
	},
}