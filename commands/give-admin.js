const Discord = require("discord.js");
const client = new Discord.Client();

client.on('error', console.error);

module.exports.run = async (bot, message, args) => {
    let l = message.guild.emojis.find(emoji =>emoji.name === "loading")
    let err = message.guild.emojis.find(emoji =>emoji.name === "ano")
    let t = message.guild.emojis.find(emoji=>emoji.name === "ayes")
    if(!message.member.hasPermission("ADMINISTRATOR")){
      return message.reply(`${err} You need **ADMIN** perms to use this commmand!`);
    }
    //if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(nopermsforu);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channnel.send(`${err} I couldn't find that user.`);
  let gRole = message.guild.roles.find(`name`, "Administrator");
  if(!gRole) return message.channel.send(`${err} **I can't find the admin role.** Please contact and admin!`);

  if(rMember.roles.has(gRole.id)) return message.channel.send(`${err} That useris **already admin**!`);
  await(rMember.addRole(gRole.id));

  try{
   await  message.channel.send(`${l} Giving **${rMember.user.tag}** Admin Perms...`).then(async(msg) =>{
     await msg.edit(`${t} **${rMember.user.tag}** now has **Admin** permissions!`)
     await rMember.send(`${t} You were given **Admin** in **${message.guild.name}** by ${message.author.tag}!`)
   });
  }catch(e){
    console.log(e.stack);
  };

  
  
  let used = new Discord.RichEmbed()
  .setAuthor(`Command Used:`, bot.user.avatarURL)
  .setColor(`#81868e`)
  .setDescription(`/give-admin used in ${message.guild.name} (${message.guild.id}) \n ${message.author.username}#${message.author.discriminator}, ${message.author.id}`)
  bot.channels.get("575619138576318484").send(used)


  
}

module.exports.help = {
  name: "give-admin"
}
