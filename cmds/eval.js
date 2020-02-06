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
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
if (message.author.id != process.env.ownerid) {
	return message.reply("You may not use this command")
};

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

try {

	const code = args.join(" ");
	let evaled = eval(code);
	if (!code) {
		return message.channel.send("You need to give me some code to evaluate!")
	}
	if (typeof evaled !== "string")
		evaled = require("util")
			.inspect(evaled);
		let cleaned = clean(evaled);

	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Evaluation Successful!")
		.setDescription(`\`\`\`xl\n${cleaned}\n\`\`\``)
		.setColor(jsonColor)
	});

} catch (err) {
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setTitle("Evaluation Unsucsessful")
			.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
			.setColor([255, 0, 0])
		})
	};
},
}