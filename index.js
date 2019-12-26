asad = {
		asadmessage: "Your asad ran into a problem that it couldn't handle, and now it needs to restart life",
		bot: {
			dependencies: ['async-jsonstore-io', 'fs', 'discord.js', 'express', 'bodyParser', 'and others. (found in ((//path/)))'],
		}
}
const something = new RegExp("\\b[a-zA-Z0-9]+(?=\=.*)\g");
const eomtes = require("./emojiCharacters.js");
const Discord = require("discord.js");
const Chalk = require("chalk");
const Express = require('express');
const Moment = require("moment");
const fs = require("fs");
const {	ownerID } = require("./info.json");
global.client = new Discord.Client({
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

client.on("disconnected", async() => {
	client.channels.get("659726031946776596").send(`**:warning: The client websocket has disconnected and will no longer attempt to reconnect.**\n(Event Timestamp: ${Moment(Date.now())})`)
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
	console.clear();
    client.user.setPresence({
        game: { 
            name: `${client.guilds.size} servers, ${client.users.size} users`,
            type: 'WATCHING'
        },
        status: 'idle'
    })
	console.log(`${client.user.tag} is now online!`)
	console.log(`Event Timestamp: ${Moment(Date.now())}`)
	client.channels.get('575388934456999947')
		.send(``, {
			embed: new Discord.RichEmbed()
			.setTitle("ChillBot is online")
			.setDescription(`**Event Timestamp**: ${Moment(Date.now())}\n**Guilds**: ${client.guilds.size} | **Channels**: ${client.channels.size} | **Discod.js** v ${Discord.version} | **Memory Usage:** ${Math.trunc(process.memoryUsage().heapUsed / 1024 / 1024)} MB`)
			.setColor([0, 255, 0])
		})

		//console.log(client.guilds.map(g=>g.toString()).join("\n"))
});
client.on('guildCreate', (server) => {
	client.channels.get("659506604630081547")
		.send("", {
			embed: new Discord.RichEmbed()
			.setColor([0, 255, 0])
			.setTitle("Server Joined")
			.addField("> Guild Owner & ID", `${server.owner.user.tag} | ${server.owner.id}`)
			.addField("> Guild Members & Total Bot Members", `Server: ${server.memberCount} Total: ${client.users.size}`)
			.addField("> Added At", Moment(Date.now()))
		})
server.owner.send("", {
	embed: new Discord.RichEmbed()
	.setDescription(`Thank you for adding **ChillBot**!\nYou may view a full list of command by using \`>help\` note the bot will DM you.\nIf you need any help/assistance, you may join our support server [here](${process.env.supportServer})\nTo report bugs please use \`>reportbug\`\n> Commands are not case sensitive\n> The bot owner is \`static#4432\``)
	.setTitle(`Thank you for adding ${client.user.username}!`)
	.setColor([0, 255, 0])
	})
});

client.on("guildDelete", (server) => {
	client.channels.get("659506604630081547")
		.send("", {
			embed: new Discord.RichEmbed()
			.setColor([255, 0, 0])
			.setTitle("Removed from server")
			.addField("> Guild Owner & ID", `${server.owner.user.tag} | ${server.owner.id}`)
			.addField("> Guild Members & Total Bot Members", `Server: ${server.memberCount} Total: ${client.users.size}`)
			.addField("> Removed At", Moment(Date.now()))
		})
})

client.on("error", async (err) => {
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
	if (message.author.bot) return;
	if (!message.guild.available) return;
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
			embed: new Discord.RichEmbed()
			.setDescription(str)
			.setColor([0, 255, 0])
		})
	}
		if (message.channel.type === "dm") {
		client.channels.get('600639235938320399').send(`**${message.author.tag}**: ${message.content}`, {
		embed: new Discord.RichEmbed()
		.setFooter("ID: " + message.author.id)
		.setColor([0, 255, 0])
		.setTimestamp()
		});
			};

	let green = client.emojis.get('580716592980164618')
	let red = client.emojis.get('582240944863313934')
	let prefix = process.env.prefix;
		if (!message.content.startsWith(prefix)) return;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0].toLocaleLowerCase();
	let args = messageArray.slice(1);
	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client,message,args,done,error,green,red,prefix); 
	if (cmd === `${prefix}say`) {
		message.delete()
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription(args.join(' '))
			.setColor(message.member.displayColor)
		});
	};

});
	client.login(process.env.token)