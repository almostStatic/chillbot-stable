asad = {
		asadmessage: "Your asad ran into a problem that it couldn't handle, and now it needs to restart life",
		bot: {
			dependencies: ['async-jsonstore-io', 'fs', 'discord.js', 'express', 'bodyParser', 'and others. (found in ((//path/)))'],
		}
}
const something = new RegExp("\\b[a-zA-Z0-9]+(?=\=.*)\g")
const JsonStoreClient = require('async-jsonstore-io')
const Discord = require("discord.js")
const Chalk = require("chalk");
const Express = require('express');
const Moment = require("moment");
const jsonstore = new JsonStoreClient('840792d268405642c8d77dd8e9984ef7d6e5e888fc59c11a5ec97d4dc9ef78e1')
const fs = require("fs");
const {	ownerID } = require("./info.json");
const client = new Discord.Client({
	 disableEveryone: true,
	 apiRequestMethod: 'sequential',
});
const bodyParser = require('body-parser');
client.commands = new Discord.Collection();

let premium = ['501710994293129216']; // premium users are immune to cooldowns <3

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Express.static('public'));

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.listen(3000, () => console.log(`Server Started`));

// COMMAND HANDLER
fs.readdir("./cmds/", (err, cmds) => {

	if (err) { 
		console.error(err);
	}
	let jsfile = cmds.filter(f => f.split(".").pop() === "js")
	console.log(jsfile.length)
	if(jsfile.length <= 0) {
		console.error("Commands Not Found");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		client.commands.set(props.help.name, props);
	});
});

client.on("reconnecting", () => {
	client.channels.get('587603328142147584')
		.send("", {
			embed: new Discord.RichEmbed()
			.setTitle("Reconnecting...")
			.addField("> Disconnected At", Moment(Date.now()))
			.setColor([255, 156, 0])
		});
});

client.on("ready", async() => { 
    client.user.setPresence({
        game: { 
            name: `${client.guilds.size} servers, Prefix: >`,
            type: 'WATCHING'
        },
        status: 'idle'
    })
	console.log(`${client.user.tag} is now online!`)
	console.log(`Event Timestamp: ${Moment(Date.now())}`)
	client.channels.get('575388934456999947').send(`**${client.user.username}** is online,\n**Event Timestamp:** ${Moment(Date.now())}`)
	//console.log(client.guilds.map(g=>g.toString()).join("\n"))
});
client.on("error", async err => {
	client.channels.get('575390425259704320').send("", {
		embed: new Discord.RichEmbed()
		.setColor("RED")
		.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
	})
})
process.on("unhandledRejection", (err) => {
		console.error(err);
		client.channels.get('575390425259704320').send("", {
		embed: new Discord.RichEmbed()
		.setColor("RED")
		.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
	});
});

client.on("reconnecting", () => {
	client.channels.get('587603328142147584').send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Reconnecting...")
		.setFooter(`Client Disconnected`)
		.setTimestamp()
		.setColor([200, 50, 50])
	});
});

client.on("message", async(message) => {
	// functions
	async function error(err) {
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription(err)
			.setColor('#FF2D00')
		})
	};
  async function done(str) {
		message.channel.send("", {
			embed: new Discord.MessageEmbed()
			.setDescription(str)
			.setColor([0, 255, 0])
		})
	}
	
	jsonstore.get('b' + message.author.id).then(result => {
		if(result == true) {
			//message.reply('You are blacklisted!')
			return;
		}
	}).catch(e=>{
		if (e.code == 404) {
		}
	})
	let green = client.emojis.get('580716592980164618')
	let red = client.emojis.get('582240944863313934')
	let prefix = process.env.prefix;
		if (!message.content.startsWith(prefix)) return;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0].toLocaleLowerCase();
	let args = messageArray.slice(1);
	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client,message,args,done,error,green,red,prefix); 
	if (message.author.bot) return;
	if (message.channel.type === "dm") {
		client.channels.get('600639235938320399').send(`**${message.author.tag}**: ${message.content}`, {
		embed: new Discord.RichEmbed()
		.setFooter("ID: " + message.author.id)
		.setTimestamp()
		});
			};
			
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

});

	client.login(process.env.token)