const Discord = require('discord.js');
const keyv = require('keyv');
let db = new keyv("sqlite://./database/blacklisted.sqlite");

module.exports = {
	name: "whitelist",
	aliases: ['whitelist'],
	desc: 'Whitelist a user from using the bot. This is a dev-only thing. IE unblacklists them and lets them use ChillBot',
	usage: 'whitelist <@user or ID> [reason]',
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

		let PING = args[0];
		if (!PING) return message.channel.send("You need to provide someome to whitelist (ie. unblacklist)")
		if (message.mentions.members.first()) {
			PING = message.mentions.members.first();
			FETCHED_USER = await client.fetchUser(PING.user.id);
			tag = `${FETCHED_USER.username}#${FETCHED_USER.discriminator}`;
			if (!FETCHED_USER) {
				return message.channel.send("I cannot find that user.")
			}
			await db.set(PING.user.id, "N");
					 try{
		 let U = await client.users.get(PING.user.id)
		 U.send(``, {
			 embed: new Discord.RichEmbed()
			 .setAuthor(message.author.tag, message.author.avatarURL)
			 .setDescription(`You have been whitelisted!\nThis means that you can now interact with ChillBot.\nYou can join our [support server](${process.env.supportServer})!\n\nOnce again, thank you for using ChillBot!`)
			 .setColor("#04FF00")
		 })
		 }catch(r){};

			return message.channel.send(`${process.env.gre} ${tag} can now use ${client.user.username}!`);
		} else {
			dude = args[0];
			let fetched = await client.fetchUser(dude)
			if (!fetched) return message.channel.send(`I cannot find that user.`)
			tttt = `${fetched.username}#${fetched.discriminator}`;
			await db.set(fetched.id, "N");
			try{
					 let U = await client.users.get(fetched.id)
		 U.send(``, {
			 embed: new Discord.RichEmbed()
			 .setAuthor(message.author.tag, message.author.avatarURL)
			 .setDescription(`You have been whitelisted!\nThis means that you can now interact with ChillBot.\nYou can join our [support server](${process.env.supportServer})!\nYou were whitelisted by: **${message.author.tag}**\n\nOnce again, thank you for using ChillBot!`)
			 .setColor("#04FF00")
		 })
		 }catch(r){};

			return message.channel.send(`${process.env.gre} ${tttt} can now use ${client.user.username}!`)
		}
	}
}