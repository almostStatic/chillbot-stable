const Discord = require("discord.js");

module.exports = {
	name: "serverinfo",
	aliases: ["server", "guildinfo", "guild", 'serverinfo'],
	usage: 'serverinfo',
	desc: 'Displays some basic server Information',
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	try {
		let splash = `[View](${message.guild.splashURL})`;
		let mfaLvl = message.guild.mfaLevel;
		let sysCh = message.guild.systemChannel;
		let verificationLvl = message.guild.verificationLevel;
		if(message.guild.verificationLevel == 0) {
			verificationLvl = "None"
		}
		if(message.guild.verificationLevel == 1) {
			verificationLvl = "Level 1 - Must have a verified email on their Discord Account"
		}
		if(message.guild.verificationLevel == 2) {
			verificationLvl = "Level 2 - Verified Email and be registerred on Discord for longer than 5 minutes";
		};
		if(message.guild.verificationLevel == 3) {
			verificationLvl = "Level 3 - Must have a verified eail; be registerred on Discord for longer than 5 minutes; and part of this sever for longer than 10 minutes"
		}
		if(message.guild.verificationLevel == 4) {
			verificationLvl = "Level 4 - Must have a registerred email; be registerred on Discord for longer than 5 minues, part of this sever for longe than 10 minutes and have a verified phone on their Discord account"
		}
		if(!message.guild.systemChannel) {
			sysCh = "None";
		};
		if(!message.guild.splashURL) {
			splash = "There is no splash setup for this server!"
		};
		if(message.guild.mfaLevel == 0) {
			mfaLvl = "Disabled";
		};
		if(message.guild.mfaLevel == 1) {
			mfaLvl = "Enabled";
		};

		let embed = new Discord.RichEmbed()
		.setTitle(message.guild.name) 
		.setThumbnail(message.guild.iconURL)
		.setColor(jsonColor)
		.setTimestamp()
		.addField("> Owner", message.guild.owner.user.tag)
		.addField("> Created On", message.guild.createdAt.toDateString())
		.addField("> Channels ", `${message.guild.channels.filter(r => r.type === 'category').size} Categories,\n${message.guild.channels.filter(e=>e.type === 'text').size} Text,\n${message.guild.channels.filter(b=>b.type == 'voice').size} Voice,\n${message.guild.channels.size} Total.`)
		.addField("> Members", `${message.guild.members.filter(r => r.presence.status == 'online').size} Online,\n${message.guild.members.filter(m=>!m.user.bot).size} Humans,\n${message.guild.members.filter(e=>e.user.bot).size} Bots,\n${message.guild.memberCount} Total Members.`)
		.addField("> Server Region", message.guild.region)
		.addField("> Roles", message.guild.roles.size)
		.addField("> You Joined ", message.member.joinedAt.toDateString())
		.addField("> Extra Information", `**AFK Timeout: ** ${message.guild.afkTimeout} (seconds)\n**Splash: ** ${message.guild.splash ? "Yes" : "None set"}\n**Splash URL: ** ${splash}\n**System Channel: ** ${sysCh}\n**Emojis**: ${message.guild.emojis.size}\n**Server-wide 2FA:** ${mfaLvl}\n**Verified**: ${message.guild.verified ? "Yes" : "No"}\n**Server Icon URL**: [View](${message.guild.iconURL})\n**Verification Level**: ${verificationLvl}`)
		.setFooter(`ID: ${message.guild.id}`, message.guild.iconURL)
		message.channel.send({ embed })
	}catch(e){
		console.error(e)
		error(`Sorry, an error occured. Please contact support\n\`\`\`${e}\`\`\`\n${process.env.supportServer}`)
	}
}
}