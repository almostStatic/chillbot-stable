const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const tosend = new Discord.RichEmbed()

    .setTitle("RULES:")
    .setColor("RANDOM")
    .setDescription("**Here are the server rules that must be obeyed, read on!**")
    .addField("**Rule 1: No self promoting, or advertising**", "unless permitted by staff (Staff are displayed seperately on the Member list)")
    .addField("**Rule 2:** No excessive emojis!", "More than 5 will get you a warning!")
    .addField("**Rule 3:** No usernames that could confused other people with errors or role names", "Example: Invalid-User, everyone, here, etc.")
    .addField("**Rule 4:** Respect other Server Members!", "Swearing is allowed, but keep it to a minimal and be mindful of younger members In this server!")
    .addField("**Rule 5:** Don't abuse voice channels!", "No ear rape or verbal abuse directed to other members")
    .addField("**Rule 6:** No NSFW content, links to NSFW websites or swearing outside of NSFW channel(s).", "This rule if important :D")
    .addField("**Rule 7:** No spam!", "This includes Images, etc...")
    .addField("**Rule 8:** Don't be rasist!", "in an offensive way")
    .addField("**Rule 9:** Do not disrespect staff members or question their better judgement.", "If you feel that you have been inappropriately punished, refer back the the rules for a link to our Appeal server")
    .addField("**If you have any issue with staff or the rules above**", "please contact <@501710994293129216> or open a new ticket (`-new [your inquiry]`)")
    .addField("**Here is am invite to our Unpunish appeal server**", "https://discord.gg/fRhRa4K")
    .addField("**One Last thing...**", "Staff are able to punish for anything that is not listd in the rules! Please keep this in mind!")
    .setFooter("Keep these in mind!", message.author.avatarURL)

    message.reply("Check your DMs!")
    message.author.send(tosend);
}

module.exports.help = {
    name: "rules",
};