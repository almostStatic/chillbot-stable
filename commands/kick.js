const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 // Correct Usage:
        // /kick @user <reason>
       
          let nokickuser = new Discord.RichEmbed()

          .setDescription(`❌ **Error 404:** You need to **mention** a user for this command to work!`)
          .setColor("#ff0000")
          let cantdo = new Discord.RichEmbed()

          .setDescription("I have not got the ban Members Permission. Please check my roles and permissoins. If you are stilll encountering this problem, join my support server. (https://discord.gg/2dbQt8d)")
          .setColor("#ff0000")

          let usage = new Discord.RichEmbed()

.setColor("#4c85e0")
.setTitle("Usage:")
.setDescription("**Command** /kick \n \n /kick @user <reason> \n /kick @Noob being rude to me \n /kick @someone spamming")

          if(message.channel.type === "dm") return message.reply("❌ You may not use this command in a DM channel");
        //if(!client.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(cantdo);        
        let servername = message.guild.name;
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send(usage);
        let kReason = args.join(" ").slice(22);

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(" ❌ **You do not have permissoins to use ths command**!");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(" ❌**ERROR:** The user is mod/admin, or has a higher role than me. I can't do that.");
        if(!kUser.kickable){
          message.reply("I canno kick tht user! Do they have a higher role thn me? Do I have kick members permission?")
        }
        // Declare the var, create embed:::
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("*Kick*")
        .setColor("#bf4848")
        .addField("Kicked User", `${kUser} (${kUser.id})`)
        .addField("Kicked By", `<@${message.author.id}> (${message.author.id})`)
        .addField("Kicked In", message.channel)
        .addField("Kicked At", message.createdAt)
        .addField("Reason", kReason)
        .setTimestamp()
        .setFooter("Use /invite to invite me to your server!")
    
        message.delete(0);
        let kickChannel = message.guild.channels.find(`name`, "incidents");
        if(!kickChannel) return message.channel.send("❌ Can't find incidents channel, I will log the kick in this channel.", kickEmbed);
        kUser.send(`You have been kicked from ${servername}. Here are some details:`, kickEmbed);
        message.guild.member(kUser).kick(kReason);
        message.channel.send(`${kUser.user.tag} has been kicked from the server!`)
        kickChannel.send(kickEmbed);

    // ^^^^^^ End of cmd ^^^^^

}
 
module.exports.help = {
  name: "kick"
}