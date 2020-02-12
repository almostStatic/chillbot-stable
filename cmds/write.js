const Discord = require('discord.js');
const keyv = require('keyv') 
let db = new keyv("sqlite://./database/todo.sqlite")

module.exports = {
	name: "write",
	aliases: [],
		async run(client,message,args,prefix,jsonColor,sleep,done,error) {
			let toadd = args.join(' ');
			let old = await db.get("todo" + message.author.id)
			if (!old) old = " ";
			if (!toadd) {
				return message.channel.send("You need to add something to write!\nIn the form of `" + prefix + "write [item]`")
			}
			await db.set("todo" + message.author.id, toadd + old)
			message.channel.send(`${process.env.gre} Saved to ${message.author.tag}'s to-do list!`)
	},
}