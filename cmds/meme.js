const Discord = require("discord.js")
const got = require("got")
module.exports = {
	name: "meme",
	aliases: ['meme'],
	usage: "meme",
	desc: "Gets the bot to send some random meme off of reddit.",
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let ppl = [process.env.ownerid, "610008193220870145", "437255943181565962", "373900508026372097", "589328391069761538"]
	const embed = new Discord.RichEmbed();
	got('https://www.reddit.com/r/memes/random/.json').then(response => {
			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let memeUrl = `https://reddit.com${permalink}`;
			let memeImage = content[0].data.children[0].data.url;
			let memeTitle = content[0].data.children[0].data.title;
			let memeUpvotes = content[0].data.children[0].data.ups;
			let memeDownvotes = content[0].data.children[0].data.downs;
			let memeNumComments = content[0].data.children[0].data.num_comments;
			embed.setTimestamp()
			embed.setColor(jsonColor)
			embed.addField(`${memeTitle}`, `**[View thread](${memeUrl})**`);
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} | 👎 ${memeDownvotes} | 💬 ${memeNumComments}`);
			message.channel.send({embed})
	});
}
}