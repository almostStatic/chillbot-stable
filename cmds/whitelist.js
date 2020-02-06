const Discord = require('discord.js');
const keyv = require('keyv');
let db = new keyv("sqlite://./database/blacklisted.sqlite");

module.exports = {
	name: "whitelist",
	aliases: [],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
				let devs = ["501710994293129216", "373900508026372097", "437255943181565962"];
				if (!devs.includes(message.author.id)) {
					return message.channel.send(`You cannot use this command.`)
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