const Discord = require("discord.js");
const usedcmd = new Set();

module.exports.run = async(client, message, args, error) => {
	const filter = m => m.author.id === message.author.id;
	let bug = args.join(' ');

	if (!bug) {
		message.reply("Hello there!\nYou found a bug and want to report it? Well, you come to the right place!\nWhat command did the bug occur in?\n\n> Type `cancel` to cancel--expires in 30 seconds.")
		message.channel.awaitMessages(filter, {
			max: 1,
			time: 30000,
		}).then(async( CMDbugOcurredIn ) => {
			if (CMDbugOcurredIn.first().content.toLowerCase() == 'cancel') {
				error("Command Cancelled")
			}
			message.reply("Thank you!\nWhat is the bug?\n\nExpires in 2 minutes, type `cancel` to cancel.")
			message.channel.awaitMessages(filter, {
				max: 1,
				time: 120000,
			})
				.then(async BUG => {
					if (BUG.first().content.toLowerCase() == 'cancel') {
						return message.reply(`${red} Command Cancelled`)
					}
						else {
							client.users.get(process.env.ownerid).send("", {
								embed: new Discord.RichEmbed()
								.setTitle(`New Bug Report (${message.author.tag} | ${message.author.id})`)
								.setTimestamp()
								.setColor([0, 255, 255])
								.addField(`Command Bugged`, CMDbugOcurredIn.first().content)
								.addField("Bug", BUG.first().content)
							})
								message.reply("Thank you for your feedback! I have messaged my master to come and fix this!")
						}
				}).catch(() => {
					message.reply(`${red} You took too long, command cancelled!`)
				})
		})
	}
}	

module.exports.help = {
	name: 'reportbug',
};