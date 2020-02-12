const Discord = require('discord.js')

module.exports = {
	name: "getinv",
	aliases: ["get-invite"],
	desc: "Get an invite to a certain server which the bot is in, the bot must have the create instant invites permission and only our bot developers can use this as it is intended for support uses only. View a list of guild ids by using the command `<prefix>guildids` that command is also limited to our bot devs!",
	usage: "getinv <guild_id>",
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
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
}
}