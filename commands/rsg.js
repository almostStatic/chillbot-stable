const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()

    .setTitle("RSG Help")
    .addField("**Imprtant**", "<args> Must Give \n [Args] Can give")
    //.addField("")
}

module.exports.help = {
  name: `rsg`
}


/*
RSG Help
Use help <command> for details.
Important
<arg> Must give
[arg] Can give
General
help
report
Fun
april
avatar
cat
dog
flip
hug
kiss
meme
roll
Moderation
ban
disable
enable
kick
purge
warn
Info
ping
invite
serverinfo
stats
vote
Webhooks
setname
webhooks
Music
np
pause
play
queue
resume
say
skip
stop
volume
Miscellaneous
suggest
​
​
Premium commands
This server hasn't premium
Application
apply
setroles
Economy
bal
work
Logging
disablelog
enablelog
helplog
resetlog
setlogchannel
Miscellaneous for premium
giveaway
line
membercount
riddle
setprefix
​
​
Testers commands
eval
hg
strike
*/