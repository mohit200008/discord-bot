require('dotenv').config();

const { Client }= require('discord.js');
const client= new Client();

client.on('ready',()=> {
    console.log(`${client.user.username} has logged in`);
});

client.on("message",(message)=> {
    if (message.author.bot) return;
    console.log(`[${message.author.tag}] : ${message.content}`);
    if( message.content === "hello") {
        message.channel.send("hello sexy how you doin!!?")
    }
})

client.login(process.env.DISCORD_TOKEN);