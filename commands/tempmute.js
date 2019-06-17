const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  // /tempmute @user 1s/m/h/d
  
  let cantfind = new Discord.RichEmbed()

  .setDescription(" *Error 404:* Please mention a user for this command to work!")
  .setColor("#ff0000")

  let cantmutethem = new Discord.RichEmbed()

  .setDescription("Can't mute that user!")
  .setColor("RANDOM")

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send(cantfind);
  if(tomute.hasPermission("ADMINISTRATOR")) return message.channel.send(cantmutethem);
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Tomato Muted",
        color: 0x000000,
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));
  
  let used = new Discord.RichEmbed()
  .setAuthor(`Command Used:`, bot.user.avatarURL)
  .setColor(`#81868e`)
  .setDescription(`/tempmute used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
  bot.channels.get("575619138576318484").send(used)


//end of module
}

module.exports.help = {
  name: "tempmute"
}
