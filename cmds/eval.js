const Discord = require("discord.js")

module.exports.run = async (clinet, message, args, error, getSupport, green, red) => {
if (message.author.id != process.env.ownerid) {
	return error("You may not use this command")
};
//ifif()
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
try {

	const code = args.join(" ");
	let evaled = eval(code);

	if (typeof evaled !== "string")
		evaled = require("util")
			.inspect(evaled);
		let cleaned = clean(evaled);

	mesage.channel.send("Evaluated", {
		embed: new Discord.RichEmbed()
		.setTitle("Evaluation Sucsessful")
		.setDescription(`\`\`\`xl\n${cleaned}\n\`\`\``)
		.setColor([0, 255, 0])
	});

} catch (err) {
		message.channel.send("Evaluated", {
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