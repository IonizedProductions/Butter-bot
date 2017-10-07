const commando = require('discord.js-commando');


class HelloCommand extends commando.Command {
constructor(client){
	super(client, {
		name: 'hello',
		group: 'butter',
		memberName: 'hello',
		description: 'Says hello'
	});
	
}
async run(message, args){
	var owner = message.author.username == 'Equestion'
	if(owner)
	{
		
		message.reply('Hello creator.')
	}
  else
  
	 
	  message.reply('Hello')
  
}
}
module.exports = HelloCommand;