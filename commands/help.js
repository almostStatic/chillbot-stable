const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        
  
      reporthelp = "Report a user. Requires a channel named `reports`to work! If there is no reports channel, the bot will post the report in the current channel";
      kickhelp = "Kick a user from the server. Requires a channel named `incidents` to work; you must have the manage messages permission.";
      banhelp = "Ban a user from the server. Requires a channel named `incidents` to work; if there is no `incidents` channel, the bot will post the embed in the current channel.You need the BAN MEMBERS permission to use this command!";
      warnhelp = "Warn a user in the server. YOU need the Manage Server Permission to use this command. if there is no `incidents` channel, the bot will post the embed in the current channel.";
      requiredperms = "**Embed Links, channel named `incidents`; channel named `reports`; Kick Members, Ban Members, Manage Roles, Manage Members, Manage Messages.**"
     
      modadmin = new Discord.RichEmbed()
      .setTitle(`Mod/Admin Commands`) 
      .setColor('RANDOM')
      .setFooter("Mod/Admin Commands", message.author.avatarURL)
      .addField("**/report @user <reason>**", reporthelp)
      .addField("**/warn @user <reason>**", warnhelp)
      .addField("**/mute @user <reason>**", `Mute a given user`)
      .addField("**/unmute @user**", `Unmute any muted user`)
      .addField("**/kick @user <reason>**", kickhelp)
      .addField("**/ban @user <reason>**", banhelp)
      .addField("**/unban [ID]**", `Unban a user by their **user id**. \n If you need help on getting IDs, use \`c.dev-mode\``)
      .addField("**/slowmode [number]**", `Get the bot to set slowmode in the current channel`)
      .addField("**/nick**", "Change the bot's nickname")
      .addField("**/set-nick @user**", "Set a user's nickname. The nickname must be 32 characters in length or ferwer")
      .addField("**/actions**", "Bot sends message actions to the current channel. Requires manage server permission")
      .addField("**/ma**", "Get the bot to mention @Announcements")
      .addField("**/mention-everyone**", "Mention @everyone in a server. Requires the Mention Everyone permission to use this command")
      .addField("**/mention-here**", "Mention @here in a server. Requires the Mention Everyone permission to use this command")
      .addField("**/purge <number>** Alias: `C.clear`", "Get the bot to delete 1 - 100 messages in a channel. Requires Manage messages permission")
      .addField("**__Required Permissions__**", requiredperms)
      .setTimestamp()
      .setFooter(`Mod/Admin Commands`, message.author.avatarURL)
        // Let's make another cool embed....

      let cmds = new Discord.RichEmbed()

      .setColor("RANDOM")
      .setTitle(`Commands`)
      .addField("**/report @user <reason>**", reporthelp)
      .addField("**/suggest <suggestion>**", "Get the bot to send your suggestion in <#536185309000630284>.")
      .addField("**/id** @user | c.id", "Shows you **your** discoord username#discrim and your user ID. You can mention another user to get their ID / Discrim.")
      .addField("**/av @user**", "Mentoin a user to get their avatar as an Embed.")
      .addField("**/botinfo**", "displays basic bot information!")
      .addField("**/serverinfo**", "Displays basic server information")
      .addField("**/userinfo @user**", "Displays basic user information. If you did not mentoin a user it will display YOUR info.")
      .addField("**/ping**", "Get the bot's (and Discord API) ping measured in ms.")
      .addField("**/xp**","View your current level and XP")
      .addField("**/danbot**", 'View our sponsored bot Danbot!')
      .addField("**/coins**", "See how many coins you have!")
      .addField("**/emojis**", 'Get the bot to list the emojis in a server')
      .addField("**/8ball <questoin>**", "Ask the bot a questoin and see his response")
      .addField("**/dev-mode**", "Find out what developer mode is and how to enable it!")

      
      let extras = new Discord.RichEmbed()

      .setTitle("Extras")
      .addField("**/say**", "Get the bot to put your eords into an embed")
      .addField("**/tsay**", "Get the bot to speak your words, but **not** in a stylish Embed")
      .addField("**/hug @user**", "Hug someone")
      .addField("**/kiss @user**", "Kiss someone.")
      .addField("**/eat <food>**", "Eat any kind of food you wish to.")
      .addField("**/drink**", "Drink a pint of beer")
      .addField("**/brush**", "Brush your teeth and make them shine after you have drunk a pint of beer")
      .addField("**/polish @user**", "Polish a user's head.")
      .addField("**/slap @user**", "Slap someone!")
      .setColor("RANDOM")

      let calccmds = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Calculator Commands")
      .addField("**/multiply [first number] [second number]**", "Get the bot to multiply 2 numbers seperated by spaces.")
      .addField("**/divide [first number] [second number]**", "Get the bot to divide 2 numbers, sepreated by spaces")
      .addField("**/add [first number] [second number]**", "Get the bot to add 2 numbers, seperated by spaces")
      .addField("**/subtract [first number] [second number]**", "Get the bot to subtract 2 numbers seperated by spaces")
     
     
      // send embeds, in order of decleration
      message.channel.send("**Getting Commands...**").then((msg) =>{
        (`<:GreenTick:580716592980164618> Check your DMs for a list of commands!`)
        msg.react("580716592980164618")
      });
      message.author.send({embed: modadmin});
      message.author.send({embed: cmds});
      message.author.send({embed: extras});
      message.author.send({embed: calccmds});

      let used = new Discord.RichEmbed()
      .setAuthor(`Command Used:`, bot.user.avatarURL)
      .setColor(`#81868e`)
      .setDescription(`/help used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
      bot.channels.get("575619138576318484").send(used)

}
      

module.exports.help = {
name: "help"
}