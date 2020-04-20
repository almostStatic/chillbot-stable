const Discord = require("discord.js");

module.exports = {
	name: "suggest",
	aliases: ['suggest'],
	usage: 'suggest <suggestion>',
	desc: 'Suggest something to be added to the bot. Spamming this will result in a blaklist (as it pings the owner)',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
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
			message.channel.send({
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription(`ty ${message.author.username}, I have recorded your suggestion :-)`)
			})
				client.channels.get('648882351899803650').send("<@&649237683507560458>, new suggestion!", {
					embed: new Discord.RichEmbed()
					.setTitle("New Suggestion")
					.setColor(jsonColor)
					.addField("❯ Suggested By:", message.author.tag + " (" + message.author.id + ")", true)
					.addField("❯ Suggested At:", message.createdAt.toDateString(), true)
					.addField("❯ Suggestion:", collected.first().content)
					.setFooter("❯ ID: " + message.author.id)                            
					// 
					//add reaction to message suggestion to black list user from suggesting again
				})
		}).catch(()	=> {
			message.reply("You took too long!")
		});
	} else if (suggestion.length) {
			message.channel.send({
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription(`Thanks ${message.author.tag}, your suggestion has been received!`)
			})
		client.channels.get('648882351899803650').send("<@&649237683507560458>, new suggestion!", {
			embed: new Discord.RichEmbed()
			.setTitle("New Suggestion")
			.setColor(message.member.displayColor)
			.addField("❯ Suggested By:", message.author.tag, true)
			.addField("❯ Suggested At:", message.createdAt.toDateString(), true)
			.addField("❯ Suggestion:", suggestion)
			.setFooter("❯ ID: " + message.author.id)                            
		})
		}
	}
}