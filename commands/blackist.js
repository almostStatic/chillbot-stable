const Discord = require("discord.js");
const fs = require("fs");
const blacklisted = fs.readFileSync(`./blacklisted.json`, "utf8")
module.exports.run = async (bot, message, args) => {
  let toBlacklist = message.mentions.members.first();
  let toBlacklistid = toBlacklist.user.id;
  let reason = args.join(" ");
  let reasonEmbed = new Discord.RichEmbed()
  .setDescription(`**Reason** ${reason}`)
  if(!reason){
    reason = "no reason given";
    message.channel.send(`**You have not provied a reason for blacklisting. Therefore the reason is no reason given. !ERR: !VOID!**`)
  };

  fs.writeFile(`./blacklisted.json`, JSON.stringify(toBlacklistid), (err) => {
   
    message.channel.send(`Resolving Remote Deltas... (1 of 1)`)
    .then((msg)=> {
      setTimeout(function(){
        msg.edit(`<:GreenTick:580716592980164618> User: \`${toBlacklist.user.tag}\` has been blacklisted`, reasonEmbed);
      }, 3000)
    }); 
      if(err){
        message.channel.send(`There was an error: \n ${err}`)
        console.log(err)
    }
  });
  
}

module.exports.help = {
  name: "blacklist"
}