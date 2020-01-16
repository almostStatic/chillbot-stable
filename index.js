const jsonstoreclient = require('async-jsonstore-io')
const jsonstore = new jsonstoreclient(process.env.jstk)
const Discord = require("discord.js");
const Express = require('express');
const Moment = require("moment");
const fs = require("fs");

global.client = new Discord.Client({
	 disableEveryone: true,
});

const bodyParser = require('body-parser');
client.commands = new Discord.Collection();

async function sleep(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
};

let owner = ['501710994293129216']; // premium users are immune to cooldowns <3

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/main.html');
});

app.get('/reportbug', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/reportbug/main.html')
});

app.get('/rickroll', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/r/main.html')
});

app.get('/teapot', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/418.html');
});

app.get('/*', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/notfound/main.html')
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
		return;
	};
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
			.addField("Disconnected At", Moment(Date.now()))
			.setColor([255, 156, 0])
		});
});

client.on("ready", async() => {
			/*
	 * equivalent to: CREATE TABLE tags(
	 * name VARCHAR(255),
	 * description TEXT,
	 * username VARCHAR(255),
	 * usage INT
	 * );
	 */
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
			.addField("\> Guild Name", server.name)
			.addField("\> Guild Owner & ID", `${server.owner.user.tag} | ${server.owner.id}`)
			.addField("\> Guild Members & Total Bot Members", `Server: ${server.memberCount} Total: ${client.users.size}`)
			.addField("\> Added At", Moment(Date.now()))
		})

	server.owner.send("", {
		embed: new Discord.RichEmbed()
		.setDescription(`Thank you for adding **ChillBot**!\nYou may view a full list of command by using \`>help\` note the bot will DM you.\nIf you need any help/assistance, you may join our support server [here](${process.env.supportServer})\nTo report bugs please use \`>reportbug\`\n> Commands are not case sensitive\n> The bot owner is \`static#7894\``)
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
			.addField("\> Guild Name", server.name)
			.addField("\> Guild Owner & ID", `${server.owner.user.tag} | ${server.owner.id}`)
			.addField("\> Guild Members & Total Bot Members", `Server: ${server.memberCount} Total: ${client.users.size}`)
			.addField("\> Removed At", Moment(Date.now()))
		})
})

client.on("error", async (err) => {
	client.channels.get('575390425259704320').send("", {
		embed: new Discord.RichEmbed()
		.setColor("RED")
		.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
		.setTimestamp()
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
	};
		if (message.channel.type == "dm") {
		client.channels.get('600639235938320399').send(`**${message.author.tag}**: ${message.content}`, {
		embed: new Discord.RichEmbed()
		.setFooter("ID: " + message.author.id)
		.setColor([0, 255, 0])
		.setTimestamp()
		});
	};

		var jsonColor = await jsonstore.get('color' + message.author.id)
			.catch((err) => { 
				if (err.code == 404) {

				};
			});

		if(!jsonColor) {
			jsonColor = message.member.displayColor;
		}

	global.prefix = null;
	let data = await	jsonstore.get('prefix' + message.guild.id)	
		.catch(e =>{ if(e.code == 404) { } })

	if(!data){ prefix = process.env.prefix } else { prefix = data; }
	if(!message.content.startsWith(prefix)) return;

	let messageArray = message.content.split(" ");
	let cmd = messageArray[0].toLocaleLowerCase();
	let args = messageArray.slice(1);
	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client,message,args,prefix,jsonColor,sleep,done,error)
});
	client.login(process.env.token)