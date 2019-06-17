const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const devembed = new Discord.RichEmbed()

    .setTitle("How to Enable Developer Mode")
    .setColor("RANDOM")
    .setDescription("Discord Developer Mode is useful for Grabbing User IDs, server IDs and Message IDs. That's about it! Developer Mode is essential for writing Discord bots. ")
    .addField("How to enable Dev Mode on **Desktop**?", "Enabling Developer Mode is easy. Open your Discord settings (the ⚙️ next to your name at the bottom left) and click on Appearance. There you will find Developer Mode. Click the toggle to enable it.")
    .addField("How to enable Dev Mode on **Android**?", "On Android, you can enable Developer Mode by going to your Discord settings (the ⚙️️️ next to your name at the bottom left) and tap on Behavior. There you will find Developer Mode. Tap the toggle to enable it.")
    .addField("How to enable Dev Mode on **IOS**?", "If you have iOS, you can enable Developer Mode by opening your Discord settings  in the bottom-right corner of the screen, tapping on Appearance, and flicking the switch labeled Developer Mode.")
    .addField("**Usage:**", "Developer Mode adds a simple Copy ID option to your context menu. Right click or long press on any server, user, message or channel to get its unique ID.")

    message.channel.send({embed: devembed});
    let used = new Discord.RichEmbed()
    .setAuthor(`Command Used:`, bot.user.avatarURL)
    .setColor(`#81868e`)
    .setDescription(`/dev-mode used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
    bot.channels.get("575619138576318484").send(used)
  }

module.exports.help = {
  name: "dev-mode"
}
