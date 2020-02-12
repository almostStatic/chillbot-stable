const Discord = require('discord.js')
const moment = require('moment')
const fetch = require('node-fetch')

module.exports = {
	name: 'npm',
	desc: 'Search [npmjs](https://www.npmjs.com/) for any package',
	usage: 'npm <package>',
	aliases: ["npm"],
async run(client,message,args,prefix,jsonColor,sleep,done,error) {
	global.pkg = args.join(' ')
	const msg = await message.channel.send("Fetching package...")
		const res = await fetch(`https://registry.npmjs.com/${pkg}`);
	if (res.status == 404) {
		return msg.edit(process.env.re + " I could not find the specified package. Please try again")
	}
	const body = await res.json();
	if (body.time.unpublished) {
		return msg.edit(process.env.re + 'The specified package is unpublished');
	}
	const version = body['dist-tags'] ? body.versions[body['dist-tags'].latest] : {};
	const dependencies = version.dependencies ? version.dependencies : null;
	const embed = new Discord.RichEmbed()
		.setColor(jsonColor)
		.setAuthor('NPM', 'https://i.imgur.com/ErKf5Y0.png', 'https://www.npmjs.com/')
		.setTitle(body.name)
		.setURL(`https://www.npmjs.com/package/${pkg}`)
		.setDescription(body.description || 'No description.')
		.addField('❯ Version', body['dist-tags'].latest || 'Unknown', true)
		.addField('❯ License', body.license || 'None', true)
		.addField('❯ Author', body.author ? body.author.name : 'Unknown', true)
		.addField('❯ Creation Date', moment.utc(body.time.created).format('YYYY/MM/DD hh:mm:ss'), true)
		.addField('❯ Modification Date', moment.utc(body.time.modified).format('YYYY/MM/DD hh:mm:ss'), true)
		.addField('❯ Main File', version.main || 'index.js', true)
		.addField('❯ Dependencies', dependencies.length ? dependencies.join(', ') : 'None')
//		.addField('❯ Maintainers', maintainers.join(', '));

	return msg.edit("", {embed: embed});
}
}