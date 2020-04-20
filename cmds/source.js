const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'source',
	aliases: ['source', 'source-code', 'src'],
	desc: "View the bot's source code (only for individual commands, tho)",
	usage: 'src <file-name>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let owners; 
			owners = [client.owner];
		if (!owners.includes(message.author.id)) {
			return message.channel.send("You can't do that.")
		}
		const msg = await message.channel.send(`${process.env.loading} Fetching source...`);
		if (!args.length) {
			return msg.edit(`${process.env.re} You need to provide a command name!`);
		};
		cmd = args[0].toLowerCase();
		fs.readFile(`./cmds/${cmd}.js`, (err, file) => {
			if (err) {
				console.log(err)
				return msg.edit(`${process.env.re} I can't find that file.`)
			};
			msg.edit(`${process.env.gre} Code successfully retrieved in ${Date.now() - message.createdTimestamp} MS`, {
				embed: new Discord.RichEmbed()
				.setTitle(`${cmd}.js`)
				.setColor(jsonColor)
				.setDescription(`\`\`\`js\n${client.trim(file, 2037)}\n\`\`\``)
			});
		});
	},	
}