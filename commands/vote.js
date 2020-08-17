const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "vote",
  aliases: ["vote"],
  description: "returns a link to vote the bot and get rewards.",
  execute: async(client, message, args, data, db) => {
   
    let embed = new Discord.RichEmbed()
    .setColor(config.embedColor)
    .setTitle(`__Vote For Bot And Get Coins__`)
    .setDescription(`**With this link, you can vote me on discord bot list, if you do so you will get 1 coins.**\nLink: [Vote : People+](https://top.gg/bot/714487153475977276/vote)`)
    .setFooter(`Thanks for supporting us!`)
    message.channel.send(embed) 
  } 
}  