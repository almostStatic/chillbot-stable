const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

	let filter = m => m.author.id === message.author.id;
	let suggestion = args.join(' ');

	if (!suggestion) {
		message.reply("What is your suggestion?\n\n> Type `cancel` to cancel. Expires in 2 minutes.")
		message.delete(120000);
		message.channel.awaitMessages(filter, {
			max: 1,
			time: 120000,
		}).then(async(collected) => {
			if (collected.first().content.toLowerCase() == 'cancel') {
				return message.reply("Command Cancelled.")
			}
			message.reply("Thank you, your feedback has been submitted!")
				client.channels.get('648882351899803650').send("<@&649237683507560458>, new suggestion!", {
					embed: new Discord.RichEmbed()
					.setTitle("New Suggestion")
					.setColor("RANDOM")
					.addField("> Suggested By:", message.author.tag, true)
					.addField("> Suggested At:", message.createdAt.toDateString(), true)
					.addField("> Suggestion:", collected.first().content)
					.setFooter("> ID: " + message.author.id)                            
					// 
					//add reaction to message suggestion to black list user from suggesting again
				})
		}).catch(()	=> {
			message.reply("You took too long!")
		});
	} else if (suggestion.length) {
		message.reply("Thank you, your messgae has been sucsessfully submitted!")
		client.channels.get('648882351899803650').send("<@&649237683507560458>, new suggestion!", {
			embed: new Discord.RichEmbed()
			.setTitle("New Suggestion")
			.setColor("RANDOM")
			.addField("> Suggested By:", message.author.tag, true)
			.addField("> Suggested At:", message.createdAt.toDateString(), true)
			.addField("> Suggestion:", suggestion)
			.setFooter("> ID: " + message.author.id)                            
		})
		}
	};
module.exports.help = {
	name: 'suggest',
};