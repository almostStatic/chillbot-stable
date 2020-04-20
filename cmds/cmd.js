const Discord = require('discord.js')

module.exports = {
	name: 'cmdhelp',
	aliases: ["cmdhelp", "cmd"],
	desc: "View basic information for a command, includes of a description, required usage and a list of command aliases.",
	usage: "cmdhelp <commandname>",
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		const { commands } = client;
		const { owner } = client;
		const commandArg = args.join(' ');
		if (!commandArg) {
			return message.channel.send("You need to invlude the name or alias of a command to get help for!")
		};
		let commandFound = client.commands.get(commandArg.toLowerCase()) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandArg.toLowerCase()));
		if (!commandFound) {
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setDescription(`A command with name \`${commandArg}\` was not found. If you still have issues, please contact ` + client.users.get(process.env.ownerid).tag)
				.setColor(jsonColor)
			})
		};
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL)
			.setTitle("Command Help")
			.setColor(jsonColor)
			.setAuthor(message.author.tag, message.author.avatarURL)
			.addField("Description", commandFound.desc)
			.addField("Usage", `${prefix}${commandFound.usage}`)
			.addField("Aliases", commandFound.aliases.join(', '))
		})
	},
};