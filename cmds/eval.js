const Discord = require("discord.js");
const json = require("async-jsonstore-io")
const keyv = require('keyv')
const jsonstore = new json(process.env.jstk)
const snipes = new keyv("sqlite://./database/snipes.sqlite")
const prefixes = new keyv("sqlite://./database/prefixes.sqlite")
const blacklisted = new keyv("sqlite://./database/blacklisted.sqlite")
const logs = new keyv("sqlite://./database/log.sqlite")
const colors = new keyv("sqlite://./database/colors.sqlite")


module.exports = {
	name: "eval",
	aliases: ["run", "evaluate"],
	desc: "Takes some javascript code and evaluates it! This is limited to out bot developers as it is very powerful.",
	usage: "eval <code>",
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let devs = [process.env.ownerid, "437255943181565962"]
	if (!devs.includes(message.author.id)) {
		return message.reply("You may not use this command")
	};

	async function clean(text) {
		if (typeof(text) === "string")
			return await text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		else
				return await text;
	}

	try {
		const code = args.join(" ");
		let evaled = await eval(code);
		if (!code) {
			return await message.channel.send("You need to give me some code to evaluate!")
		}
		if (typeof evaled !== "string")
			evaled = await require("util")
				.inspect(evaled);
			let cleaned = await clean(evaled);

		await message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setTitle("Evaluation Successful!")
			.setDescription(`\`\`\`xl\n${cleaned}\n\`\`\``)
			.setColor(jsonColor)
		});

	} catch (err) {
		await	message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setTitle("Evaluation Unsuccessful")
				.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
				.setColor([255, 0, 0])
			})
		};
	},
};