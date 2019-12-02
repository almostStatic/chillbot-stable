const Dc = require("discord.js")

module.exports.run = async(client, message, args, error) => {
	client.generateInvite(8).then(inv => {
		let embed = new Dc.RichEmbed()
		.setTitle("Invite Links")
		.setDescription(`**[Bot Invite](${inv})**\n**[Support Server](https://discord.gg/CmqEgU7)**`)
		.setColor(message.member.displayColor)
	message.channel.send({ embed })
	})
};

module.exports.help = {
	name: 'invite',
};