const Discord = require('discord.js')
const fs = require('fs')
const warns = fs.readFileSync("./warns.json", "utf-8");
const Moment = require("moment")

module.exports.run = async(client, message, args, green, red) => {
	let msg = await message.channel.send("still need to finish this")

	let userArg = args[0]
	let reason = args.slice(1).join(" ")

	let guildMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(userArg));

	if (!message.guild.member(guildMember)) {
		return msg.edit(`${process.env.re} That user is not part of this guild!`)
	}

};

module.exports.help = {
	name: 'warn',
};