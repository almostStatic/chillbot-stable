const Discord = require("discord.js")
const fetch = require("node-fetch") 
const qs = require("querystring")
module.exports.run = async(client, message, args) => {
	let url = args.join(" ")
let res = await	fetch(qs.stringify(url))
res.json()
		.then(async res => {
			json = await res.json()
			message.channel.send(`**Fetched (JSON)**\n${json}`)
			message.channel.send(`**Fetched (Raw)**\n${res}`)
		})
			.catch(err => {
				message.channel.send(`There was an error with your request, ${err}`)
			})
};

module.exports.help = {
	name: "fetch",
};