const Discord = require("discord.js")
const { stripIndents } = require("common-tags")
const Client = require("fortnite");
const ft = new Client(process.env.apiKey)

module.exports = {
	name: "fortnite",
	aliases: ["fn", "ft"],
	desc: "See someone's fortnite stats, to view a certain platform, just put either `xb1`, `pc` or `psn`. It will search for PC by default",
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	const msg = await message.channel.send("If you see this message for longer than 5 seconds I did not find information for that user. Please try again or ask support (`>support`)")
	if (!args.join(' ')) {
		return msg.edit("Incorrect usage.\n`" + prefix + "fortnite [USER] [PLATFORM(psn|xb1|pc)]` (defaults to PC)")
	}
	let Platforms = ["xb1", "pc", "psn"];
	let lastWord = args[args.length - 1].toLowerCase(); // get last word and make it lower case 
	let platform, username;
	if (Platforms.includes(lastWord)) {
		username = args.slice(0, args.length - 1).join(' ');
		platform = lastWord;
	} else {
		username = args.join(' ');
		platform = Platforms[1];
	}
	const search = await ft.user(username, platform)
		.catch((err) => {
			return msg.edit(process.env.re + "I cannot find user with username `" + username + "`!")
		});
	if (!search.stats) {
					return msg.edit(process.env.re + "I cannot find user with username `" + username + "`!")
	}
	const lifetime = search.stats.lifetime;
	const solo = search.stats.solo;
	const duo = search.stats.duo;
	const squad = search.stats.squad;

	let embed = new Discord.RichEmbed()
	.setAuthor("Search Result")
	.setColor(jsonColor)
	.setTitle(`${search.username} | on ${search.platform}`)
	.addField("Solo", stripIndents`- **Wins**: ${solo.wins}\n- **K/D**: ${solo.kd}\n- **Eliminations**: ${solo.kills}\n- **Kills Per Match**: ${solo.kills_per_match}`, true)
	.addField("Duo", stripIndents`- **Wins**: ${duo.wins}\n- **K/D**: ${duo.kd}\n- **Eliminations**: ${duo.kills}\n- **Kills Per Match**: ${duo.kills_per_match}`, true)
	.addField("Squads", stripIndents`- **Wins**: ${squad.wins}\n- **K/D**: ${squad.kd}\n- **Eliminations**: ${squad.kills}\n- **Kills Per Match**: ${squad.kills_per_match}`, true)
	msg.edit("", { embed })
}
}