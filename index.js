'use strict';
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', ()=>{
    console.log(`Bot is ready as! ${client.user.tag}`);
})

client.on('message', async message => {
    if(message.content == '!ping'){
        message.reply('PONG!');
    }
    if(message.content == '!embed'){
        const embed = new MessageEmbed()
            .setTitle('A sick little embed')
            .setColor(0xff0000)
            .setDescription('Hello this is a sick embed!');
        message.reply(embed);
    }
    if(message.content == "!clear"){
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
    }
})

client.login('Nzc3NjM5NDMyNjU1ODYzODQ5.X7GXKA.OwaqYO3cWaNQpCEPv4p1e537sJA');