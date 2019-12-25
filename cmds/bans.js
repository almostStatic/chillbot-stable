const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
	if (!message.member.permissions.has("BAN_MEMBERS")) {
		return message.channel.send(`${process.env.re} You do not have correct permissinos to use this command.\n> You need the **ban members** permission!`)
	}
	 message.guild.fetchBans(true)
		.then(async(bans) => {
			let bList = bans.map(b => `${b.user.tag} | ${b.user.id}`.toString()).join("\n")
			message.channel.send(`
Users banned from **${message.guild.name}**:
\`\`\`
${bList}
\`\`\`
`, {
	split: true
})
		})
			.catch(er => {
				message.reply(`${process.env.re} | I was unable to find your bans list.\n> Check my permissions`)
			})
};

module.exports.help = {
	name: "bans"
}