let Discord = require("discord.js");
let json = require("async-jsonstore-io");
let keyv = require('keyv');
let jsonstore = new json(process.env.jstk);
let editsnipes = new keyv('sqlite://./database/editsnipes.sqlite');
let wtf = new keyv('sqlite://./database/wtf.sqlite');
let botperms = new keyv("sqlite://./database/botperms.sqlite");
let welcomes = new keyv("sqlite://./database/cwelcome.sqlite");
let cmdCount = new keyv("sqlite://./database/cmdCount.sqlite");
let hides = new keyv('sqlite://./database/hides.sqlite')
let snipes = new keyv("sqlite://./database/snipes.sqlite");
let prefixes = new keyv("sqlite://./database/prefixes.sqlite");
let mutes = new keyv('sqlite://./database/mutes.sqlite');
let blacklisted = new keyv("sqlite://./database/blacklisted.sqlite");
let logs = new keyv("sqlite://./database/log.sqlite");
let colors = new keyv("sqlite://./database/colors.sqlite");

module.exports = {
	name: "eval",
	aliases: ["run", "evaluate", 'eval', 'evalu8'],
	desc: "Takes some javascript code and evaluates it! This is limited to our bot developers as it is very powerful.",
	usage: "eval <code>",
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let member = client.guilds.get('575388933941231638').member(message.author);
	let devs = [process.env.ownerid]
	if (!member.roles.has('682177621215150082') || (!member)) { // (eval role id) 
		return message.reply("Wha? Why would you ever want to use this command?")	
	};
	if (!member && (!devs.includes(message.author.id)) || !member) {
		return message.reply("You may not use this command")
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
		code = code.toString().replace(new RegExp(escapeRegExp(client.token), 'g'), '<token removed>');
		
		if(code.includes('forEach')) return msg.edit(process.env.re + ' forEach is forbidden!')
		if(code.includes('token')) return msg.edit(process.env.re + ' client token cannot be evaled!')
		if(code.includes('client[')) return msg.edit(process.env.re + ' client[ cannot be evaled!')
		if(code.includes('client [')) return msg.edit( process.env.re + ' client [ cannot be evaled!')
		let evaled = await eval(code);
		if (!code) {
			return msg.edit("You need to give me some code to evaluate!")
		};
		if (typeof evaled !== "string")
			evaled = await require("util")
				.inspect(evaled);
			let cleaned = await clean(evaled);
			cleaned = client.trim(cleaned, 2030)
			cleaned = await cleaned.replace(client.token, '[token hidden]')
			console.log(cleaned.length)
		await msg.edit("", {
			embed: new Discord.RichEmbed()
			.setTitle("Evaluation Successful!")
			.setDescription(`\`\`\`xl\n${cleaned}\n\`\`\``)
			.setColor(jsonColor)
		});
	} catch (err) {
		await	msg.edit("", {
				embed: new Discord.RichEmbed()
				.setTitle("Evaluation Unsuccessful")
				.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
				.setColor([255, 0, 0])
			});
		};
	},
};