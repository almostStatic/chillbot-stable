const Discord = require('discord.js');

module.exports = {
	name: 'roast',
	aliases: ['roast'],
	desc: 'Roast someone',
	usage: 'roast <@Member/ID>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		noroast = [client.user.id, client.owner];
function doMagic8BallVoodoo() {
	var rand = ['I feel sorry for the tree that tirelessly works to produce oxygen for you.', 'Even I have more common sense that you and i\'m a robot!', 'You suck so much that the room has no oxygen left', 'You have the kinds of looks that make people talk about your personality', 'Your body fat is about as evenly distributed as wealth in the US economy.', 'Even the shower doesn\'t want to see you naked.', 'When the airforce needs extra landing space they should just rent out your forehead.', 'If laughter is the best medicine, your face must be curing the world.', 'It looks like your face caught fire and someone tried to put it out with a hammer.', '||Your family tree must be a cactus because everyone on it is a prick.||', '||I wasn\'t born with enough middle fingers to let you know how I feel about you.||', 'You\'re so fat the only letters of the alphabet you know are KFC.', 'I see you were so impressed with your first chin that you added two more.', 'The last time I saw a face like yours I fed it a banana.', "shut yo skin tone chicken bone google chrome no home flip phone disowned ice cream cone garden gnome extra chromosome metronome dimmadome genome full blown monochrome student loan indiana jones overgrown flintstone x and y hormone friend vaccine aquamarine eugene extra green nicotine vaseline jellybean magazine protein lightning-mcqueen vending machine what'chu mean Ocean Man by Ween head ass tf up bitch"]
	return rand[Math.floor(Math.random()*rand.length)];
}
if (!args.length) {
	return message.channel.send({
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(doMagic8BallVoodoo())
	})
}
let mem = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
if (!mem && args.length) {
	return message.channel.send(``, {
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(`${args.join(' ')}, ${doMagic8BallVoodoo()}`)
	})
}
if(mem.user.bot || (noroast.includes(mem.user.id))) {
	return message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle("Sorry, the mentioned user cannot be roasted")
		.setColor(jsonColor)
	})
}
	message.channel.send({
		embed: new Discord.RichEmbed()
		.setColor(jsonColor)
		.setDescription(`${mem}, ${doMagic8BallVoodoo()}`)
	})
	},
}