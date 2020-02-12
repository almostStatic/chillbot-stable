const jsonstoreclient = require('async-jsonstore-io');
const jsonstore = new jsonstoreclient(process.env.jstk);
const Discord = require("discord.js");
const Express = require('express');
const keyv = require("keyv");
const cmdCount = new keyv("sqlite://./database/cmdCount.sqlite");
const snipes = new keyv("sqlite://./database/snipes.sqlite");
const prefixes = new keyv("sqlite://./database/prefixes.sqlite");
const todo = new keyv("sqlite://./database/todo.sqlite");
const blacklisted = new keyv("sqlite://./database/blacklisted.sqlite");
const logs = new keyv("sqlite://./database/log.sqlite");
const colors = new keyv("sqlite://./database/colors.sqlite");
const Moment = require("moment");
const fs = require("fs");

global.client = new Discord.Client({
	 disableEveryone: true,
});

const bodyParser = require('body-parser');
client.commands = new Discord.Collection();
client.owner = process.env.ownerid;
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

async function sleep(ms){
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
};

let owner = ['501710994293129216'];

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/main.html');
});

app.get('/reportbug', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/reportbug/main.html');
});

app.get('/rickroll', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/r/main.html');
});

app.get('/invite', (req, res) => {
	res.sendFile(process.cwd() + '/public/inv.html');
});

app.get('/teapot', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/418.html');
});

app.get('/*', (req, res) => {
	res.sendFile('/home/runner/chillbot/public/notfound/main.html');
});

app.listen(3000, () => console.log(`Server Started`));

// COMMAND HANDLER
for (const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	client.commands.set(command.name, command);
};

client.on('messageDelete', async(msg) => {
	if (msg.author.bot) return;
		var jsonColor = await colors.get('color' + msg.author.id)
		if (!jsonColor) {
			jsonColor = msg.member.displayColor;
		}
		await snipes.set(msg.channel.id, msg.content).then(async() => {
			await snipes.set("snipe" + msg.channel.id, msg.author.id)
		});
	logs.get('logs' + msg.guild.id)
		.then((result) => {
				if(!result) { return; }
				let channel = msg.guild.channels.find(ch => ch.id == result)
				if(!channel) return;
					channel.send("", {
					embed: new Discord.RichEmbed()
					.setTitle("Message Deleted")
					.setThumbnail(msg.author.avatarURL)
					.addField("Author", msg.author.tag, true)
					.addField("Deleted At", msg.createdAt.toDateString(), true)
					.addField("Channel", msg.channel)
					.addField("Message", msg.content)
					.setColor(jsonColor)
					.setTimestamp()
					})
			}).catch((err) => {  });
});

client.on("disconnected", async() => {
	client.channels.get("659726031946776596").send(`**:warning: The client websocket has disconnected and will no longer attempt to reconnect.**\n\(Event Timestamp: ${Moment(Date.now())})`)
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
	console.clear();
/*	await logs.set("logslogs507889693816520724", "580683231460851719")
	console.log("Logs #1 Exporteed")
	await logs.set("logs658440270634942505", '667855411482853379')
	console.log("Logs #2 Exporteed")
	await logs.set("logs667518569621356560", "667535665176641536")
	console.log("Logs #3 Exporteed")
	await logs.set("logs333949691962195969", "508739007597903904")
	console.log("Logs #4 Exporteed")
	await logs.set("logs575388933941231638", "669707563847385108")
	console.log("Logs #5 Exporteed")
	await logs.set("logs646443369832120341", "661209055808716800")
	console.log("Logs #6 Exporteed")
	await logs.set("logs658440270634942505", '667855411482853379')
	console.log("Logs #7 Exporteed")
*/
	  client.user.setPresence({
       game: {
           name: `${client.users.size} users in ${client.guilds.size} servers`,
          type: 'WATCHING'
        },
      status: 'idle'
    });
	console.log(`${client.user.tag} is now online!`);
	console.log(`Event Timestamp: ${Moment(Date.now())}`);
	client.channels.get('575388934456999947')
		.send(``, {
			embed: new Discord.RichEmbed()
			.setTitle("ChillBot is online")
			.setDescription(`**Event Timestamp**: ${Moment(Date.now())}\n**Guilds**: ${client.guilds.size} | **Channels**: ${client.channels.size} | **Discod.js** v ${Discord.version} | **Memory Usage:** ${Math.trunc(process.memoryUsage().heapUsed / 1024 / 1024)} MB`)
			.setColor([0, 255, 255])
		});
});

