//♕ Bot Staff ♕
//
const Discord = require('discord.js')

module.exports = {
	name: 'apply',
	aliases: ["apply"],
	usage: 'Apply for staff in our support server. This goes without saying, but this command can only be used in our support server. Please use the `invite` command for an invite.',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		return message.channel.send("Staff Apps are no longer open! Sorry :D")
		if (message.guild.id != '575388933941231638') {
			return message.reply("this command only works in our support server!")
		};
		let supportServer = client.guilds.get('575388933941231638');
		let oldApp = supportServer.channels.find(x => x.name == `app-${message.author.id}`);
		if (oldApp) {
			return message.channel.send("You must wait another 100000000000000 minutes before using this command again!");
		} else { oldApp = null; };
		message.member.addRole("680520407727472642") //add i wanna be staff role
		let appChannel = await supportServer.createChannel(`app-${message.author.id}`, {
			parent: '680520815053111373',
			type: 'TEXT',
			permissionOverites: [{
				id: message.guild.id,
				allow: [],
				deny: ['VIEW_CHANNEL', 'READ_MESSAGES'],
			}, {
				id: message.author.id, 
				allow: ['VIEW_CHANNEL', 'READ_MESSAGES'],
				deny: [],
			}]
		});
		message.channel.send(``, {
			embed: new Discord.RichEmbed()
			.setColor(jsonColor)
			.setDescription(`${message.author.tag} has successfully applied for staff! Be sure to read <#680532416841908278> before applying. Good luck >3`)
		});
	appChannel.send(`Welcome ${message.author} to your personal staff application channel!`, {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(`Here, you will be writing (and submitting) your personal staff application. Please do not use bot commands here or chit-chat. This channel is only for your application; before you apply, be sure to take a look at <#680532416841908278>\nI wish you all the luck!`)
	});
	},
};