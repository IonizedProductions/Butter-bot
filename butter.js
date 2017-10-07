const commando = require('discord.js-commando');
const client = new commando.Client({commandPrefix: '$'});
const config = require("./config.json");
const fs = require("fs");

client.on('ready', () => {

    console.log('I am ready master!'); //how you know it is on

    client.user.setPresence({
        game: {
            name: 'Passing Butter',
            type: 0
        }
    });
    client.on('message', message => {

    });

});
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
 
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  
});

client.registry.registerGroup('butter', 'Butter');

client.registry.registerDefaults();

client.registry.registerCommandsIn(__dirname + "/commands");

client.login(config.token);

var isRunning = false;
var askForPurpose = null;

function purpose(message) {
    message.channel.send('What is my purpose?');
}

client.on('message', message => {
    if (message.content.toUpperCase() == 'Pass the butter')
        message.channel.send('_Passes butter_')
	
    if (message.content.toLowerCase() == 'pass the butter')
        message.channel.send('_Passes butter_')
	if (message.content == 'thank'){
		fs.writeFile("/Butter-bot/Log/thanklog.txt","Ignoring thank \n", function(err) {
    if(err) {
        fs.writeFile("/Butter-bot/Log/errorlog.txt", err);
    }
console.log("The file was saved!");
}); 
	}
	else{
		if (message.content == "Thank"){
			fs.writeFile("/Butter-bot/Log/thanklog.txt","Ignoring Thank \n", function(err) {
    if(err) {
        fs.writeFile("/Butter-bot/Log/errorlog.txt", err);
    }
console.log("The file was saved!");
}); 
		}
		else{
			if (message.content.indexOf(config.ID) > -1 ){
     if ( message.content.match(/^(t[^ ]+k)/i) || message.content.match(/(p.ng)/i) && message.content.match(/^(y[^ ]+u)/i) && isRunning == false) {
        message.reply('_waits_')

        if (message.author.username != 'Butter-Bot')

            askForPurpose = setInterval(purpose, 300000, message);
        isRunning = true;
    }
			}
    if (message.content == "stop" && isRunning == true) {
        message.reply('_Powers off_')

        if (message.author.username != 'Butter-Bot')

            clearInterval(askForPurpose);
        isRunning = false;
    }

    if (message.author.username != 'Butter-Bot')
		
        if (message.content.toLowerCase() == 'you pass butter')
            message.channel.send('**Oh my god**');
		
    if (message.content.toUpperCase() == 'You pass butter')
        message.channel.send('**Oh my god**');
	
    if (message.content.toLowerCase() == 'welcome to the club pal')
        message.channel.send('_looks down sadly_')
	
    if (message.content.toLowerCase() == 'what are you doing?'){
		
        message.reply('Passing butter')
       
	}
    if (message.content.toUpperCase() == 'What are you doing?')
        message.reply('Passing butter')

    if (message.content.toUpperCase() == 'Welcome to the club pal'){
        message.channel.send('_looks down sadly_')
	}
	
	if (message.content.indexOf(config.ID) > -1 && message.author.username == 'Dreskel') {
        message.delete()
		message.reply('Quit pinging me you fuck')
	}
		} 
	}
});

