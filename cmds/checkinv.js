const Discord = require('discord.js')

module.exports = {
	name: "checkinv",
	aliases: ["checkinv"],
	desc: 'Get basic information about a discord server invite; the bot does not have to be in the server where the invite was created in',
	usage: 'checkinv <invite-url or invite-code>',
	async run(client,message,args,prefix,jsonColor,logs,sleep,done,error) {
	let msg = await message.channel.send("Checking invite...")
	let invite = args[0];
	if(!invite) {
		return msg.edit(`${process.env.re} You need to provide a valid invite!`)
	}
	 await client.fetchInvite(invite)
		.then(async(inv) => {
		//	Guild = await client.guilds.get(inv.guild.id)
		
return msg.edit("", {
					embed: new Discord.RichEmbed()
					.setColor(jsonColor)
					.setTitle(`Invite ${inv.code}`)
					.addField(`/> Invite`, `\> [Join ${inv.guild.name}](https://discord.gg/${inv.code})`, true)
					.addField("\> Server", `${inv.guild.name} | ID: ${inv.guild.id}`)
					.addField("\> Members", inv.memberCount, true)
					.addField("\> Users Active", inv.presenceCount, true)
					.addField("\> Channel", inv.channel.type == 'text' ? `<#${inv.channel.id}>` : inv.channel.name, true)
					.setTimestamp()
		})
	})
		.catch(() => {
			return msg.edit(`${process.env.re} There was an error with your invite! Please check it is valid`)
		})
}
}