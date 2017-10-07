/*const commando = require('discord.js-commando');

class Clean extends commando.Command {

constructor(client){
	super(client, {
		name: 'clean',
		group: 'butter',
		memberName: 'clean',
		description: 'cleans the bots messages'
	});
	
}
async run(message, args){
const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
}


module.exports = Clean; */