const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
          let usage = new Discord.RichEmbed()

            .setColor("#00ff00")
            .setTitle("Usage:")
            .setDescription("**Command** /kick \n \n /kick @user <reason> \n /kick @Noob being rude to me \n /kick @someone spamming")

          if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
          let servername = message.guild.name;
          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("<:RedCrossMark:582240944863313934> I cannot find that user!");
        let kReason = args.join(" ").slice(22);

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(" <:RedCrossMark:582240944863313934> **You do not have permissoins to use ths command**!");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(" <:RedCrossMark:582240944863313934> **ERROR:** The user is mod/admin, or has a higher role than me. I can't do that.");
        // Declare the var, create embed:::
        let kickEmbed = new Discord.RichEmbed()
        .setTitle(`Action: Kick -> ${kUser.user.tag}`)
        .setColor("#bf4848")
        .addField("Kicked User", `${kUser.user.tag} (${kUser.id})`, true)
        .addField("Kicked By", `<@${message.author.id}> (${message.author.id})`, true)
        .addField("Kicked In", message.channel, true)
        .addField("Kicked At", message.createdAt.toDateString(), true)
        .addField("Reason", kReason, true)
        .setTimestamp()
        .setFooter(`User ID: ${kUser.user.id}`, kUser.user.avatarURL)
    
        const reasonAnLink = new Discord.RichEmbed()
        .setDescription(`**Reason:** ${kReason}\n\n[Rejoin](https://discord.gg/4e6AVfb)`)
        .setColor('#dcf442')
        let reasonEmbed = new Discord.RichEmbed()
        .setDescription(`**Reason:** ${kReason}`)
        .setColor("#4dd6a3");
        message.delete();
      let emoji = message.guild.emojis.find(emoji => emoji.name === 'ayes')
        message.channel.send(`${emoji} Kicking **${kUser.user.tag}**...`).then(async(msg) =>{
        let kickChannel = message.guild.channels.find(`name`, "bot-moderation-logs");
        if(!kickChannel) return message.channel.send("<:RedCrossMark:582240944863313934> Can't find incidents channel, I will log the kick in this channel.", kickEmbed);
        await kUser.send(`<:blobpolice:590900425318989826> <:GreenTick:580716592980164618> You have been kicked from **${servername}** by **${message.author.tag}**`, reasonAnLink);
       await message.guild.member(kUser).kick(kReason);
        await msg.edit(`<:blobpolice:590900425318989826> <:GreenTick:580716592980164618> User: **${kUser.user.tag}** has been kicked from the server`, reasonEmbed);
        kickChannel.send(kickEmbed);
        });

        let used = new Discord.RichEmbed()
        .setAuthor(`Command Used:`, bot.user.avatarURL)
        .setColor(`#81868e`)
        .setDescription(`/kick used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
        bot.channels.get("575619138576318484").send(used)
    // ^^^^^^ End of cmd ^^^^^

}
 
module.exports.help = {
  name: "kick"
}