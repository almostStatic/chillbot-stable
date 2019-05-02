const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
global.Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
global.bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
let userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} sucsessfully loaded!`);
    bot.commands.set(props.help.name, props);

  });

});
bot.on("ready", async () => {
  bot.user.setPresence({status: 'Do Not Disturb' })
console.log(`${bot.user.username} is online in ${bot.guilds.size} Servers`)
bot.user.setActivity(`c.help | Watching you...`);
bot.guilds.forEach((guild) => {
  console.log(" >" + guild.name)
})

//console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
// Example of changing the bot's playing game to something useful. `client.user` is what the
// docs refer to as the "ClientUser".

});

loser = "ross";
lol = "ross is single xD"

  //bot.user.setGame("Lookin' out for ya!");

  bot.on("message", async message => {
    if(message.author.bot) return;
    //if(message.channel.type === "dm") return;
  
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
  //console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  var curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  //let toAdd = message.length() 
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

if(message.author.id !== ownerid) return message.reply("You may not use this command!");

  rrrrembed = new Discord.RichEmbed()

  .setDescription("The bot is being restarted... **Please Wait..**")
  .setColor('RANDOM')
  .setTimestamp()
  process.restart();
  message.delete(0);


  //       message.delete(0); 
  // This deletes the command invocation message...

  return message.channel.send(rrrrembed);

}


if(cmd === `${message.author.id}`){
  iq = new Discord.RichEmbed()

  .setDescription("1,000 IQ")
  .setColor('RANDOM')
  .setTitle("Well done! You know your user ID!")

  return message.channel.send(iq);

  }


  if(cmd === `${prefix}owneronly`){

    if(message.author.id !== "501710994293129216")return message.reply("You can't use this command!")

    let aa = new Discord.RichEmbed()

    .setDescription("Yes, you are my owner!")
    .setColor("RANDOM")
    return message.channel.send(aa);

  }

  


});

const token = "NTcyNzMzMDA0MjU0OTM3MDg4.XMmLCg.Yrak0lk7DG7qGZIl3TeVP_x0-uA";
bot.login(token)

//bot.login(process.env.BOT_TOKEN);

// END OF CODE !!

// ============================ EXTRA INFO AND STUFFS ==============================
/* Bot token:


*/

///// github repository :
/// https://github.com/asadhum2005/mybot.discord.js


// https://stackoverflow.com/questions/55569361/i-keep-getting-an-error-in-discord-js-discord-is-not-defined-or-i-get-no-respo
// https://stackoverflow.com/questions/55559630/richembed-fields-may-not-be-empty-error-how-would-i-fix-this
// https://stackoverflow.com/questions/55557723/whats-wrong-with-my-code-i-dont-get-an-error-i-get-no-response-what-so-ever

  // TERE MAY BE STABILITY FIXES AND UPDATES. PLEASE CHECK BACK HERE FOR THE UPDATED CODE.
// Total 199 Lines of code used in the prduction of ./main.js 
// This code has been created by: sad (Eclipse)#3728
// This is the current most stabe version of the sourcecode availbe!
// I am working my hardest to keep adding new STABLE & WORKING commands.