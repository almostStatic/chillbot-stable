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
        .addField("**c.ma**", "Mentions @Announcements")
        .addField("**c.mention-everyone**", "Mention @everyone in a server. Requires the Mention Everyone permission to use this command")
        .addField("**c.mention-here**", "Mention @here in a server. Requires the Mention Everyone permission to use this command")
        .addField("**__Required Permissions__**", requiredperms)
      
          // Let's make another cool embed....

        let cmds = new Discord.RichEmbed()

        .setColor("RANDOM")
        .setTitle(`Commands`)
        .addField("**c.report @user <reason>**", reporthelp)
        .addField("**c.suggest <suggestion>**", "Get the bot to post your suggestion in <#>!")
        .addField("**c.id** @user | /id", "Shows you **your** discoord username#discrim and your user ID. You can mentoin another user to get their ID / Discrim.")
        .addField("**c.av @user**", "Mentoin a user to get their avatar as an Embed.")
        .addField("**c.purge <number>** Alias: `/clear`", "Get the bot to delete 1 - 100 messages in a channel. Requires Manage messages permission")
        .addField("**c.token**", "View the bot's super secret bot token!")
        .addField("**c.botinfo**", "displays basic bot information!")
        .addField("**c.serverinfo**", "Displays basic server information")
        .addField("**c.userinfo @user**", "Displays basic user information. If you did not mentoin a user it will display YOUR info.")
        .addField("**c.ping**", "Get the bot's (and Discord API) ping measured in ms.")
        .addField("**c.xp**","View your current level and XP")
        .addField("**c.coins**", "See how many coins you have!")
        .addField("**c.8ball <questoin>**", "Ask the bot a questoin and see his response")
        .addField("**c.dev-mode**", "Find out what developer mode is and how to enable it!")

        
        let extras = new Discord.RichEmbed()

        .setTitle("Extras")
        .addField("**c.say**", "Get the bot to put your eords into an embed")
        .addField("**c.tsay**", "Get the bot to speak your words, but **not** in a stylish Embed")
        .addField("**c.hug @user**", "Hug someone")
        .addField("**c.kiss @user**", "Kiss someone.")
        .addField("**c.eat <food>**", "Eat any kind of food you wish to.")
        .addField("**c.drink**", "Drink a pint of beer")
        .addField("**c.brush**", "Brush your teeth and make them shine after you have drunk a pint of beer")
        .addField("**c.polish @user**", "Polish a user's head.")
        .setColor("RANDOM")

        message.channel.send(embed1).then(sentMessage => sentMessage.edit(embed2));
        message.channel.send({embed: modadmin});
        message.channel.send({embed: cmds});
        message.channel.send({embed: extras});

      }
      
// "  " ()

module.exports.help = {
  name: "show-help"
}
