/**
 * upvote please https://repl.it/feedback/p/preview-markdown-as-you-type-it
 * https://repl.it/feedback/p/custom-replit-syntax-themes-in-the-editor
 * lol this is kinda funny
 */
const Discord = require("discord.js");
const Express = require('express');
const keyv = require("keyv");
const keys = [
	{ key: "1324657980", owner: "me" },
	{ key: null, owner: null, },
	{ key: null, owner: null, },
	{ key: null, owner: null, },
];

//if (keys.map(x => x.key).join('|').split('|').includes('1324657980')) console.log(true)

const editsnipes = new keyv('sqlite://./database/editsnipes.sqlite');
const wtf = new keyv('sqlite://./database/wtf.sqlite');
const botperms = new keyv("sqlite://./database/botperms.sqlite");
const welcomes = new keyv("sqlite://./database/cwelcome.sqlite");
const cmdCount = new keyv("sqlite://./database/cmdCount.sqlite");
const hides = new keyv('sqlite://./database/hides.sqlite')
const snipes = new keyv("sqlite://./database/snipes.sqlite");
const prefixes = new keyv("sqlite://./database/prefixes.sqlite");
const blacklisted = new keyv("sqlite://./database/blacklisted.sqlite");
const logs = new keyv("sqlite://./database/log.sqlite");
const colors = new keyv("sqlite://./database/colors.sqlite");
const Moment = require("moment");
const fs = require("fs");
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
global.client = new Discord.Client({
	 disableEveryone: true,
	 messageCacheMaxSize: 100,
	 messageCacheLifetime: 1200,
});
	console.log(`
	HeapUsed: ${process.memoryUsage().heapUsed / 1024 / 1024}
	HeapTotal: ${process.memoryUsage().heapTotal / 1024 / 1024}
	`)

const DBL = require('dblapi.js')
const dbl = new DBL(process.env.DBL, client);

const bodyParser = require('body-parser');
client.commands = new Discord.Collection();
client.owner = process.env.ownerid;
client.config = {
	'default': {val: ''},
	evalRoleID: "703897730480603156",
	readyChannel: "703892331681677343",
	rateLimit: '709538126728659026',
	errorChannel: "703892332348702720",
	dmChannel: "703892332348702720",
	serverJoins: "703892333003014164",
	memberLog: "703892334449786920",
	defaultHexColor: '#F385C4'
};
client.trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
client.db = new keyv('sqlite://./data.sqlite');
client.getUserFromMention = (mention) => {
	if (!mention) return;
	if (mention.startsWith('<@') && mention.endsWith('>')) {
			mention = mention.slice(2, -1);
				if (mention.startsWith('!')) {
						mention = mention.slice(1);
				};
				return client.users.get(mention);
		};
	};
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(Express.static('public'));

app.get('/', (req, res) => {
	if (req.query.a) {
		console.log(req.query.a)
	};
	res.sendFile(process.cwd() + '/public/main.html');
});

app.get('/users/:id/send', (req, res) => {
	if(req.headers.authorization != process.env.auth) return res.json({ error: 'Unauthorised', code: 401 });
	const id = req.params.id;
	const usr = client.users.get(id);
	const msg = req.headers.message;
	if(!msg) return res.json({ error: { message: 'msg not provided in req#headers', code: 400 } })
	if (!usr) return res.json({ error: { message: 'ID not provided', code: 400 } }).status(400);
	usr.send(req.headers.message)
	res.json({ message: 'successfully sent to ' + usr.tag })
});

app.get('/users/:id', async(req, res) => {
	const id = req.params.id;
	if(!id) return res.json({ error: { message: 'id not provided', code: 401 } });
	let usr;
	try {
		usr = client.users.get(id);
	} catch (err) {
		usr = await client.fetchUser(id, { cache: false });
	};
	res.send(usr).status(200);
})

app.get('/replit/auth', async(req, res) => {
	console.log(req.headers['x-replit-user-id']);
});

app.get('/reportbug', (req, res) => {
	res.sendFile(process.cwd() + '/public/reportbug/main.html')
});

