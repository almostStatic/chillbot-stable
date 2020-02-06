let Discord = require("discord.js");
let key = require('keyv');
let db = new key("sqlite://./database/blacklisted.sqlite")

module.exports = {
	name: "blacklist",
	aliases: ["blck"],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let devs = ["501710994293129216", "373900508026372097", "437255943181565962"];
		if (!devs.includes(message.author.id)) {
			return message.channel.send(`You can't use this command!`)
		};
		let userArg = args[0];
		if (!userArg) {
			return message.channel.send("You need to provide someone to blacklist");
		};
		if (message.mentions.members.first()) {
			PING = message.mentions.members.first();
			let user_id = PING.user.id;
		  let reason = args.slice(1).join(' ')
		 if (!reason) return message.channel.send(`You need to give a reason to blacklist someone (to prevent abuse)`)
		 let guy = await client.fetchUser(user_id);
		 if (!guy) return message.channel.send(`I cannot find that user`)
		 try{
		 let U = await client.users.get(guy.id)
		 U.send(``, {
			 embed: new Discord.RichEmbed()
			 .setAuthor(message.author.tag, message.author.avatarURL)
			 .setDescription(`You have been blacklisted from using ChillBot!\nThis means you will no longer be able to use (or interact) with ChillBot.\nIf you believe this is a mistake, appeal in our [support server](${process.env.supportServer})`)
			 .addField("Blacklisted By:", message.author.tag)
			 .addField("Reason", reason)
			 .setColor("#da0000")
		 })
		 }catch(r){};
		let t = `${guy.username}#${guy.discriminator}`;
	 	if (guy.id == message.author.id) return message.channel.send("Why would you want to blacklist yourself? :face_palm:");
		await db.set(guy.id, "Y");
		message.channel.send(`${process.env.gre} ${t} has been blacklisted for: ${reason}`)

		} else {
		 let reason = args.slice(1).join(' ')
		 if (!reason) return message.channel.send(`You need to give a reason to blacklist someone (to prevent abuse)`)
		 id = args[0];
		 let person = await client.fetchUser(id);
		 if (!person) return message.channel.send(`I cannot find that user`)
		let TAG = `${person.username}#${person.discriminator}`;
	 	if (person.id == message.author.id) {
			  message.channel.send("Why would you want to blacklist yourself? :face_palm:");
				return;		
		} 
		await db.set(id, "Y");
		message.channel.send(`${process.env.gre} ${TAG} has been blacklisted for: ${reason}`)
				 try{
		 let A = await client.users.get(person.id)
		 A.send(``, {
			 embed: new Discord.RichEmbed()
			 .setAuthor(message.author.tag, message.author.avatarURL)
			 .setDescription(`You have been blacklisted from using ChillBot!\nThis means you will no longer be able to use (or interact) with ChillBot.\nIf you believe this is a mistake, appeal in our [support server](${process.env.supportServer})`)
			 .setColor("#da0000")
				.addField("Blacklisted By:", message.author.tag)
			 .addField("Reason", reason)

		 })
		 }catch(r){};

		}
	},
}