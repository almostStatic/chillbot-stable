const Discord = require("discord.js");
const keyv = require('keyv');
const prefixes = new keyv("sqlite://./database/prefixes.sqlite");

module.exports = {
	name: "change-prefix",
	aliases: ["changeprefix", 'change-prefix'],
	desc: '**DEV ONLY**- Change the prefix for a certain guild',
	usage: 'changeprefix <guildid> <new prefix>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let server = client.guilds.get('575388933941231638');
		let staff = server.roles.find(x => x.name == '♕ Bot Staff ♕')
		let mem = server.member(message.author);
		if (!mem) {
			return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`You cannot use this command!`)
				.setColor(jsonColor)
			})
		}
		if (!mem.roles.has(staff.id)) {
			return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`You cannot use this command!`)
				.setColor(jsonColor)
			});
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