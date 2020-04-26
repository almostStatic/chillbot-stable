let Discord = require("discord.js");
let json = require("async-jsonstore-io");
let keyv = require('keyv');
let logs = new keyv("sqlite://./database/log.sqlite");
let colors = new keyv("sqlite://./database/colors.sqlite"); // eslint-disable-line no-unused-vars

module.exports = {
	name: "eval",
	aliases: ["run", "evaluate", 'eval', 'evalu8'],
	desc: "Takes some javascript code and evaluates it! This is limited to our bot developers as it is very powerful.",
	usage: "eval <code>",
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let member = client.guilds.get(process.env.supportServerId).member(message.author);
	let devs = [process.env.ownerid]
	let role = client.guilds.get(process.env.supportServerId).roles.get('703897730480603156')
	if (!member.roles.has(role.id) || (!member)) { // (eval role id) 
		return message.reply("Wha? Why would you ever want to use this command?")	
	};

	msg = await message.channel.send(
		`${process.env.loading} **__E__valuating** Please Wait`
	);
	async function clean(text) {
		if (typeof(text) === "string")
			return await text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		else
				return await text;
	}

	try {
		function escapeRegExp(str) {
			return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
		}
		let code = args.join(" ")
		if (!code) {
			return msg.edit(process.env.re + " You need to give me some code to evaluate!")
		};
		code = code.toString().replace(new RegExp(escapeRegExp(client.token), 'g'), '<token removed>');
		
		if(code.includes('forEach')) return msg.edit(process.env.re + ' forEach is forbidden!')
		if(code.includes('token')) return msg.edit(process.env.re + ' client token cannot be evaled!')
		if(code.includes('client[')) return msg.edit(process.env.re + ' client[ cannot be evaled!')
		if(code.includes('client [')) return msg.edit( process.env.re + ' client [ cannot be evaled!')
		let evaled;
			if (code instanceof Promise) {
				evaled = await eval(code);
			} else {
				evaled = eval(code);
			};
		if (typeof evaled !== "string")
			evaled = require("util")
				.inspect(evaled);
			let cleaned = await clean(evaled);
			cleaned = client.trim(cleaned, 2030)
			cleaned = await cleaned.replace(client.token, '[token hidden]')
		 msg.edit("", {
			embed: new Discord.RichEmbed()
			.setTitle("Evaluation Successful!")
			.setDescription(`\`\`\`xl\n${cleaned}\n\`\`\``)
			.setColor(jsonColor)
		});
	} catch (err) {
			msg.edit("", {
				embed: new Discord.RichEmbed()
				.setTitle("Evaluation Unsuccessful")
				.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
				.setColor([255, 0, 0])
			});
		};
	},
};