app.get('/backdoor/kill', (req, res) => {
	if (!req.query.auth || (!keys.map(x => x.key).join('/').split('/').includes(req.query.auth.toLowerCase()))) {
		return res
			.status(401)
			.send("Access Denied")
	} else {
		res.send(`<p><i>Terminating Process...</i></p>`)
		process.exit(0);
	}
});

app.get('/ping', (req, res) => {
	res
		.status(200)
		.json({ timestamp: Date.now() });
});

app.get('/report-bug', (request, result) => {
	result.sendFile(process.cwd() + '/public/reportbug/main.html');
});

app.get('/console', (req, res) => {
	if (!req.query.auth || (req.query.auth != process.env.auth)) {
		window.location.replace("https://chillbot.asad.codes/rickroll")
	};
	if (!req.query.msg) req.query.msg = '';
	if (req.query.msg == "clearConsole"){
		console.clear();
		console.log(`Console was cleared`)
		res.send("<p><i>Console was cleared</i></p>")
		return;
	};
	console.log(req.query.msg);
	res.send("Successfully sent to console.")
});

app.get('/rickroll', (req, res) => {
	res.sendFile(process.cwd() + '/public/r/main.html');
});

app.get('/invite', (req, res) => {
	res.sendFile(process.cwd() + '/public/inv.html');
});

app.get('/teapot', (req, res) => {
	res.sendFile(process.cwd() + '/public/418.html');
});

dbl.on('posted', () => {
  console.log("[DBL] | Server Count posted!")
});

dbl.on('error', e => {
	console.error(e);
 client.users.get(client.owner).send("DBL Error: " + e)
});
//https://discordapp.com/api/webhooks/681509447998505024/93UdYA2cpvRK9M5UWb76ouQAbJDALk9zDWP0P368SzRbp9mkTmOb1j3frQpqlULv2tXK

// COMMAND HANDLER
for (const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	client.commands.set(command.name, command);
};

client.on('messageUpdate', async(oldMessage, newMessage) => {
	if (oldMessage.author.bot) return;
	if (newMessage.content == oldMessage.content) return;
//	client.emit('message', newMessage);
	await editsnipes.set('es' + oldMessage.channel.id, { oldMsg: trim(oldMessage.content, 1024), newMsg: trim(newMessage.content, 1024), author: newMessage.author.id })
	let logID = await logs.get('logs' + oldMessage.guild.id);
	let color = await colors.get('color' + oldMessage.author.id)
	if (!color) color = client.config.defaultHexColor;
	if (!logID) return;
	let channel = await newMessage.guild.channels.find(c => c.id == logID);
	if (!channel) return;
	channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle('Message Edited in #' + oldMessage.channel.name)
		.setThumbnail(oldMessage.author.avatarURL)
		.setColor(color)
		.addField("Old Message", trim(oldMessage.content, 1024), true)
		.addField("New Message", trim(newMessage.content, 1024), true)
		.setFooter("Edited At", newMessage.author.avatarURL)
		.setTimestamp()
	})
});

client.on('messageDelete', async(msg) => {
	if (msg.author.bot) return;
		var jsonColor = await colors.get('color' + msg.author.id)
		if (!jsonColor) {
			jsonColor = msg.member.displayColor;
		};
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
					.addField("Channel", msg.channel, true)
					.addField("Message", msg.content)
					.setColor(jsonColor)
					.setTimestamp()
					})
			}).catch((err) => {  });
});

client.on("disconnected", async() => {
	client.channels.get(client.config.errorChannel).send(`**:warning: The client websocket has disconnected and will no longer attempt to reconnect.**\n\(Event Timestamp: ${Moment(Date.now())})`);
});

client.on('guildMemberRemove', async(member) => {
	if (member.guild.id == process.env.supportServerId) {
			client.channels.get(client.config.memberLog).send({
				embed: new Discord.RichEmbed()
				.setTimestamp()
				.setColor('#da0000')
				.setAuthor(member.user.tag, member.user.avatarURL)
				.setFooter(`Member Left • ID: ${member.user.id}`, 
				member.user.avatarURL)
			})	
	}
});

