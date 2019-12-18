const Discord = require('discord.js')
const fs = require('fs')
const warns = fs.readFileSync("./warns.json", "utf-8");
const Moment = require("moment")

module.exports.run = async(client, message, args, green, red) => {
	if (!message.member.permissions.has("MANAGE_CHANNELS")) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setAuthor("Error", clinet.user.avatarURL)
			.setDescription("You do not have permission to use this command!")
		});
	};
let wUser = message.guild.member(message.guild.members.get(args[0]) || message.mentions.users.first())
let wReason = args.slice(1).join(' ')
if (!wReason) {
	wReason = 'no reason given'
}
console.log(wReason)
let ch = message.guild.channels.find(ch=>ch.name==='bot-moderation-logs')
if(!ch) {ch=message.channel}

	let warnEmbed = new Discord.RichEmbed()
	.setColor([255, 165, 0])
	.setTitle(`Action: Warn -> ${message.author.tag}`)
	.addField("> Warned User", `${wUser.user.tag} | ${wUser.id}`)
	.addField("> Warned By", `${message.author.tag} | ${message.author.id}`)
	.addField("> Warned In", message.channel)
	.addField("> Warned At", Moment(new Date()))
	.addField("> Reason", wReason)
	.setTimestamp()

ch.send({ warnEmbed });
message.channel.send(`${process.env.gre} **${wUser.user.tag}** has been warned, **${wReason}**`);
wUser.send(`You were warned in **${message.guild.name}** by **${message.author.tag}**`, {
	embed: new Discord.RichEmbed()
	.setDescription(`**Reason**: ${wReason}`)
	.setColor(message.member.displayColor)
})
	.catch(er => {	})

	if (!wUser) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription("You need to provide a user ID or mention a user within this server!")
			.setColor([155, 0, 0])
		})
	}
};

module.exports.help = {
	name: 'warn',
};