client.on('guildCreate', async(server) => {
	T = await client.users.get(process.env.ownerid).tag;
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
	  client.user.setPresence({
       game: {
           name: `${client.users.size} users in ${client.guilds.size} servers`,
          type: 'WATCHING'
        },
      status: 'idle'
    });

	server.owner.send("", {
		embed: new Discord.RichEmbed()
		.setDescription(`Thanks for adding ChillBot!\nWe offer support in our [support server](${process.env.supportServer}). To view a full list of commands, use \`>help\` (commands do not work in DMs). The bot owner is: ${T} you may contact him if you are experiencing issues or have forgotten the prefix for your server. (We can reset it for you!)`)
		.setFooter("COMMANDS DO NOT WORK IN DMS!!")
		.setTitle(`Thank you for adding ${client.user.username} to ${server.name}`)
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
			  client.user.setPresence({
       game: {
           name: `${client.users.size} users in ${client.guilds.size} servers`,
          type: 'WATCHING'
        },
      status: 'idle'
    });

})

client.on("error", async (err) => {
	client.channels.get('575390425259704320').send("", {
		embed: new Discord.RichEmbed()
		.setColor("RED")
		.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
		.setTimestamp()
	})
});

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
			embed: new Discord.RichEmbed()
			.setDescription(str)
			.setColor([0, 255, 0])
		})
	};
		if (message.author.bot) return;
		if (message.webhookID) return;
		if (message.channel.type == "dm") {
			let myCh = await client.channels.get('600639235938320399')
	
		return myCh.send(`**${message.author.tag}**: ${message.content}`, {
			embed: new Discord.RichEmbed()
			.setFooter("ID: " + message.author.id)
			.setColor([0, 255, 255])
			.setTimestamp()
		});
	};

	global.prefix = null;
	let data = await prefixes.get("prefix" + message.guild.id)
	if (!data) {
		prefix = process.env.prefix;
	} else {
		prefix = data;
	}
	if(!message.content.startsWith(prefix)) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	let l = await blacklisted.get(message.author.id)
	if(!l) l = 'N'
	if (l == "Y" && command) return;
	if (command && (!message.guild.me.permissions.has("EMBED_LINKS"))) return message.channel.send("I need the embed links permission. Please contact an admin to fix my perms!");
	if (!command) return;

	let L = await logs.get("logs" + message.guild.id)
	if(!L) L = null;
		var jsonColor = await colors.get("color" + message.author.id)
	if(!jsonColor) {
		jsonColor = "#0CEADC";
	};
	try {
		command.run(client,message,args,prefix,jsonColor,L,sleep,done,error);
		let old = await cmdCount.get("cmds");
		if (!old) old = 0;
		await cmdCount.set("cmds", Number(old + 1));
	} catch (error) {
		console.error(error);
		message.channel.send("", {
			embed: new Discord.RichEmbed()
				.setFooter("ERROR ID: " + message.id, client.user.avatarURL)
				.setColor("#da0000")
				.setAuthor(message.author.username, message.author.avatarURL)
				.setTitle("Error")
				.setDescription(`We're sorry, but there was an error!\n\nPlease, [report this issue](${process.env.supportServer})!`)
				.addField("> Error", error.length >= 1024 ? "The error was too long! It was logged with ID " + message.id : error)
		});
	};
//		commandfile.run(client,message,args,prefix,jsonColor,L,sleep,done,error)
		
});
	client.login(process.env.token);