const Discord = require("discord.js")
module.exports = {
	name: "bans",
	aliases: ["banned"],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		
	if (!message.member.permissions.has("BAN_MEMBERS")) {
		return message.channel.send(`${process.env.re} You do not have correct permissinos to use this command.\n> You need the **ban members** permission!`)
	}
	 message.guild.fetchBans(true)
		.then(async(bans) => {
			if (bans.size == 0) {
				return message.channel.send(`${process.env.gre} There are no users banned from **${message.guild.name}**!`)
			}
			let bList = bans.map(b => `${b.user.tag} (${b.user.id}) | ${b.reason}`.toString()).join("\n")
		message.channel.send(`Users banned from **${message.guild.name}**:\`\`\`\n${bList}\n\`\`\``, {
			split: true, 
		})
			.catch(er => {
				message.reply(`${process.env.re} | I was unable to find your bans list.\n> Check my permissions`)
			})
		}) 
	}
}
