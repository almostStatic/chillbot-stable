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
		a = await client.fetchUser(client.owner);
		let owner_tag = `${a.username}#${a.discriminator}`
		pre = prefix;
		let supportServer = client.guilds.get("575388933941231638");
		let ServerMember = supportServer.member(message.author);
		if (!ServerMember) {
			return message.reply("you need to be a member of my support server to even have a dream of this command working.")
		}
		let Perms = ["stat", "cc", 'botstaff', 'testers', "eval", "dj"];
		let staffRole = supportServer.roles.find(x => x.name == '♕ Bot Staff ♕')
		if (!staffRole) return message.reply("Bot Staff role not found in supportServer. Contact an admin in the support server!")
		let devRole = supportServer.roles.find(r => r.id == '580747547317108738')
		if (!supportServer.member(message.author).roles.has(staffRole.id)) {
			return message.channel.send(`${process.env.re} You must be a bot staff to use this command!`)
		}

		if (!args[0]) {
			return message.channel.send(`${process.env.re} You need to provide a user for this command to work!`)
		}
		if (args[0].toLowerCase() == "help") {
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setTitle("Assign Help")
				.setDescription("I see. You are a new member of our bot staff and don't know how to use the `>assign` command...")
				.addField("Usage", `Using the assign command is simple; use it in the form \`${prefix}assign <@user or ID> <permission>\`.`)
				.addField("Assignable Permissions", `
**__CC__** (matches "cc") :
    - Access to "non-existant" commands 

**__Statistician__** (matches "stat")	 :
		- Access to \`${prefix}calc <calculation>\` | Run a calculation (allowed by default; unlocked by joining the support server)
	
**__Bot Staff__** (matches "botstaff")
		- Access to \`${prefix}assign\`
		- Access to \`${prefix}reload <command>\`
		- Access to \`${prefix}getinv <server id>\`
		- Access to \`${prefix}guildids\`
		- Access to \`${prefix}changeprefix <server id> <new prefix>\` | Lets you change the prefix for any server **the bot is in**
				`)
				.addField("Assignable Permissions (1024 char limit :/)", `
	**__Testers__**: (matches "t") :
		- Noting right now!
			- maybe a secret channel; any suggestions contact \`${owner_tag}\`

**__♕ Evaluator__** (matches "eval")
    - Access to \`${prefix}eval <code>\`		

**__DJ__** (matches "dj") :
    - Some music perks
		- **NOTE**: This has nothing to do with **this** bot, instead gives permissions related to Rythm

				`)
			})
		};
  	let mem = message.guild.members.get(message.mentions.users.first() || message.guild.members.get(args[0]));
		let otherUser;
		if (!mem) {
			try {
				otherUser = await client.fetchUser(args[0]);
			} catch(e) {
				otherUser = await client.fetchUser(message.mentions.members.first().user.id)
			}
		} else {
			otherUser = await client.fetchUser(message.mentions.members.first().user.id)
		}
		let tag = `${otherUser.username}#${otherUser.discriminator}` || `UNKNOWN#0000`;
		let upgrade = args[1];
		if (!upgrade) upgrade = "none given";
		// assign dj
		if (upgrade.toLowerCase().startsWith("dj")) {
			let GuildHashMember = supportServer.members.find(m => m.id == otherUser.id);
			if (!GuildHashMember) {
				return message.channel.send("That user is not a member of the support server")
			}
			let dj = supportServer.roles.find(r => r.name == 'Dj');
			if (!dj) return message.channel.send("A role named \"Dj\" was not found.")
				if (GuildHashMember.roles.has(dj.id)) {
				GuildHashMember.removeRole(dj.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has lost the DJ permission`)
					.setColor(jsonColor)
				})
			}
			if (!GuildHashMember.roles.has(dj.id)) {
				GuildHashMember.addRole(dj.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has received the DJ permission`)
					.setColor(jsonColor)
				})
			};
		};
		// assign ([lar])
		if (upgrade.startsWith("lar")) {
			if (![process.env.ownerid, "301855763226165248"].includes(message.author.id)) {
				return message.channel.send("Only lar can assign this!")
			}
			let lar = supportServer.roles.find(r => r.id == '681300669814145049')
			if (!lar) return message.reply('lar role not found')
				let d = supportServer.members.find(m => m.id == otherUser.id)
				if (d.roles.has(lar.id)) {
				d.removeRole(lar.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has lost the ♕ 𝕷𝖆𝖗 role`)
					.setColor(jsonColor)
				})
			}
			if (!d.roles.has(lar.id)) {
				d.addRole(lar.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has received the ♕ 𝕷𝖆𝖗 role`)
					.setColor(jsonColor)
				})
			};
		};
	/*	if (!upgrade.startsWith("cc")) {
			return message.channel.send(`${process.env.re} Invalid permission; the types of permissions are: ${Perms.map(x => `\`${x}\``.toString()).join(', ')}`)
		};
		if (!upgrade.startsWith("stat")) {
			return message.channel.send(`${process.env.re} Invalid permission; the types of permissions are: ${Perms.map(x => `\`${x}\``.toString()).join(', ')}`)
		};*/
		// ♕ Evaluator assignment (eval)
		if (upgrade.toLowerCase().startsWith('eval')) {
			if (!ServerMember.roles.has(devRole.id)) {
				return message.channel.send("You need to be a developer in order to assign this permission. (as it controls the way the bot behaves in **__every__** guild)")
			};
			let Evaluator = supportServer.roles.find(x => x.name == '♕ Evaluator');
			if (!Evaluator) { return; };
			let target = supportServer.members.find(m => m.id == otherUser.id)

			if (!target) {
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`I cannot assign ${tag} that permission, as they are not in the support server`)
					.setColor('#da0000')
				})
			} 
			if (target.roles.has(Evaluator.id)) {
				target.removeRole(Evaluator.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has lost the ♕ Evaluator permissions`)
					.setColor(jsonColor)
				})
			}
			if (!target.roles.has(Evaluator.id)) {
				target.addRole(Evaluator.id);
				return message.channel.send({
					embed: new Discord.RichEmbed()
					.setDescription(`${tag} has received the ♕ Evaluator permissions`)
					.setColor(jsonColor)
				})
			}			
		return;
		};
		// ♕ Testers assignment (tester) 
		if (upgrade.toLowerCase().startsWith("t")) {
			if (![client.owner, ""].includes(message.author.id)) {};
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