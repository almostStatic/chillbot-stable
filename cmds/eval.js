const Discord = require("discord.js")

module.exports.run = async (client,message,args,prefix,jsonColor,sleep,done,error) => {
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
		.setColor([0, 255, 0])
	});

} catch (err) {
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setTitle("Evaluation Unsucsessful")
			.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
			.setColor([255, 0, 0])
		})
	};
};

module.exports.help = {
	name: 'eval',
};