const Discord = require('discord.js')
const { RichEmbed } = require("discord.js");
const config = require('../config.json')
module.exports = {
  name: "link",
  aliases: ["link"],
  description: "returns the bot invite link.",
  execute: async(client, message, args, data, db) => {
   
    let embed = new RichEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField('INVITE THE BOT TO YOUR SERVER ',`Invite The Bot [Bot Link](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)    
    .setFooter(`${client.user.username} bot`)
    .setColor(config.embedColor)

    message.channel.send(embed)
      
    
  } 
} 