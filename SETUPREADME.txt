1. Install NodeJs needs to be 8.0 or above.

2. in config.json, Token is your bots token. head to https://discordapp.com/developers/applications/me to create a bot user and get the token

3. also in config.json is ownerId and ID. In discord turn on developer mode, copy your id and put it in that field. ID is the bots ID. do the same thing you did with ownerID.

NOTE: if you wish to change the commannd prefix, edit this line in butter.js

line 2 : const client = new commando.Client({commandPrefix: '$'});

NOTE 2: Make sure to put it in a folder you reconize as butter. the start.bat works on windows only. you can run it from linux or mac, the glory of NodeJs. for linux and mac its Node --harmony butter.js  