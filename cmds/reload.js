const Discord = require('discord.js');

module.exports = {
	name: 'reload',
	aliases: ['r', 'reload'],
	desc: 'Reloads a command',
	usage: 'reload <command name or alias>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let supportServer = client.guilds.get("575388933941231638");
		let ServerMember = supportServer.member(message.author);
		if (!ServerMember) {
			return message.reply("you need to be a member of my support server to even have a dream of this command working.")
		}
		let staffRole = supportServer.roles.find(x => x.name == '♕ Bot Staff ♕')
		if (!staffRole) return message.reply("Bot Staff role not found in supportServer. Contact an admin in the support server!")
		if (!supportServer.member(message.author).roles.has(staffRole.id)) {
			return message.channel.send(`${process.env.re} You must be a bot staff to use this command!`)
		}		
		let devs = [client.owner];
		if (!devs.includes(message.author.id)) {
			return message.channel.send(`${process.env.re} You can't use that!`);
		};
		const msg = await message.channel.send(`${process.env.loading} Loading...`)
		const { commands } = client;
		if (!args.length) return msg.edit(`${process.env.re} You need to give something to reload!`)
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return msg.edit(`${process.env.re} Command not found :c`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
		} catch (error) {
			console.log(error);
			return msg.edit(`${process.env.re} There was an error whilst attempting to reload the **${command.name}** command; \`${error.message}\``);
		}
		msg.edit(`${process.env.gre} Command **${command.name}** was reloaded (in ${Date.now() - message.createdAt} MS)`)
	},
};