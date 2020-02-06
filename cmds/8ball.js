const Discord = require("discord.js")
module.exports = {
	name: "8ball",
	aliases: ['b'],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	let question = args.join(" ")
	const answers = [
			'As I See It Yes',
			'Ask Again Later',
			'Better Not Tell You Now',
			'Cannot Predict Now',
			'Concentrate and Ask Again',
			'Don\'t Count On It',
			'It Is Certain',
			'It Is Decidely So',
			'Most Likely',
			'My Reply Is No',
			'My Sources Say No',
			'Outlook Good',
			'Outlook Not So Good',
			'Signs Point to Yes',
			'Very Doubtful',
			'Without A Doubt',
			'Yes',
			"Impossible",
			"bruh",
			'Yes - Definitely'
	];
	if (!question) {
		 message.reply('What question should I answer?\n\nExpires in 10 seconds, type `cancel` to cancel!')
			.then(msg => msg.delete(10000))
		let filter = m => m.author.id === message.author.id;
		message.channel.awaitMessages(filter, {
			max: 1,
			time: 10000
		})
			.then(async(col) => {
				if (col.first().content.toLowerCase() == 'cancel') {
					return message.channel.send(`${process.env.gre} ${message.author}, command Cancelled!`)
				}
				const embed = new Discord.RichEmbed()
				.setColor(jsonColor)
				.setAuthor(`8ball`, 'http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png')
				.addField('Info:', `**Your Question:** ${col.first().content}\n**My Prediction:** ${answers[~~(Math.random() * answers.length)]}`);
				message.channel.send({embed})
					.catch(er => {
						message.channel.send("An error occured. " + er)
					})
			})
				.catch(() => {
					message.channel.send(`${process.env.re} You took too long, goodbye! :wave:`)
				})
		return;
	}
	const embed = new Discord.RichEmbed()
	.setColor(jsonColor)
.setAuthor(`8ball`, 'http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png')
.addField('Info:', `**Your Question:** ${question}\n**My Prediction:** ${answers[~~(Math.random() * answers.length)]}`);
	message.channel.send({embed}).catch(e => console.error(e))
	},
}