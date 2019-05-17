const Discord = require("discord.js");
let fs = require("fs");
let intel = fs.readFileSync("./hunt-xp.json", "utf8");

module.exports.run = async (bot, message, args) => {
    // c.train
    // command cooldown meant to be 10 seconds

    if(!intel[message.author.id]){
        intel[message.author.id] = {
          intel: 0
        };
      }
    
      let intelAmt = Math.floor(Math.random() * 15) + 1;
      let baseAmt = Math.floor(Math.random() * 15) + 1;
    
      if(intelAmt === baseAmt){
        intel[message.author.id] = {
          intel: intel[message.author.id].intel + intelAmt
        };
      fs.writeFile("./hunt-xp.json", JSON.stringify(intel), (err) => {
        if (err) console.log(err)
        if (err) bot.channels.get(``).send(`Error with c.train command. \n ${err}`)
      });

    
}}

module.exports.help = {
    name: "train"
}