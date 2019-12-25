const Discord = require("discord.js");

module.exports.run = async(client, message, args, error) => {

if (!message.member.permissions.has(["BAN_MEMBERS", 'ADMINISTRATOR'])) {
	message.channel.send(process.env.re+" You do not have permission to use this command!")
};

	let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let reason = args.slice(1).join(' ')
	let ch = message.guild.channels.find(r => r.name == 'logs')
	if (!ch) {
		ch = message.channel;
		reason = args.slice(1).join(' ') + "\nThe log message was sent here as there is no channel called `logs`"
	}
	let bannedAt = message.createdAt.toDateString();

	if (!bannedUser) {
		message.channel.send(process.env.re+`The user has not been provided or is no longer a member of the guild.`)
	};

	if (!bannedUser.banable) {
		return message.channel.send(process.env.re+"The mentioned user is not bannable!\nPlease move my role higher or contact support " + process.env.supportServer)
	}

	if (bannedUser.permissions.has(["BAN_MEMBERS", "ADMINISTRATOR"])) {
		error("That user cannot be banned. They either have the ban members or admin permissions!")
	}

	bannedUser.send(`You were banned from **${message.guild.name}** by **${message.author.tag}**`, {
		embed: new Discord.RichEmbed()
		.setDescription(`**Reason**: ${reason}`)
		.setColor(message.member.displayColor)
	})
		.catch(er => {
			message.channel.send("I attempted to notify " + bannedUser.user.tag + ` but their DMs were blocked; they were not notified of the ban.`)
		});

	await message.guild.member(bannedUser) 
		.ban(reason + "\nUser Respomsible: " + message.author.tag + " | " + message.author.id)
			.catch(err => {
				message.channel.send("", {
					embed: new Discord.RichEmbed()
					.setTitle("Error")
					.setDescription(err) 
					.setFooter("Please contact support " + process.env.supportServer)
				});
			});


	let banEmbed = new Discord.RichEmbed()
	.setColor([255, 0, 0])
	.setTitle(`Action: Ban -> ${bannedUser.user.tag}`)
	.addField(`> Memebr Banned`, `**${bannedUser.user.tag}**`, true)
	.addField("> Banned At", bannedAt, true)
	.addField("> Banned In", message.channel, true)
	.addField("> Reason", reason, true)
	.setFooter("Banned User ID: " + bannedUser.user.id)
	.setTimestamp()
		message.channel.send({ embed: banEmbed })	
		ch.send({ embed: banEmbed })
};

module.exports.help = {
	name: 'ban',
};