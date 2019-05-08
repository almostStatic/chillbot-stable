const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(message.author.id !== "501710994293129216") return message.channel.send("You cannnot use this command!")
    let toset = args.join(" ")

        let set = new Discord.RichEmbed()

        .setTitle("Activity Set!")
        .setDescription(`Bot User Actvity has been changed to: ${toset}`)
        .setColor("RANDOM")

    bot.user.setActivity(toset, {type: "WATCHING"});
    message.channel.send(set);
    console.log(`${message.member.user.tag} has changed bot's activity to: ${toset}`)
    console.log("Be careful!")
    const used = new Discord.RichEmbed()

        .setTitle("Command Used:")
        .setDescription(`c.setgame used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
        .setColor("RANDOM")
            bot.channels.get("575619138576318484").send(used);


}

module.exports.help = {

    name: "setgame"

}
