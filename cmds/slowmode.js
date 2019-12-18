const Discord = require('discord.js')

module.exports.run = async(client, message, args, error) => {
	if (!message.guild.member(client.user).permissions.has("MANAGE_CHANNELS")) {
		error("I need the **MANAGE CHANNELS** permission for this command to work!")
	}

	if (!message.member.permissions.has(["MANAGE_CHANNELS", "ADMINISTRATOR"])) {
		error('You need the manage channnels or administrator permission in order to use this command!')
	}

	let filter = m => m.author.id === message.author.id;
	let time = parseInt(args[0]);
	if (isNaN(time) && time) {
		error(`${message.author.tag}, the time in seconds needs to be a **number**.`)
	};
	if (!time) {
		message.reply("Please enter the number of **SECONDS** you would like the slowmode to be set to. The maximum amount is: **21600** (6 Hours)\n\nType `cancel` to cancel, expires in 10 seconds.")
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
			message.channel.setRateLimitPerUser(parseInt(collected.first().content));
			message.channel.send("", {
				embed : new Discord.RichEmbed()
				.setDescription(`Slowmode set for ${collected.first().content} seconds`)
				.setColor('#42F000')
			});
		}); 
	} else if (time) {
			if (time > 21600) { return message.reply("Sorry, the maximum is **21600**") }
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