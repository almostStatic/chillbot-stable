const asad = {
		asadmessage: "Your asad ran into a problem that it couldn't handle, and now it needs to restart life"
}
	const JsonStoreClient = require('async-jsonstore-io')
	const jsonstore = new JsonStoreClient('840792d268405642c8d77dd8e9984ef7d6e5e888fc59c11a5ec97d4dc9ef78e1')
	const fs = require("fs");
	const blacklisted = fs.readFileSync("./blck.json", "utf-8")
	const Discord = require("discord.js")
	const client = new Discord.Client({ disableEveryone: true })
	const express = require('express');
	const bodyParser = require('body-parser');

	const app = express();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(express.static('public'));

	app.get('/', (req, res) => {
		res.sendStatus(200);
	});

	app.listen(3000, () => console.log('server started'));

	client.commands = new Discord.Collection();
	// COMMAND HANDLER
	fs.readdir("./cmds/", (err, cmds) => {

		if (err) { 
			console.log(err);
		}
		let jsfile = cmds.filter(f => f.split(".").pop() === "js")
		console.log(jsfile.length)
		if(jsfile.length <= 0) {
			console.log("Commands Not Found");
			return;
		}

		jsfile.forEach((f, i) => {
			let props = require(`./cmds/${f}`);
			client.commands.set(props.help.name, props);
		});
	});

	client.on("ready", async() => { 
		client.user.setActivity(`${client.guilds.size} servers, Prefix: >`, { type: "WATCHING" })
		console.log(`${client.user.username} is now online!`)
		console.log(client.guilds.map(g=>g.toString()).join("\n"))
	});

	process.on("unhandledRejection", (err) => {
		console.log(asad.asadmessage);
		console.error(err);
	});

	client.on("message", async(message) => {
		if (message.author.bot) return;
		if (message.channel.type === "dm") {
			client.channels.get('600639235938320399').send(`**${message.author.tag}**: ${message.content}`, {
				embed: new Discord.RichEmbed()
				.setFooter("ID: " + message.author.id)
				.setTimestamp()
			});
		};
		jsonstore.get('b' + message.author.id).then(result => {
			if(result == true) {
				//message.reply('You are blacklisted!')
				return;
			}
		}).catch()
	//	if (blacklisted.ids.includes(message.author.id)) return;
// 6256 of 6315
		let prefix = process.env.prefix;
		let messageArray = message.content.split(" ");
		let cmd = messageArray[0].toLowerCase();
		let args = messageArray.slice(1);
		let commandfile = client.commands.get(cmd.slice(prefix.length));
		if(commandfile) { commandfile.run(client,message,args); }

	//	message.reply("hello").then(console.log)
	// Commmands included in index.js:
	// say, b

		if (cmd === `${prefix}say`) {
			if (message.channel.type == 'dm') {
				return; 
			};
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setDescription(args.join(' '))
				.setColor(message.member.displayColor)
				.setFooter(`ChillBot say message, ${message.author.tag}\nIf the above user is missusing the command, please contact the bot's owner!`)
			});
		};
 
		if (cmd === `${prefix}b`) {
			if (message.author.id !== process.env.ownerid) {
				return message.reply("You cannot use this command.")
			}; 

			jsonstore.send('b' + message.author.id, true)
			message.reply('Done!')
		}
		
	});

	client.login(process.env.token)