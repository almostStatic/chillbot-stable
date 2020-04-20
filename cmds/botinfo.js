const keyv = require("keyv");
const Discord = require("discord.js");
let cmd = new keyv("sqlite://./database/cmdCount.sqlite")
const osu = require('node-os-utils');

module.exports = {
	name: "botinfo",
	aliases: ["stats", 'botinfo'],
	desc: "Get some basic stats of the bot; ie how many servers its in or how many commands have been used, etc.",
	usage: 'botinfo',
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		cmdCount = await cmd.get("cmds");
		msg = await message.channel.send(`${process.env.loading} Getting information...`)
		mem = process.memoryUsage().heapUsed / 1024 / 1024;
		cpu = await osu.cpu.usage();
	var getUptime = function(millis) {
    var dur = {};
    var units = [{
            label: "ms",
            mod: 1000
        },
        {
            label: "s",
            mod: 60,
        },
        {
            label: "m",
            mod: 60,
        },
        {
            label: "hrs",
            mod: 24
        },
        {
            label: "d",
            mod: 31
        }
    ];

    units.forEach(function(u) {
        millis = (millis - (dur[u.label] = (millis % u.mod))) / u.mod;
    });

    var nonZero = function(u) {
        return dur[u.label];
    };
    dur.toString = function() {
        return units
						.reverse()
            .filter(nonZero)
            .map(function(u) {
                return dur[u.label] + "" + (dur[u.label] == 1 ? u.label.slice(0, -1) : u.label);
            })
            .join('');
    };
    return (dur);
};

	msg.edit("", {
		embed: new Discord.RichEmbed()
		.setTitle('Bot Stats')
		.setAuthor(client.user.tag, client.user.avatarURL)
		.addField('❯ Tag', client.user.tag, true)
		.addField('❯ Commands Used', cmdCount, true) //(since 20:00 GMT on 22/03/2020)
		.addField('❯ CPU Usage', `\`${cpu}%\``, true)
		.addField("❯ Servers", client.guilds.size, true)
		.addField('❯ Voice Connections', client.voiceConnections.size, true)
		.addField('❯ Created On', client.user.createdAt.toDateString(), true)
		.addField('❯ Users Cached', client.users.size, true)
		.addField("❯ Channels Cached", client.channels.size, true)
		.addField("❯ Emoji Cached", client.emojis.size, true)
		.addField('❯ Total Cached Items', Object.values(require.cache).length || "n/a", true)
		.addField('❯ WS Status', client.status, true)
		.addField('❯ Uptime', getUptime(client.uptime), true)
		.addField('❯ Memory Usage', `**~**${Math.trunc(mem)}/${Math.trunc(process.memoryUsage().rss / 1024 / 1024)} MB`, true)
		.addField('❯ Discord.js', `v**${require('discord.js').version}**`, true)
		.addField('❯ Total Commands', client.commands.size, true)
		.setTimestamp(client.readyTimestamp)
		.setDescription('`Users Cached` is not entirely accurate as the same user can be counted multiple times on different servers. These are excluded in the `Total Cached Items` count too.')
		.setFooter(`Ready At`)
		.setColor(jsonColor)
	})
		.catch(er => {
			message.reply(`There was an error, ${er}`)
		});
	},
};