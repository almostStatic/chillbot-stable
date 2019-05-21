const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
global.Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
global.bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");


// START LOG CHANNEL ID: 575388934456999947
// ERROR LOG CHANNEL ID: 575390425259704320 
// XP LOG CHANNEL ID: 575393646946287616
// EVAL ERROR LOG CHANNEL ID: 575604330195845149
// COMMAND USAGE LOG CHANNEL ID: 575619138576318484
// Command Handler
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
//      bot.channels.get("575244431096020992").send(`Loaded ${files.length} commands successfully!`)


let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
console.log("Couldn't find commands.");
bot.channels.get("575388934456999947").send("Cannot find commands! `./commands/` not present!")
return;
}

jsfile.forEach((f, i) => {
let props = require(`./commands/${f}`);
console.log(`${f} loaded!`);
bot.commands.set(props.help.name, props);
 });
});
bot.on("ready", async () => {
  const allFilesLoadedEmbed = new Discord.RichEmbed()
  .setColor(`#42f459`)
  .setAuthor(`All bot commands loaded!`, bot.user.avatarURL)
  bot.channels.get("578195831405019139").send(allFilesLoadedEmbed)
  console.log(`${bot.user.username} has started moderating ChilZone!`)
bot.guilds.forEach((guild) => {
    const guildEmbed = new Discord.RichEmbed()
    .setTitle("The bot is now active in:")
    .setDescription(guild.name)
    .setColor("RANDOM")
    
  bot.channels.get("575388934456999947").send(guildEmbed);
  console.log(" ->" + guild.name)
})

//console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
// Example of changing the bot's playing game to something useful. `client.user` is what the
// docs refer to as the "ClientUser".
  

 let startEmbed = new Discord.RichEmbed()
 
 .setTitle(`${bot.user.username} loaded!`)
 .setDescription(`Bot sucsessfully loaded in all server!`)
  .setTimestamp()
 .setColor("RANDOM")
 
bot.channels.get("575388934456999947").send(startEmbed);

bot.user.setActivity(`over ${bot.users.size} users!`, {type: "WATCHING"});

});

  //bot.user.setGame("Lookin' out for ya!");
  bot.on("message", async message => {
    const noDMsEmbed = new Discord.RichEmbed()
    .setAuthor(`Sorry ${message.author.username}, you can only use commands in a guild!`, message.author.avatarURL)
    .setColor("#f4ce42")
    .setTimestamp()
    .setFooter(`This is due to discord API limitations`, message.author.avatarURL)
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send(noDMsEmbed);
  
    const ownerid = "501710994293129216";
    const prefix = botconfig.prefix;
    const messageArray = message.content.split(" ");
    const cmd = messageArray[0];
    const args = messageArray.slice(1);
    const owner = "sad (Eclipse)#3728"

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
      if(!message.content.startsWith(prefix)) return;

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  bot.channels.get("575393646946287616").send(`${coinAmt} || ${baseAmt}`);
  //console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor('RANDOM')
  .setDescription(`${coinAmt} coins added!`);

  message.channel.send(coinEmbed);
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  bot.channels.get("575393646946287616").send(`${xpAdd} XP added!`);
 // console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  var curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 100;
  xp[message.author.id].xp =  curxp + xpAdd;

  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}> has Levelled Up! `)
    .setColor('RANDOM')
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup);
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)

if(commandfile) commandfile.run(bot,message,args);


  });

  if(cmd === `${prefix}xp`){

  xpembed = new Discord.RichEmbed()

  .setTitle("XP & Level:")
  .addField(`${message.member.user.tag}'s XP:`, curxp)
  .addField(`${message.member.user.tag}'s Level:`, curlvl)
  .setColor('RANDOM')
  .setTimestamp()
  
  return message.channel.send(xpembed);

}


if(cmd === `${prefix}$$r`){
  if(message.author.id === "437255943181565962") return message.reply(`Due to your recent actions, you have been blacklisted from using this command! \n \b \b \b \b`)

if(message.author.id !== ownerid) return message.reply("You may not use this command!");

  rrrrembed = new Discord.RichEmbed()

  .setDescription("The bot is being restarted... **Please Wait..**")
  .setColor('RANDOM')
  .setTimestamp()
  message.delete(0);

  return message.channel.send(rrrrembed);


  //       message.delete(0); 
  // This deletes the command invocation message...
}


if(cmd === `${message.author.id}`){
  if(message.author.id === "437255943181565962") return message.reply(`Due to your recent actions, you have been blacklisted from using this command! \n \b \b \b \b`)

  iq = new Discord.RichEmbed()

  .setDescription("1,000 IQ")
  .setColor('RANDOM')
  .setTitle("Well done! You know your user ID!")

  return message.channel.send(iq);

  }
  
if(cmd === `${prefix}await`){
  message.channel.send(`Editting`).then(await(3000)).then(a => a.edit(`Editted after 3 seconds!`))
  return;
}

if(cmd === "invite"){
  return message.channel.send(`**Invite people to this server using:** \n https://discord.gg/WJCP3GK`)
}

  if(cmd === `${prefix}owneronly`){

    if(message.author.id !== "501710994293129216") return message.reply("You can't use this command!")

    let aa = new Discord.RichEmbed()

    .setDescription("Yes, you are my owner!")
    .setColor("RANDOM")
    return message.channel.send(aa);
  }


  });
  bot.on("error", async () => {
    let errorEmbed = new Discord.RichEmbed()
    .setAuthor(`Error`, bot.user.avatarURL)
    .setColor("#f4a442")
    .setDescription(Error)
    .setTimestamp()
    .setFooter(`Error ID: ${message.id}`)
    
    bot.channels.get("575390425259704320").send(errorEmbed);
    
  });
  
 
  bot.login("NTcyNzMzMDA0MjU0OTM3MDg4.XNlQcw.VMX7ohfJgKZO-5CSir7aYqtLSUQ")
//bot.login(process.env.BOT_TOKEN);

// END OF CODE !!

// ============================ EXTRA INFO AND STUFFS ==============================

/// github repository :
/// https://github.com/asadhum2005/mybot.discord.js


// https://stackoverflow.com/questions/55569361/i-keep-getting-an-error-in-discord-js-discord-is-not-defined-or-i-get-no-respo
// https://stackoverflow.com/questions/55559630/richembed-fields-may-not-be-empty-error-how-would-i-fix-this
// https://stackoverflow.com/questions/55557723/whats-wrong-with-my-code-i-dont-get-an-error-i-get-no-response-what-so-ever

  // TERE MAY BE STABILITY FIXES AND UPDATES. PLEASE CHECK BACK HERE FOR THE UPDATED CODE.
// Total 199 Lines of code used in the prduction of ./main.js 
// This code has been created by: sad (Eclipse)#3728
// This is the current most stabe version of the sourcecode availbe!
// I am working my hardest to keep adding new STABLE & WORKING commands.