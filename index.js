const asad = {
		asadmessage: "Your asad ran into a problem that it couldn't handle, and now it needs to restart life",
		bot: {
			dependencies: ['async-jsonstore-io', 'fs', 'discord.js', 'express', 'bodyParser', 'and others.'],
		}
}
const JsonStoreClient = require('async-jsonstore-io')
const Discord = require("discord.js")
const jsonstore = new JsonStoreClient('840792d268405642c8d77dd8e9984ef7d6e5e888fc59c11a5ec97d4dc9ef78e1')
const fs = require("fs");
const client = new Discord.Client({ disableEveryone: true })
const express = require('express');
const bodyParser = require('body-parser');
let commands = ['>invite', '>ping', '>drink', '>membercount', '>slap', '>slowmode', '>suggest', '>uptime', '>reportbug']
client.commands = new Discord.Collection();
let premium = ['501710994293129216'] // premium users are immune to cooldowns <3
let usedCmd = new Set();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.listen(3000, () => console.log('server started'));

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
	if (!message.content.startsWith(commands)) {
		return;
	}
	// functions
	async function error(err) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription(err)
			.setColor('#FF2D00')
		})
	};
	
	jsonstore.get('b' + message.author.id).then(result => {
		if(result == true) {
			//message.reply('You are blacklisted!')
			return;
		}
	}).catch(e=>{
		if (e.code == 404) {
			return;
		}
	})
	premium.forEach(e => {
			if (usedCmd.has(e)) {
			usedCmd.delete(e)
		}
	});
if (usedCmd.has(message.author.id)) { 
		message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription("You may use a ChillBot command once every 5 seconds.\nThis is done to prevent spam, if you have any questions or wish to remove this cooldown, please contact staff on our support server [here](https://discord.gg/CmqEgU7)")
			.setColor(message.member.displayColor)
		});  
	}	else {
	let prefix = process.env.prefix;
		if (!message.content.startsWith(prefix)) return;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0].toLocaleLowerCase();
	let args = messageArray.slice(1);
	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client,message,args,error,asad.bot.dependencies); 
	if (message.author.bot) return;
	if (message.channel.type === "dm") {
		client.channels.get('600639235938320399').send(`**${message.author.tag}**: ${message.content}`, {
		embed: new Discord.RichEmbed()
		.setFooter("ID: " + message.author.id)
		.setTimestamp()
		});
			};
			// 
			
	if (cmd === `${prefix}say`) {
		if (message.channel.type == 'dm') {
			return; 
		};
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription(args.join(' '))
			.setColor(message.member.displayColor)
			.setFooter(`ChillBot say command, ${message.author.tag}\nIf the above user is missusing the command, please contact the bot's owner!`)
		});
	};
	
			if (cmd === `${prefix}b`) {
				if (message.author.id !== process.env.ownerid) {
					return message.reply("You cannot use this command.")
				}; 

				jsonstore.send('b' + message.author.id, true)
				message.reply('Done!')
			} 

			usedCmd.add(message.author.id); 
			setTimeout(() => {
			usedCmd.delete(message.author.id); 
			}, 5000); 
			};
		});

	client.login(process.env.token)