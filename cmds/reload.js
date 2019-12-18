const Discord = require("discord.js")

module.exports.run = async(client, message, args, green, red, error, getSupport) => {
		if(message.author.id != '501710994293129216') {
			return message.reply("You do not have permission to use this command")
		}
		
		const commandName = args.join(' ')
		if(!commandName) {
			return message.reply("Command name was not provided.")
		}
		// Check if the command exists and is valid
		if(!client.commands.has(commandName)) {
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setColor(255, 156, 0)
				.setDescription("That command does **not** exist!")
			});
		};
		// the path is relative to the *current folder*, so just ./filename.js
		delete require.cache[require.resolve(`./${commandName}.js`)];
		// We also need to delete and reload the command from the client.commands Enmap
		client.commands.delete(commandName);
		const props = require(`./${commandName}.js`);
		client.commands.set(commandName, props);
		message.channel.send(`<:GreenTick:580716592980164618> The command **${commandName}** was reloaded!`)
		client.channels.get('586187654047989790')
			.send("", {
				embed: new Discord.RichEmbed()
				.setTimestamp()
				.setTitle("Command Reloaded")
				.addField("> Command reloaded", commandName, true)
				.addField("> Reloaded By", message.author.tag, true)
				.addField("> Reloaded At", message.createdAt.toDateString(), true)
				.setFooter(`ID: ${message.author.id}`)
				.setColor([0, 255, 255])
			})

};

module.exports.help = {
	name: 'reload',
};