client.on("guildMemberAdd", async(member) => {
	if (member.user.bot) return;
		let owner = client.users.get(client.owner).tag;
		let channel = member.guild.channels.find(x => x.name == 'general');
	if ([process.env.supportServerId].includes(member.guild.id)){
		if (['462220963224879105', '157558716844081152', '336920581624692737', '540130125136658432', '163715276733415426', '684368759581835303'].includes(member.user.id)) {
			let muted = member.guild.roles.find(x=>x.name =='Muted');
			let val = await wtf.get(member.user.id)
			if (val == 'Y') {
				await member.addRole(muted.id)
				return;
			}
			if (!val) { 
				val = "N"
				wtf.set(member.user.id, 'Y')
			 }
		await	member.addRole(muted.id);
		await	wtf.set(member.user.id, 'Y');
		await	channel.send({
				embed: new Discord.RichEmbed()
				.setColor("#36393e")
				.setDescription(`${member.user.tag} has received a 10000000000000000000000 minute mute for "owen repellent". If you beleive this is a mistake (which it's not), please DM ${owner}. They were sent the following message:`)
			});
		await	channel.send({
				embed: new Discord.RichEmbed()
				.setColor("#da0000")
				.setDescription(`You have received a 10000000000000000000000 minute mute from ${member.guild.name} for "owen repellent". If you beleive this is a mistake, then feel free to DM ${owner}`)
				.addField("Moderator", client.user.tag, true)
				.addField("Reason", `owen repellent`, true)
			});
			await member.send({
				embed: new Discord.RichEmbed()
				.setColor("#da0000")
				.setDescription(`You have received a 10000000000000000000000 minute mute from ${member.guild.name} for "owen repellent" If you beleive this is a mistake, then feel free to DM ${owner}`)
				.addField("Moderator", client.user.tag, true)
				.addField("Reason", `owen repellent`, true)
			}).catch((error) => {  });
		}
	};
	if (member.guild.id == process.env.supportServerId) {
		if (parseInt(member.user.createdTimestamp) > Date.now() - 1209600000) {
			let mute = member.guild.roles.find(r => r.name == 'Muted')
			let role = member.guild.roles.find(x => x.name == 'Member')
			let stat = member.guild.roles.find(x => x.name == 'Statistician');
			member.addRole(mute.id);
			member.addRole(stat.id);
			member.addRole(role.id);
			channel.send({
				embed: new Discord.RichEmbed()
				.setColor("#000001")
				.setDescription(`${member.user.tag} has received a 10000000000000000000000 minute mute for "[AUTOMOD] anti-raid (DM ${owner} to get unmuted)". If you beleive this is a mistake, please DM ${owner}. They were sent the following message:`)
			});
			channel.send({
				embed: new Discord.RichEmbed()
				.setColor("#da0000")
				.setDescription(`You have received a 10000000000000000000000 minute mute from ${member.guild.name} because of "[AUTOMOD] anti-raid (DM ${owner} to get unmuted)". If you beleive this is a mistake, then feel free to DM ${owner}`)
				.addField("Moderator", client.user.tag, true)
				.addField("Reason", `[AUTOMOD] anti-raid (dm ${owner} to get unmuted)`, true)
			});
			member.send({
				embed: new Discord.RichEmbed()
				.setColor("#da0000")
				.setDescription(`You have received a 10000000000000000000000 minute mute from ${member.guild.name} because of "[AUTOMOD] anti-raid (DM ${owner} to get unmuted)". If you beleive this is a mistake, then feel free to DM ${owner}`)
				.addField("Moderator", client.user.tag, true)
				.addField("Reason", `[AUTOMOD] anti-raid (DM ${owner} to get unmuted)`, true)
			})
			.catch((e) => {});
		};
		let d = await welcomes.get(member.id)
		let role = member.guild.roles.find(x => x.name == 'Member')
		let stat = member.guild.roles.find(x => x.name == 'Statistician');
		if (!d) {
			await welcomes.set(member.id, "Y");
			channel.send(`Thank you for joining our server ${member}! By joining, you have unlocked the \`>calc\` command! Use \`>cmd calc\` for some extra info. Please take a look at <#576012164654039051> and <#677528160895500289> before continuing. Hope you have a nice time here!`)
			member.addRole(stat.id, "Granting permission to use the calc command")
			member.addRole(role.id, `Automatic role added; Member`)
		}
		if (d == 'Y') {
			channel.send(`Welcome back ${member}! Why did you leave in the first place? :c`)
			member.addRole(stat.id, "Granting permission to use the calc command");
			member.addRole(role.id, `Automatic role added; Member`)
		}
		client.channels.get(client.config.memberLog).send({
			embed: new Discord.RichEmbed()
			.setTimestamp()
			.setColor('#00FF0C')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setFooter(`Member Joined • ID: ${member.user.id}`, member.user.avatarURL)
		})
	} else {
		return;
	};
});

