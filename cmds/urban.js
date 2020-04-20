const Discord = require('discord.js');
const fetch = require('node-fetch')
const querystring = require('querystring')

module.exports = {
	name: 'urban',
	aliases: ['urban', 'define'],
	desc: "Search the urban dictionary for something. It will show the first given result/definition. Can only be used in NSFW channels.",
	usage: 'urban <word>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
		if (!message.channel.nsfw) {
			return message.channel.send(process.env.re + " This command only works in NSFW Channels.")
		}
		if (!args.length) {
			return message.channel.send(`You need to include something to search the urban dictionary for`)
		}
		const query = querystring.stringify({ term: args.join(' ') });

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
		if (!list) {
			return message.channel.send(`${process.env.re} I cannot find that word!`);
		}
		let [answer] = list;
		let embed = new Discord.RichEmbed()
		.setColor(jsonColor)
		.setTitle(answer.word)
		.setURL(answer.permalink)
		.addField("❯ Definition", trim(answer.definition, 1020))
		.addField("❯ Example", `\`\`\`css\n${trim(answer.example, 1000)}\n\`\`\``)
		.setFooter(`👍 ${answer.thumbs_up} | 👎 ${answer.thumbs_down}`);
		return message.channel.send({ embed })
	},
};