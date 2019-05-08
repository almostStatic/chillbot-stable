const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


          // Correct Usage:
          // /eat pizza & chips 
          
        const food = args.join(" ");
        if(args[0]) return message.channel.send("What do you want to eat? Please provide a food.")      

        const embed = new Discord.RichEmbed()
      
        .setDescription(`${message.member.user.tag} has eaten some ${food}`)
        .setColor('RANDOM')
        .setTimestamp()
      
        // And we get the bot to say the thing: 
        message.channel.send(embed);
              const used = new Discord.RichEmbed()

    .setTitle("Command Used:")
    .setDescription(`c.eat used in ${message.guild.name} (${message.guild.id}), by ${message.author}, (${message.author.id})`)
    .setColor("RANDOM")
    bot.channels.get("575619138576318484").send(used);


      

}

module.exports.help = {
  name: "eat"
}
