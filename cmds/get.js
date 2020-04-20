const Discord = require("discord.js");
const keyv = require("keyv")
const colors = new keyv("sqlite://./database/colors.sqlite");

module.exports = {
	name: 'get',
	aliases: ["get"],
	desc: "**Get** something, which can either be `user`, `member`, or `guild` (Just use the `guild` to get the prefix of a certain \"guild\")",
	usage: 'get <object> <key>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let supportServer = client.guilds.get("575388933941231638");
		let ServerMember = supportServer.member(message.author);
		if (!ServerMember) {
			return message.reply("you're not in my support server :(")
		}
		let staffRole = supportServer.roles.find(x => x.name == '♕ Bot Staff ♕')
		if (!staffRole) return message.reply("Bot Staff role not found in supportServer. Contact an admin in the support server!")
		if (!supportServer.member(message.author).roles.has(staffRole.id)) {
			return message.channel.send(`${process.env.re} You must be a bot staff to use this command!`)
		}
	  let types = ["user", "guild", 'u', 'g'];
		if (!args.length) {
			return message.channel.send("The types of things you can get are: " + types.map(x => `\`${x}\``.toString()).join(', '))
		}
		if (!types.includes(args[0].toLowerCase())) {
			return message.channel.send("The types of things you can get are: " + types.map(x => `\`${x}\``.toString()).join(', '))
		}; 
		let key = args[1];
		if (args[0].toLowerCase().startsWith('g')) {
			let srv = client.guilds.find(g => g.name.toLowerCase() == args.slice(1).join(' ').toLowerCase()) || client.guilds.find(g => g.id == args[1])
			let guildEmbed = new Discord.RichEmbed()
			.setColor(jsonColor)
			.setAuthor(srv.name, srv.iconURL)
			.addField("Guild Name", srv.name, true)
			.addField("Created At", srv.createdAt.toDateString(), true)
			.addField("Owner", srv.owner.user.tag, true)
			.addField('Invite', `[Join ${srv.name}](${await srv.channels.filter(x => x.type != 'category').random().createInvite() || `Unknown`})`)
			.addField("Members", `**${srv.members.filter(r => !r.user.bot).size}** Humans, **${srv.members.filter(r => r.user.bot).size}** Bots, **${srv.memberCount}** Total.`, true)
			.addField("Channels", `**${srv.channels.filter(c => c.type == 'voice').size}** Voice, **${srv.channels.filter(r => r.type == 'text').size}** Text, **${srv.channels.filter(r => r.type == 'category').size}** Categories, **${srv.channels.size}** Total.`, true)
			.addField("Prefix", prefix ? prefix : '>', true)
			.setFooter("ID: " + srv.id, message.member.avatarURL)
			await message.channel.send({ embed: guildEmbed })
				.catch(() => {
					return message.channel.send("Guild Not Found")
				})
		};
		if (args[0].toLowerCase().startsWith("u")) {
			let bm;
			let user = null || client.users.find(x => x.username.toLowerCase() == args.slice(1).join(' ').toLowerCase()) || client.users.find(x => x.id == args[1].toLowerCase()) || client.users.find(x => x.tag.toLowerCase() == args.slice(1).join(' ').toLowerCase()) || client.users.find(x => x.id == message.mentions.users.first().id);
			if (typeof user == 'undefined') {
				return message.channel.send(`${process.env.re} I can't find user \`${args.slice(1).join(' ')}\``)
			}
			try {
				client.fetchUser(user.id);
				client.users.get(user.id);
				bm = true;
			} catch (e) {
				bm = false;
			}
			Color = await colors.get(`color${user.id}`);
			if (!Color) Color = "#0CEADC (Default)";
			let embed = new Discord.RichEmbed()
			.setColor(jsonColor)
			.setAuthor(`${user.username}#${user.discriminator}`, `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`)
			.addField("User", user.username + '#' + user.discriminator, true)
			.addField("Discriminator", user.discriminator, true)
			.addField("Bot", user.bot ? "Yes" : "No", true)
			.addField("Bot Mutual", bm == true ? "Yes" : "No", true)
			.addField("ID", user.id)
			.addField(`Avatar`, `[View](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048, "View ${user.username}#${user.discriminator}'s Avatar")`, true)
			.addField("Color", Color)
			message.channel.send({ embed });
		}
	},
}
