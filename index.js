const fs = require("fs");
const blacklisted = fs.readFileSync("./blck.json", "utf-8")
const Discord = require("discord.js")
const client = new Discord.Client({ disableEveryone: true })

client.commands = new Discord.Collection();
// COMMAND HANDLER
fs.readdir("./cmds/", (err, cmds) => {

  if (err) { 
		console.log(err);
	}
  let jsfile = cmds.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Commands Not Found");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./cmds/${f}`);
    console.log(`found ${jsfile.length} commands to laod`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", async() => { 
	client.user.setActivity(`${client.guilds.size} servers, Prefix: >`, { type: "WATCHING" })
	console.log(`${client.user.username} is now online!`)
	console.log(client.guilds.map(g=>g.toString()).join("\n"))
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
	if (blacklisted.ids.includes(message.author.id)) return;

  let prefix = process.env.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);


	if (cmd === `${prefix}b`) {
	/*	if (message.author.id !== process.env.ownerid) {
			return message.reply("You cannot use this command.")
		}; */
		let toBlacklist = args[0];
		console.log(blacklisted.ids)
		blacklisted.ids.push(toBlacklist)
		message.reply(`The user has been blacklisted.`)
		console.log(blacklisted.ids)
	}
	
});

client.login(process.env.token)