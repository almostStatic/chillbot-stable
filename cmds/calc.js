const Discord = require('discord.js');

module.exports = {
	name: 'calc',
	aliases: ['calc'],
	usage: 'calc <calculation>',
	desc: 'Run a specific calculation',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		const { create, all } = require('mathjs')
		const math = create(all);
		let myGuild = client.guilds.get("575388933941231638");
		if (!myGuild.member(message.author)) {
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setDescription(`You do not have permission to use this command! You can unlock it by joining our [support server](${process.env.supportServer})`)
				.setColor(jsonColor)
			})
		} else {
			let role = myGuild.roles.find(x => x.name == 'Statistician');
			if (!myGuild.member(message.author).roles.has(role.id)) {
				return message.channel.send(`${process.env.re} You do not permission to use this command.`)
		}
		}
		if (!args.length) {
			return message.channel.send(`${process.env.re} You need to specify a calculation!`)
		}
		
		try {
				math.config({ number: 'BigNumber' })
				const result = math.evaluate(args.join(' '))
				const res = await math.format(result.toString())
			message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setDescription(res.toString())
				.setColor(jsonColor)
			})
		} catch (error) {
				return message.channel.send(process.env.re + "Invalid Calculation" + error)
		}

	},
};