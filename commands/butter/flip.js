const commando = require('discord.js-commando');

class CoinFlip extends commando.Command {

constructor(client){
	super(client, {
		name: 'flip',
		group: 'butter',
		memberName: 'flip',
		description: 'flips a coin'
	});
	
}
async run(message, args){
	var roll = Math.floor(Math.random() * 2) +1;
	if (roll == 1)
	{
	message.reply('Heads');
	}
	if (roll == 2){
		message.reply('Tails');
	}
}
  
}
module.exports = CoinFlip;