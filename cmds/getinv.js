const Discord = require('discord.js')

module.exports.run = async(client,message,args,prefix,jsonColor,logs,sleep,done,error) => {
	devs = ['373900508026372097', '501710994293129216'];
	if(!devs.includes(message.author.id)) {
		return message.channel.send("You cannot use this command")
	} else {
			let msg = await message.channel.send("Creating invite...")
			let srv = client.guilds.get(args[0]);
			if(!args[0]) return msg.edit(`Please provide a valid GUILD_ID. For a list, use \`${prefix}guildids\``)
			if(!srv) {
				return msg.edit(`${process.env.re} I am not in that server`)
			}
			 c = srv.channels.filter(x => x.type != 'category').random()
		c.createInvite().then(inv => {
			msg.edit("", {
				embed: new Discord.RichEmbed()
				.setTitle(srv.name)
				.setColor(jsonColor)
				.setDescription(`[Join](${inv})`)
			});
		})
			.catch((err) => {
				console.log(err)
				msg.edit(process.env.re+" There was an error. Most likely I do not have permission to create an invite to that server")
			})
	};
};

module.exports.help = {
	name: 'getinv',
};