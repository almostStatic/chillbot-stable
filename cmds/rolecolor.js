const Discord = require('discord.js');

module.exports = {
	name: 'rolecolor',
	aliases: ["rolecolor", 'rolecolour','rc'],
	desc: "Change the color of a role! (for black, use `#000001`)",
	usage: 'rolecolor <@role, ID or name> <new hex color>',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
				let _col = args[args.length - 1]
		if (!message.member.permissions.has('MANAGE_ROLES')) {
			return message.channel.send(process.env.re + " You need the manage roles permission in order to use this command!")
		}
		if (!message.guild.me.permissions.has('MANAGE_ROLES')) {
			return message.channel.send(process.enc.re + ' I need the manage roles permission in order for this command to work!')
		}
		if (!args.length) return message.channel.send(`You need to provide a role for me to find! You can @mention the role, the ID or the name of the role`);
		if (!_col) return message.channel.send(`${process.env.re} You need to valid hex color code. Make sure you use the correct format: \`${prefix}rolecolor [hex color] [@role, ID or name]\``)
		let hex;
		if (!_col.startsWith("#")) {
			hex = "#" + _col;
		} else {
			hex = _col;
		};
		let role = message.guild.roles.find(x => x.name.toLowerCase() == args.slice(args[args.length - 1]).join(' ').toLowerCase()) || message.guild.roles.find(x => x.name.toLowerCase().startsWith(args[0].toLowerCase())) || message.guild.roles.find(x => x.id == args[0]) || (message.mentions.roles.first())
		if (!role) return message.channel.send(`${process.env.re} I cannot find that role!`)
		let regex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")
		result = regex.test(_col);
		if(result == true) {
			role.setColor(_col);
		return message.channel.send("", {
			embed: new Discord.RichEmbed()
			.setDescription(`${process.env.gre} Color for role ${role} was successfully changed to **${_col}**`)
			.setColor(_col)
		});
	} else {
		return message.channel.send(`${process.env.re} You need to provide a valic HEX color code`, {
			embed: new Discord.RichEmbed()
			.setColor("RANDOM")
			.setDescription(`**Examples:** \`#ff0000\` or \`#ffff00\`\nFor help, use a [Hex color picker](https://htmlcolorcodes.com/)!`)
		});
	};

	},
};