client.on("reconnecting", () => {
	client.channels.get(client.config.readyChannel)
		.send("", {
			embed: new Discord.RichEmbed()
			.setTitle("Reconnecting...")
			.setColor([255, 156, 0])
		});
});

client.on("ready", async() => {
	console.log(`
	HeapUsed: ${process.memoryUsage().heapUsed / 1024 / 1024}
	HeapTotal: ${process.memoryUsage().heapTotal / 1024 / 1024}
	`)
	console.clear();

/* (8765, 0998)
	await logs.set("logslogs507889693816520724", "580683231460851719")
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
	client.channels.get(client.config.readyChannel).send(``, {
			embed: new Discord.RichEmbed()
			.setTitle("ChillBot is online")
			.setDescription(`**Event Timestamp**: ${Moment(Date.now())}\n**Guilds**: ${client.guilds.size} | **Channels**: ${client.channels.size} | **Discod.js** v ${Discord.version} | **Memory Usage:** ${Math.trunc(process.memoryUsage().heapUsed / 1024 / 1024)} MB`)
			.setColor("RANDOM")
		});
		if (keys.includes("1324657980")) {
			console.log('true')
		};
});


/*dbl.webhook.on('vote', async(voter) => {
	let server = client.guilds.get('575388933941231638')
	let channel = client.channels.get('681508116973617293')
	let role = server.roles.find(x => x.name == 'Civilian')
	let member = server.member(voter.user);
	if (!member) {
		let user = await client.fetchUser(voter.user);
		let TAG = `${user.username}#${user.discriminator}`;
		return channel.send(`**${TAG}** (${voter.id}) just voted!`, {
			embed: new Discord.RichEmbed()
			.setColor("#da0000")
			.setDescription("They aren't in the server and could not claim their free rewards for voting")
		})
	}
	member.addRole(role.id)
		.catch((err) => {});
	channel.send(`Thanks <@${voter.user}> for voting!`, {
		embed: new Discord.RichEmbed()
		.setColor("GREEN")
		.setDescription(`You received your rewards!`)
	})
})
*/

client.on('guildCreate', async(server) => {
	T = await client.users.get(process.env.ownerid).tag;
	client.channels.get(client.config.serverJoins)
		.send("", {
			embed: new Discord.RichEmbed()
			.setColor([0, 255, 0])
			.setTitle("Server Joined")
			.setDescription("Guild ID: " + server.id)
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

/*	server.owner.send("", {
		embed: new Discord.RichEmbed()
		.setDescription(`Thanks for adding ChillBot!\nWe offer support in our [support server](${process.env.supportServer}). To view a full list of commands, use \`>help\` (commands do not work in DMs). The bot owner is: ${T} you may contact him if you are experiencing issues or have forgotten the prefix for your server. (We can reset it for you!)`)
		.setFooter("COMMANDS DO NOT WORK IN DMS!!")
		.setTitle(`Thank you for adding ${client.user.username} to ${server.name}`)
		.setColor([0, 255, 0])
		})
*/
});

client.on("guildDelete", (server) => {
	client.channels.get(client.config.serverJoins)
		.send("", {
			embed: new Discord.RichEmbed()
			.setColor([255, 0, 0])
			.setTitle("Removed from server")
			.setDescription("Guild ID: " + server.id)
			.addField("\> Guild Name", server.name)
	//		.addField("\> Guild Owner & ID", `${server.owner.user.tag || `user_mot_cached#0000`} | ${server.owner.id || 'idk (user not cached)'}`)
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
});

client.on("error", async (err) => {
	client.channels.get(client.config.errorChannel).send("", {
		embed: new Discord.RichEmbed()
		.setColor("RED")
		.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
		.setTimestamp()
	})
});

process.on("unhandledRejection", (err) => {
		console.error(err);
		client.channels.get(client.config.errorChannel).send("", {
		embed: new Discord.RichEmbed()
		.setColor("RED")
		.setDescription(`\`\`\`xl\n${err}\n\`\`\``)
		.setFooter(process.cwd())
	});
});

client.on("reconnecting", () => {
	client.channels.get(client.config.readyChannel).send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Reconnecting...")
		.setFooter(`Client Disconnected`)
		.setTimestamp()
		.setColor([200, 50, 50])
	});
});

client.on('rateLimit', (info) => {
	if (!info.path) info.path = 'n/a';
	if (!info.route) info.route = 'n/a';
	if (!info.timeout) info.timeout = 'n/a';
	client.channels.get(client.config.rateLimit).send({
		embed: new Discord.RichEmbed()
		.setColor('#2296F3')
		.setTimestamp()
		.setAuthor('Rate Limit Reached')
		.addField(`Path`, "`" + info.path + '`', true)
		.addField('Route', "`" + info.route + "`", true)
		.addField('\u200b', '\u200b', true)
		.addField(`Timeout`, info.timeout, true)
		.addField('Limit', info.limit, true)
		.addField('Method', "`" + info.method.toUpperCase() + "`")
	})
});

client.on("message", async(message) => {
	if(message.content.toLowerCase() == client.token.toLowerCase() || (message.content.includes(client.token.substring(0,8))) || message.content.includes(client.token.substring(8,16)) || message.content.includes(client.token.substring(16,24)) || message.content.includes(client.token.substring(24,32)) || (message.content == '?simulate' && message.author.id == client.owner)) {
		let status = 'Deleted Successfully'
		message.delete().catch(x => { status = 'Delete Unsuccessful' });
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setColor('#da0000')
			.setDescription(`${message.author.tag} has been reported to devs because of "suspected token leak". The developers have been notified`)
		});
		client.users.get(client.owner).send(`**Suspected Token Leak**\n\nUser: ${Discord.escapeMarkdown(message.author.tag)} (${message.author.id})\nGuild: ${message.guild.name || '<DM Channel>'} (${message.guild.id || '<DM Channel>'})\nChannel: ${message.channel.name} (${message.channel.id})\nDelete Successful?: ${status}`, {
			embed: new Discord.RichEmbed()
			.setColor('#da0000')
			.setAuthor(`The token should be changed immediately`)
			.setTitle('Message')
			.setDescription(message.content)
			.addField('Attachments?', message.attachments.map(x => `[Attachment](${x.url})`).join(' ') || '<none found>')
		})
	};

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
			let myCh = await client.channels.get(client.config.dmChannel)
	
		 return myCh.send(`**${message.author.tag}**: ${message.content}`, {
			embed: new Discord.RichEmbed()
			.setFooter("ID: " + message.author.id)
			.setColor([0, 255, 255])
			.setTimestamp()
		});
	};
	ownertag = await client.users.get(client.owner).tag;
	const inviteRegex = new RegExp('(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]')
	const invResult = await inviteRegex.test(message.content);
	if (invResult == true && message.guild.id == process.env.supportServerId) {
		if (message.member.permissions.has('MANAGE_GUILD')) {
			return message.delete();
		};
		message.delete(100);
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setDescription(`${message.author.tag} has been removed from ${message.guild.name} for "[AUTOMOD] posting invites". They were sent the following message:`)
		});

		message.author.send({
			embed: new Discord.RichEmbed()
			.setColor('#da0000')
			.setDescription(`You have been removed from ${message.guild.name} for "[AUTOMOD] posting invites". If you beleive this is a mistake, please DM ${ownertag}; you can rejoin whenever`)
			.addField('Reason', `[AUTOMOD] posting invites`, true)
			.addField('Moderator', client.user.tag, true)
		})
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setColor('#da0000')
			.setDescription(`You have been removed from ${message.guild.name} for "[AUTOMOD] posting invites". If you beleive this is a mistake, please DM ${ownertag}; you can rejoin whenever`)
			.addField('Reason', `[AUTOMOD] posting invites`, true)
			.addField('Moderator', client.user.tag, true)
		})		
		await message.member.kick(`Kicked for posting invites (AUTOMOD)`);
	};

	global.prefix = null;
	let data = await prefixes.get("prefix" + message.guild.id)
	if (!data) {
		prefix = process.env.prefix;
	} else {
		prefix = data;
	};
	if(!message.content.startsWith(prefix)) return;
	let args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	let segPerms = await botperms.get("cc" + message.author.id);
	if (!segPerms) segPerms = "lol no u cant use Fake xddd"
	let l = await blacklisted.get(message.author.id)
	if(!l) l = 'N'
	if (l == "Y" && command) return;
	if (command && (!message.guild.me.permissions.has("EMBED_LINKS"))) return message.channel.send("I need the embed links permission. Please contact an admin to fix my perms!");
	var jsonColor = await colors.get("color" + message.author.id)
	if(!jsonColor) {
		jsonColor = "#0CEADC";
	};
	if (!command && segPerms == 'Y') {
		if (commandName.startsWith('~~')) return; //ignore ~~crossed messages~~
		let [arg] = args;
		if (!arg) {
			return message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription(`${message.author.tag} has ${message.content.slice(prefix.length).split(/ +/).shift()}ed in chat`)
			});
		};
		let usr;
		let ext = args.slice(1).join(' ')
		/*if (!ext) ext = '';
			for(var i=0; i<args.length; i++) {
			try {
				console.log('running tryCatch;');
				const usu = await client.fetchUser(args[i - 1]).catch((x) => {})
				args[i - 1] = usu.tag;
			} catch (e) {

			};
		}; 		*/
		usr = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) //|| await client.fetchUser(args[0]).catch((x) => {})
		try {
			const uu = await client.fetchUser(usr.user.id).catch(() => client.fetchUser(args[0]));
	  	// use user
		t = `${uu.username}#${uu.discriminator}`;
		if (commandName == "give" && t) {
		return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`${t} has received ${ext}`)
				.setColor(jsonColor)
			});			
		};
		if (commandName == "take" && t) {
		return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`${t} has lost ${ext}`)
				.setColor(jsonColor)
			});			
		};
		return message.channel.send({
				embed: new Discord.RichEmbed()
				.setDescription(`${message.author.tag} has ${message.content.slice(prefix.length).split(/ +/).shift()}ed ${t} ${ext}`)
				.setColor(jsonColor)
			});
		} catch(e) {
  		return message.channel.send({
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription(`${message.author.tag} has ${message.content.slice(prefix.length).split(/ +/).shift()}ed ${args[0]} ${ext}`)
			})
		}
	} else {};
	if (!command && segPerms != "Y") return;
	let L = await logs.get("logs" + message.guild.id)
	if(!L) L = null;
	try {
		pre = prefix;
		command.run(client,message,args,prefix,jsonColor,L,done,error);
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
				.addField(" Error", error.length >= 1024 ? "The error was too long! It was logged with ID " + message.id : error)
		});
	};
