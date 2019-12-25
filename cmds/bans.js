const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
	await message.guild.fetchBans()
		.then(bans => {
			message.channel.send(bans.size)
		})
			.catch(er => {
				message.channel.send(er, { code: "xl", split: true })
				//message.reply(`${process.env.re} | I was unable to find your bans list.\n> Check my permissions`)
			})
};

module.exports.help = {
	name: "bans"
}