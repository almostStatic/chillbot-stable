const Discord = require('discord.js');
const math = require("mathjs");
module.exports = {
	name: 'calc',
	aliases: ['calc'],
	usage: 'calc <calculation>',
	desc: 'Run a specific calculation',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let msg = await message.channel.send("Calculating...")
		let myGuild = client.guilds.get("575388933941231638");
		if (!myGuild.member(message.author)) {
			return msg.edit("", {
				embed: new Discord.RichEmbed()
				.setDescription(`You do not have permission to use this command! You can unlock it by joining our [support server](${process.env.supportServer})`)
				.setColor(jsonColor)
			})
		} else {
			let role = myGuild.roles.find(x => x.name == 'Statistician');
			if (!myGuild.member(message.author).roles.has(role.id)) {
				return msg.edit(`${process.env.re} You do not permission to use this command.`)
		}
		}
		if (!args.length) {
			return msg.edit(`${process.env.re} You need to specify a calculation!`)
		}
		
		try {
				const result = math.evaluate(args.join(' '))
			msg.edit("", {
				embed: new Discord.RichEmbed()
				.setDescription(result)
				.setColor(jsonColor)
			})
		} catch (error) {
				return msg.edit(process.env.re + " Invalid Calculation: " + error)
		}

	},
};