//		commandfile.run(client,message,args,prefix,jsonColor,L,sleep,done,error)
});

app.get('/reveal', async(req, res) => {
	if (!req.query.channel) {
		return res.status(404).send('{"error": { "message": "Bad Request, channel ID was not provided" }}');
	};
	let ch = client.channels.get(req.query.channel);
	if (!ch) {
		return res.send("Error: " + client.user.username + " no longer has access to the channel provided ")
	};
	let hidden = await hides.get(req.query.channel);
	if (!hidden) {
		return res.send("Hide data not found, get support at " + process.env.supportServer)
	};
	ch.fetchMessages({
		around: hidden.id,
		limit: 1,
	}).then(async(fetched) => {
		let received = new Discord.RichEmbed(fetched.first().embeds[0]).setDescription(hidden.message).setColor('RANDOM').setTitle('Hidden Message | Revealed').setURL(null)
		fetched.first().edit({
			embed: received,
		})
	});
	await hides.set(req.query.channel, {
		status: 'N'
	})
	res.send('<scr' +'ipt>window.close()</scr'+'ipt>')
});

app.get('/*', (req, res) => {
	res.sendFile(process.cwd() + '/public/notfound/main.html');
});

app.listen(3000, () => console.log(`Server Started`));

client.login(process.env.token);