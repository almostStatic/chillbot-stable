const Discord = require('discord.js')

module.exports.run = async(client, message, args, error) => {
	let filter = m => m.author.id === message.author.id;
	let time = args[0];
	if (isNaN(time) && time) {
		error(`${message.author.tag}, the time in seconds needs to be a **number**.`)
	};
	if (!time) {
		message.reply("Please enter the number of **SECONDS** you would like the slowmode to be set to. The maximum amount is: 200\n\nType `cancel` to cancel, expires in 10 seconds.")
		message.channel.awaitMessages(filter, {
			max: 1,
			time: 10000,
		}).then(async(collected) => {
				if (collected.first().content.toLowerCase() == 'cancel') {
					error("Command Cancelled")
				};
				if (isNaN(collected.first().content)) {
					error(`\`${collected.first().content}\` is not a number`)
				}	
			message.channel.setRateLimitPerUser(collected.first().content);
			message.channel.send("", {
				embed : new Discord.RichEmbed()
				.setDescription(`Slowmode set for ${collected.first().content} seconds`)
				.setColor('#42F000')
			});
		}); 
	} else if (time) {
		message.channel.setRateLimitPerUser(time)
		message.channel.send("", {
			embed: new Discord.RichEmbed() 
			.setDescription(`Slowmode set for ${time} seconds`)
			.setColor('#42F000')
	}).catch(() => {
		return message.reply("You took too long!")
	})
		
	}

};

module.exports.help = { name: 'slowmode' }