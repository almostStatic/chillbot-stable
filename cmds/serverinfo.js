const Discord = require("discord.js");

module.exports = {
	name: "serverinfo",
	aliases: ["server", "guildinfo", "guild", 'serverinfo'],
	usage: 'serverinfo',
	desc: 'Displays some basic server Information',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	try {
		let usr = await client.fetchUser(message.guild.ownerID, true);
		let owner = await message.guild.fetchMember(usr.id);
		let splash = `[View](${message.guild.splashURL})`;
		let mfaLvl = message.guild.mfaLevel;
		let sysCh = message.guild.systemChannel;
		let verificationLvl = message.guild.verificationLevel;
		if(message.guild.verificationLevel == 0) {
			verificationLvl = "None"
		}
		if(message.guild.verificationLevel == 1) {
			verificationLvl = "**Level 1** - Must have a verified email on their Discord Account"
		}
		if(message.guild.verificationLevel == 2) {
			verificationLvl = "**Level 2** - Verified Email and be registered on Discord for longer than 5 minutes";
		};
		if(message.guild.verificationLevel == 3) {
			verificationLvl = "**Level 3** - Must have a verified email; be registerred on Discord for longer than 5 minutes; and be part of this sever for longer than 10 minutes"
		}
		if(message.guild.verificationLevel == 4) {
			verificationLvl = "**Level 4** - Must have a registerred email; be registerred on Discord for longer than 5 minues, part of this sever for longe than 10 minutes and have a verified phone on their Discord account"
		}
		if(!message.guild.systemChannel) {
			sysCh = "None";
		};
		if(!message.guild.splashURL) {
			splash = "None"
		};
		if(message.guild.mfaLevel == 0) {
			mfaLvl = "Disabled";
		};
		if(message.guild.mfaLevel == 1) {
			mfaLvl = "Enabled";
		};

		let embed = new Discord.RichEmbed()
		.setAuthor(message.guild.name, message.guild.iconURL)
		.setThumbnail(message.guild.iconURL)
		.setColor(jsonColor)
		.setTimestamp()
		.addField("❯ Owner", owner.user.tag || `idk#0000`, true)
		.addField("❯ Created On", message.guild.createdAt.toDateString(), true)
		.addField("❯ Channels ", `${message.guild.channels.filter(r => r.type === 'category').size} Categories,\n${message.guild.channels.filter(e=>e.type === 'text').size} Text,\n${message.guild.channels.filter(b=>b.type == 'voice').size} Voice,\n${message.guild.channels.size} Total.`, true)
		.addField("❯ Members", `${message.guild.members.filter(r => r.presence.status == 'online').size} Online,\n${message.guild.members.filter(m=>!m.user.bot).size} Humans,\n${message.guild.members.filter(e=>e.user.bot).size} Bots,\n${message.guild.memberCount} Total Members.`, true)
		.addField("❯ Server Region", message.guild.region, true)
		.addField("❯ Roles", message.guild.roles.size, true)
		.addField("❯ You Joined ", message.member.joinedAt.toDateString(), true)
		.addField('❯ AFK Timeout', `${message.guild.afkTimeout}s`, true)
		.addField('❯ System Channel', sysCh, true)
		.addField('❯ Emoji', message.guild.emojis.size)
		.addField('❯ Verification Level', verificationLvl)
		.addField("❯ Extra Information", `**Splash: ** ${message.guild.splash ? "Yes" : "None set"}\n**Splash URL: ** ${splash}\n**Server-wide 2FA:** ${mfaLvl}\n**Verified**: ${message.guild.verified ? "Verified" : "Not Verified"}\n**Server Icon URL**: [View](${message.guild.iconURL})`)
		.setFooter(`❯ ID: ${message.guild.id}`, message.guild.iconURL)
		message.channel.send({ embed })
	}catch(e){
		console.error(e)
		error(`Sorry, an error occured. Please contact support\n\`\`\`${e}\`\`\`\n${process.env.supportServer}`)
	}
}
}