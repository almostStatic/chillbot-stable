const Discord = require("discord.js");
const client = new Discord.Client();

client.on('error', console.error);

module.exports.run = async (bot, message, args) => {

  let nopermsforu = new Discord.RichEmbed()
  
    .setDescription("❌ You need the Manage Members permissoin to use this command!")
    .setColor("#ff0000")

  let nomember = new Discord.RichEmbed()

    .setDescription("❌ Can't find user!")
    .setColor("#ff0000")

  let norolespecified = new Discord.RichEmbed()

    .setDescription("❌ Please specify a role!")
    .setColor("#ff0000")

  let norole = new Discord.RichEmbed()

    .setDescription("❌ Role not found!")
    .setColor("#ff0000")

  let already = new Discord.RichEmbed()

    .setDescription("❌ That user already yhas that role!")
    .setColor("#f4aa42");

  let congrats = new Discord.RichEmbed()

    .setDescription(` :white_check_mark: <@${rMember.id}> has been promtoed to Admin!`)
    .setColor("RANDOM")

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(nopermsforu);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channnel.send(nomember);
  //let role = args.join(" ").slice(22);
  //(!role) return message.channel.send(norolespecified);
  let gRole = message.guild.roles.find(`name`, "Administrator");
  if(!gRole) return message.channel.send(norole);

  if(rMember.roles.has(gRole.id)) return message.channel.send(already);
  await(rMember.addRole(gRole.id));

  try{
    await message.channel.send(congrats)
  }catch(e){
    console.log(e.stack);
  }
}

module.exports.help = {
  name: "give-admin"
}