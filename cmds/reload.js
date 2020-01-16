const Discord = require("discord.js")
const js = require('async-jsonstore-io')
const jsonstore = new js(process.env.jstk)

module.exports.run = async(client, message, args) => {
		var jsonColor = await jsonstore.get('color' + message.author.id)
		.catch((err) => { 
			if (err.code == 404) {

			};
		});
	if(!jsonColor) { jsonColor = message.member.displayColor }

		if(message.author.id != '501710994293129216') {
			return message.channel.send('', {
				embed: new Discord.RichEmbed()
				.setDescription(`${process.env.re} **${message.author.username}**, you cannot use this command`)
				.setColor(jsonColor)
			})
		}
		let msg = await message.channel.send('', {
			embed: new Discord.RichEmbed()
			.setDescription('Reloading...')
		})
		const commandName = args.join(' ')
		if(!commandName) {
			return msg.edit("", {
				embed: new Discord.RichEmbed()
				.setDescription(`No command name provided`)
				.setColor(jsonColor)
			});
		};
		// Check if the command exists and is valid
		if(!client.commands.has(commandName)) {
			return msg.edit("", {
				embed: new Discord.RichEmbed()
				.setDescription(`Command not found`)
				.setColor(jsonColor)
			})
		};
		// the path is relative to the *current folder*, so just ./filename.js
		delete require.cache[require.resolve(`./${commandName}.js`)];
		// We also need to delete and reload the command from the client.commands Enmap
		client.commands.delete(commandName);
		const props = require(`../cmds/${commandName}.js`);

		client.commands.set(commandName, props);
		msg.edit(`<:GreenTick:580716592980164618> The command **${commandName}** was reloaded! (in ${Date.now() - msg.createdTimestamp} ms)`, {
			embed: new Discord.RichEmbed()
			.setTimestamp()
			.setColor(jsonColor)
			
		})
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