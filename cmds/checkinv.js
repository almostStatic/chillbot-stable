const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
	let msg = await message.channel.send("Getting invite...")
	let invite = args[0]
	if(!invite) {
		return msg.edit(`${process.env.re} You need to provide a valid invite!`)
	}
	 await client.fetchInvite(invite)
		.then(async(inv) => {
		//	Guild = await client.guilds.get(inv.guild.id)
		
return msg.edit("", {
					embed: new Discord.RichEmbed()
					.setColor(message.member.displayColor)
					.setTitle("Invite " + inv.code)
					.addField("\> Link", `[Join ${inv.guild.name}](https://discord.gg/${inv.code})`, true)
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

module.exports.help = {name:"checkinv"}