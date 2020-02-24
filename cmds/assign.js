const Discord = require("discord.js");
const kev = require('keyv');
const botPerms = new kev("sqlite://./database/botperms.sqlite");

module.exports = {
	name: 'assign',
	aliases: ["assign"],
	desc: "Assign permissions related to the bot and some *special* perks. This goes without saying, but only bot devs can use this.\n\n**Do not join the support server asking for these \"special perks\".**\n\nUse `>assign help` for more info.",
	usage: 'assign <user> <upgrade|downgrade>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		// >assign @user #upgrade
		pre = prefix;
		let supportServer = client.guilds.get("575388933941231638");
		let ServerMember = supportServer.member(message.author);
		if (!ServerMember) {
			return message.reply("you need to be a member of my support server to even have a dream of this command working.")
		}
		let Perms = ["stat", "cc", 'botstaff', 'tester'];
		let staffRole = supportServer.roles.find(x => x.name == '♕ Bot Staff ♕');
		if (!staffRole) return message.reply("Bot Staff role not found in supportServer. Contact an admin in the support server!")
		if (!supportServer.member(message.author).roles.has(staffRole.id)) {
			return message.channel.send(`${process.env.re} You must be a bot staff to use this command!`)
		}
		
		if (!args[0]) {
			return message.channel.send(`${process.env.re} You need to provide a user for this command to work!`)
		}
		if (args[0].toLowerCase() == "help") {
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setTitle("Assign Help")
				.setDescription("I see. You are a new member of our bot staff and don't know how to use the `>assign` command...")
				.addField("Usage", `Using the assign command is simple; use it in the form \`${prefix}assign <@user or ID> <permission>\`.`)
				.addField("Assignable Permissions", `**Statistician** (\`stat\`) :\n  - Acess to the \`${prefix}calc <calculation>\`\n\n**Bot Staff** (botstaff) :\n  - Acess to the \`${prefix}\assign <user> <permission>\`\n  - Acess to the \`${pre
				}changeprefix <server id> <new prefix>\` (for example \`${prefix}prefixchange ${message.guild.id} !!\` will change the prefix for ${message.guild.name} to !!)`)
			})
		};
  	let mem = message.guild.members.get(message.mentions.users.first() || message.guild.members.get(args[0]));
		let otherUser;
		if (!mem) {
			try {
				otherUser = await client.fetchUser(args[0]);
			}catch(e){
				otherUser = await client.fetchUser(message.mentions.members.first().user.id)
			}
		} else {
			otherUser = await client.fetchUser(message.mentions.members.first().user.id)
		}
		let tag = `${otherUser.username}#${otherUser.discriminator}` || `UNKNOWN#0000`;
		let upgrade = args[1];
		if (!upgrade) upgrade = "none given";
	/*	if (!upgrade.startsWith("cc")) {
			return message.channel.send(`${process.env.re} Invalid permission; the types of permissions are: ${Perms.map(x => `\`${x}\``.toString()).join(', ')}`)
		};
		if (!upgrade.startsWith("stat")) {
			return message.channel.send(`${process.env.re} Invalid permission; the types of permissions are: ${Perms.map(x => `\`${x}\``.toString()).join(', ')}`)
		};*/
		// ♕ Testers assignment (tester) 
		if (upgrade.toLowerCase().startsWith("t")) {
			let TestersRole = supportServer.roles.find(r => r.name == '♕ Testers');
			if (!TestersRole) {
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setColor("#da0000")
					.setDescription(`A role with name \`♕ Testers\` was not found in my support server!`)
				})
			};
			let PERSON = supportServer.members.find(x => x.id == otherUser.id);
			if (!PERSON) {
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`I cannot assign ${tag} that permission, as they are not in the support server`)
					.setColor('#da0000')
				})
			} 
			if (PERSON.roles.has(TestersRole.id)) {
				PERSON.removeRole(TestersRole.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has lost the ♕ Testers role and any associated permissions`)
					.setColor(jsonColor)
				})
			}
			if (!PERSON.roles.has(TestersRole.id)) {
				PERSON.addRole(TestersRole.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has received the ♕ Testers role and any associated permissions`)
					.setColor(jsonColor)
				})
			}
			return;
		};
		// botstaff assignment (or botstaff)
		if (upgrade.startsWith('botstaff')) {
			let botStaff = supportServer.roles.find(x => x.name == '♕ Bot Staff ♕');
			if (message.guild.id != supportServer.id) {
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`The assignment of this permission only works in the support server!`)
					.setColor('#da0000')
				});
			};
			let USER = supportServer.members.find(x => x.id == otherUser.id);
			if (!USER) {
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} is not a member of the support server! They may not be assigned this permission`)
					.setColor('#da0000')
				})
			};
			if (USER.roles.has(staffRole.id)) {
				USER.removeRole(staffRole.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has lost bot staff`)
					.setColor(jsonColor)
				})
			}
			if (!USER.roles.has(staffRole.id)) {
				USER.addRole(staffRole.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has received bot staff`)
					.setColor(jsonColor)
				})
			}
		};
		// cc assignment (fake commands)
		if (upgrade.startsWith('cc')) {
			let PERM = await botPerms.get("cc" + otherUser.id);
			if (PERM == "Y") {
				await botPerms.set("cc" + otherUser.id, "N");
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setColor(jsonColor)
					.setDescription(`${tag} has lost their CC permission!`)
				})
			} else {
				await botPerms.set("cc" + otherUser.id, "Y");
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setColor(jsonColor)
					.setDescription(`${tag} has received the CC permission!`)
				});
			};
		};
		// Statistician Assignment
		if (upgrade.startsWith("stat")) {
			let memberOfSupportServer = supportServer.members.find(x => x.id == otherUser.id);
			let MEM = supportServer.member(memberOfSupportServer);
			if (!memberOfSupportServer) {
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setColor('#da0000')
					.setDescription(`I cannot assign ${tag} that permission as they are not a member of the support server!`)
				});
			};
			let stat = supportServer.roles.find(x => x.name == 'Statistician');
			if (!stat) {
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription("I cannot find the Statistician role in the support server. Please contact an admin")
					.setColor("#da0000")
				})
			};
			if (memberOfSupportServer.roles.has(stat.id)) {
				memberOfSupportServer.removeRole(stat.id)
				return	message.channel.send({
					embed: new Discord.RichEmbed()
					.setColor(jsonColor)
					.setDescription(`${tag} has lost their Statistician perk!`)
				})
			};
			if (!memberOfSupportServer.roles.has(stat.id)) {
				memberOfSupportServer.addRole(stat.id)
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has received the Statistician perk!`)
					.setColor(jsonColor)
				});
			};
		};
		// Stat Assigment [END]
		message.channel.send(`${process.env.re} Invalid permission; the types of permissions are: ${Perms.map(x => `\`${x}\``.toString()).join(', ')}
		`)
	},
};