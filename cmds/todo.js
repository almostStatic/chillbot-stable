const Discord = require("discord.js");
const keyv = require("keyv");
const todo = new keyv("sqlite://./database/todo.sqlite");

module.exports = {
	name: "list",
	aliases: [],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		let oldContent = await todo.get('todo' + message.author.id);
		if(!oldContent) oldContent = "`[None Found]`"
			message.channel.send("", {
				embed: new Discord.RichEmbed()
				.setTitle(`${message.author.tag}'s To-Do list`)
				.setDescription(todo)
				.setColor(jsonColor)
			})
	},
}