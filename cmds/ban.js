const Discord = require("discord.js");

module.exports.run = async(client, message, args, error) => {

if (!message.member.permissions.has(["BAN_MEMBERS", 'ADMINISTRATOR'])) {
	error("You do not have permission to use this command!")
};

	let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let reason = args.join(' ').slice(1);
	let bannedAt = message.createdAt.toDateString();

	if (bannedUser.permissions.has(["BAN_MEMBERS", "ADMINISTRATOR"])) {
		error("That user cannot be banned. They either have the ban members or admin permissions!")
	}

	if (!bannedUser) {
		error(`The user has not been provided or is no longer a member of the guild.`)
	};

	message.reply("Command not released yet!")
	
};

module.exports.help = {
	name: 'ban',
};