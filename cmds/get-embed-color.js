const Discord = require('discord.js');

module.exports = {
	name: 'get-embed-color',
	aliases: ['getcolor', 'embedcolor', 'embcolor', 'get-embed-color', 'get-embed', 'getembed'],
	usage: 'get-embed-color <#Channel/ID> <message **ID**> <number of embed (If you wanted to see the color of the first embed you would put a "1" here, and so on.)>',
	desc: 'Ever seen one of them fancy messages with a colored strip next to them, and wanted to find the color of that strip? Well, now you can :D',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let usage = new Discord.RichEmbed()
		.setTitle('Command Assistance')
		.setColor(jsonColor)
		.setDescription(
			'**Usage**: ' + prefix + 'get-embed-color **<#Channel/ID>** <Message **ID**> <index of embeds (if you want to get the color of the first embed, use "1" and so on. If this is not provided it will default to 1.)>'
		)
		.addField('what the hell does this command actually do?', "This command allows you to get the color of a sent embed. It is very useful especially if you really like the color and want to get hold of it.")
		// [channel] [message] [index of embed]
		if (!args.length) return message.channel.send({ embed: usage })
		
		let channel = message.mentions.channels.first() || client.channels.get(args[0]);
		let messageid = args[1];
		let index = parseInt(args[2]);
		if (!args[0]) return message.channel.send(`${process.env.re} You need to either #mention a channel, or enter a valid channel ID`);
		if (args.length && (!channel)) return message.channel.send(`${process.env.re} I can't find that channel! :c`)
		if (!messageid) return message.channel.send(`${process.env.re} You need to give a valid **message id**`)
		if (!index) index = 1;
		let c;
		try {
			let obj = await channel.fetchMessages({ around: messageid, limit: 1 });
			hexColor = obj.first().embeds[index - 1].hexColor || "#000000";
			color = obj.first().embeds[index - 1].color || "000000";
			title = obj.first().embeds[index - 1].title || "[NONE SET]";
			url = obj.first().embeds[index - 1].url || "[NONE SET]";
			desc = obj.first().embeds[index - 1].description || "[NONE SET]"
			type = obj.first().embeds[index - 1].type;
			ts = obj.first().embeds[index - 1].timestamp || "[NONE SET]";
			thumb = obj.first().embeds[index - 1].thumbnail || "[NONE SET]";
			provider = obj.first().embeds[index - 1].provider.url || "[NO PROVIDER]"
			footer = obj.first().embeds[index - 1].footer || "[NONE SET]"
			createdAt = obj.first().embeds[index - 1].createdAt || "[NONE SET]";
			if (createdAt == 'Invalid Date') createdAt = '[NONE SET]'
			author = obj.first().embeds[index - 1].author || "[NONE SET]";

			message.channel.send({
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setTitle('Embed Information')
				.addField('Title', title, true)
				.addField('Color', hexColor + " (" + color + ")", true)
				.addField('Type', type, true)
				.addField('Provider', provider)
				.addField('URL', url)
				.addField('Description', desc)
				.addField('Footer', footer)
				.addField('Thumbnail [URL]', thumb)
				.addField('Author', author)
				.addField('Timestamp', ts)
				.addField('Created At (Date displayed on the embed footer)', createdAt)
			});
		} catch (error) {
			return message.channel.send(
				`${process.env.re} You didn't provide a valid message ID (or there aren't any embeds of that index on that message)! (Error: \`${error.message}\`)`
			)
		}
	},
};