const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed1 = new Discord.RichEmbed()

    .setDescription(`Getting Help Commands...`)

    const embed2 = new Discord.RichEmbed()

    .setDescription("Here is a list of commands")
    .setColor(`#42f480`)

        reporthelp = "Report a user. Requires a channel named `reports`to work! If there is no reports channel, the bot will post the report in the current channel";
        kickhelp = "Kick a user from the server. Requires a channel named `incidents` to work; you must have the manage messages permission.";
        banhelp = "Ban a user from the server. Requires a channel named `incidents` to work; if there is no `incidents` channel, the bot will post the embed in the current channel.You need the BAN MEMBERS permission to use this command!";
        warnhelp = "Warn a user in the server. YOU need the Manage Server Permission to use this command. if there is no `incidents` channel, the bot will post the embed in the current channel.";
        requiredperms = "**Embed Links, channel named `incidents`; channel named `reports`; Kick Members, Ban Members, Manage Roles, Manage Members, Manage Messages.**"
       
       
       
        modadmin = new Discord.RichEmbed()
        .setTitle(`Mod/Admin Commands`) 
        .setColor('RANDOM')
        .addField("**c.report @user <reason>**", reporthelp)
        .addField("**c.warn @user <reason>**", warnhelp)
        .addField("**c.kick @user <reason>**", kickhelp)
        .addField("**c.ban @user <reason>**", banhelp)
        .addField("**c.mention-everyone**", "Mention @everyone in a server. Requires the Mention Everyone permission to use this command")
        .addField("**c.mention-here**", "Mention @here in a server. Requires the Mention Everyone permission to use this command")
        .addField("**__Required Permissions__**", requiredperms)
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!")
      
          // Let's make another cool embed....

        let cmds = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setTitle(`Commands`)
        .addField("**c.report @user <reason>**", reporthelp)
        .addField("**c.id** @user | /id", "Shows you **your** discoord username#discrim and your user ID. You can mentoin another user to get their ID / Discrim.")
        .addField("**c.av @user**", "Mentoin a user to get their avatar as an Embed.")
        .addField("**c.invite** Alias: `/links`", "Get an invite link for the bot, and the invite to the bot's support server")
        .addField("**c.purge <number>** Alias: `/clear`", "Get the bot to delete 1 - 100 messages in a channel. Requires Manage messages permission")
        .addField("**c.token**", "View the bot's super secret bot token!")
        .addField("**c.botinfo**", "displays basic bot information!")
        .addField("**c.serverinfo**", "Displays basic server information")
        .addField("**c.userinfo @user**", "Displays basic user information. If you did not mentoin a user it will display YOUR info.")
        .addField("**c.ping**", "Get the bot's (and Discord API) ping measured in ms.")
        .addField("**c.owner**", "see who currently owns the bot")
        .addField("**c.hosting**", "Bot finds a good website for bot/web hosting")
        .addField("**/xp**","View your current level and XP")
        .addField("**/coins**", "See how many coins you have!")
        .addField("**/git**", "**Get a link to my source code!**")
        .addField("**/version**", "See the version of the bot that is being ran.")
        .addField("**/8ball <questoin>**", "Ask the bot a questoin and see his response")
        .addField("**/dev-mode**", "Find out what developer mode is and how to enable it!")
        .setFooter("If you need extra help, use /links and join my support server!")
        .setTimestamp()

        
        let extras = new Discord.RichEmbed()

        .setTitle("Extras")
        .addField("**/hug @user**", "Hug someone")
        .addField("**/kiss @user**", "Kiss someone.")
        .addField("**/eat <food>**", "Eat any kind of food you wish to.")
        .addField("**/drink**", "Drink a pint of beer")
        .addField("**/brush**", "Brush your teeth and make them shine after you have drunk a pint of beer")
        .addField("**/polish @user**", "Polish a user's head.")
        .setColor("RABDOM")

        message.channel.send(embed1).then(sentMessage => sentMessage.edit(embed2));
        message.channel.send({embed: modadmin});
        message.channel.send({embed: cmds});
        message.channel.send({embed: extras});

      }
      
// "  " ()

module.exports.help = {
  name: "show-help"
}
