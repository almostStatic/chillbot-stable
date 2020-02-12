const Discord = require("discord.js");
const py = require("py.js");

module.exports = {
	name: "py",
	aliases: ['py'],
	async run(client,message,args,prefix,jsonColor,sleep,done,error) {
		console.log(py)
		let code = args.join(' ');
		try{
			py.eval(code);
		}catch(e){
			return message.channel.send(e, { code: "py" })
		}
	},
}