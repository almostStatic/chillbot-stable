const Discord = require('discord.js');
const fetch = require('node-fetch');
const qs = require('querystring')

module.exports.run = async(client,message,args,prefix,jsonColor,sleep,done,error) =>{

	const queryString = args.join(" ")
	const res = await fetch(`https://djsdocs.sorta.moe/v1/main/stable/embed?q=${queryString}`);
	const embed = await res.json();
	
	if(!queryString){
			await message.delete()
					.catch(err=>{});
			const filter = m => m.author.id === message.author.id;
			message.channel.send(`${message.author}`, {
				embed: new Discord.RichEmbed()
				.setColor(jsonColor)
				.setDescription("What would you like to search the Discord.js Docs?\n\n> Expires in 20 Seconds, type `cancel` to cancel")
			})
					.then(msg => {
						msg.delete(20000)
					})
						
			message.channel.awaitMessages(filter, {
					max: 1,
					time: 20000,
			}).then(async(collected)=>{
					if (collected.first().content.toLowerCase() == 'cancel') {
							return message.reply(process.env.gre + ' Command cancelled')
					}
					const queryString = collected.first().content;
					const res = await fetch(`https://djsdocs.sorta.moe/v1/main/stable/embed?q=${queryString}`);
					const info = await res.json();
					
					if (!info || !res) {
							message.reply(process.env.re + ' I can\'t fint the requiested information on the Discord.js Documentation!')
					}
						await message.channel.send({ embed: info })
			}).catch(() => {
					message.channel.send(process.env.re + ' You took too long! Goodbye!');
				});
			return;
	};
	if (!embed) {
			return message.reply(`${process.env.re} ${client.user.username} **couldn't** find the requested information.\nMaybe look for something that actually exists next time?`);
	};

	await message.channel.send({ embed });

};

module.exports.help = {
    name: 'docs',
};