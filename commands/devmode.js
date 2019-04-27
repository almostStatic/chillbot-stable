const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sendto = message.mentions.members.first();
    if(!sendto) return message.channel.send("Please mention someone who you want me to send these instructions")

    const devembed = new Discord.RichEmbed()

    .setTitle("How to Enable Developer Mode")
    .setColor("RANDOM")
    .setDescription("Discord Developer Mode is useful for Grabbing User IDs, server IDs and Message IDs. That's about it! Developer Mode is essential for writing Discord bots. ")
    .addField("How to enable Dev Mode on **Desktop**?", "Enabling Developer Mode is easy. Open your Discord settings (the ⚙️ next to your name at the bottom left) and click on Appearance. There you will find Developer Mode. Click the toggle to enable it.")
    .addField("How to enable Dev Mode on **Android**?", "On Android, you can enable Developer Mode by going to your Discord settings (the ⚙️️️ next to your name at the bottom left) and tap on Behavior. There you will find Developer Mode. Tap the toggle to enable it.")
    .addField("How to enable Dev Mode on **IOS**?", "If you have iOS, you can enable Developer Mode by opening your Discord settings  in the bottom-right corner of the screen, tapping on Appearance, and flicking the switch labeled Developer Mode.")
    .addField("**Usage:**", "Developer Mode adds a simple Copy ID option to your context menu. Right click or long press on any server, user, message or channel to get its unique ID.")
    .setFooter("Use /invite to invite me to your server!")
    message.delete(0);

    sendto.send({embed: devembed});
    message.channel.send("Your message has been sent!")

  }

module.exports.help = {
  name: "send-devmode"
}