const fs = require("fs");
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

  let prefix = process.env.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);
});

client.login(process.env.token)