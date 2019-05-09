const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    if(message.author.id !== "501710994293129216") return;
     const nameAvatar = args.join(" ");
        const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg)/gi;
        if (!linkCheck.test(nameAvatar)) return message.reply("You must supply an image link.");
        const avatar = nameAvatar.match(linkCheck)[0];
        const name = nameAvatar.replace(linkCheck, "");
        message.channel.createWebhook(name, avatar)
        .then(webhook => webhook.edit(name, avatar)
            .catch(error => console.log(error)))
                .then(wb => bot.users.get("501710994293129216").send(`Here is your webhook  for ${message.channel.name} in ${message.guild.name} (${message.guild.id}) \n https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}\n\nPlease keep this safe, as you could be exploited.`)
                     .catch(error => console.log(error)))
                        .catch(error => console.log(error));
        }


module.exports.help = {
    name: "create-webhook"
}