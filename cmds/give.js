const Discord = require("discord.js");

module.exports = {
	name: 'give',
	aliases: ["give"],
	desc: '**Give** a **member** a role. As the name suggests, you can only **give** a role to people. To bypass this, use the `role` command instead.\n\n' + `[Support Server](${process.env.supportServer})`,
	usage: 'give >',
};