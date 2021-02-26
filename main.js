const Discord = require('discord.js');

//new client
const client = new Discord.Client();

//this is how you ping the bot
const prefix = '-';

//grab other javascript file code
const fs = require('fs');

//make a collection of stored commands
client.commands = new Discord.Collection();

//get path of the code
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

//go through all the files in the commands folder
for(const file of commandFiles){
   const command = require(`./commands/${file}`);

   client.commands.set(command.name, command);
}

//Ready
client.once('ready', () =>{
   console.log('TestBot is Oneline');

});

//Checking for messages
client.on('message', message =>{
    //if it does not have the prefix or its the bot that sends a message do nothing
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    //splice message
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    }

});


//Login to Bot #Hidden Token

