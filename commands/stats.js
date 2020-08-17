const Discord = require('discord.js')
const ms = require('parse-ms')
const config = require('../config.json')
module.exports = {
  name: "stats",
  aliases: ["stats"],
  description: "shows the stats of Advice Bot.",
  execute: async(client, message, args, data, db) => {
   
    let ownersID = config.ownersID;
    
    let owners = []
    
    ownersID.map(x => owners.push(client.users.get(x).tag))
   
   // let usersCount = await client.shard.fetchClientValues("users.size")
    
  //  let serverCount = await client.shard.fetchClientValues('guilds.size') 
    
    let uptime = [] 
    
    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`) 
    })
    
    let embed = new Discord.RichEmbed()
    .setColor(config.embedColor)
    .setTitle(`${client.user.username} Info/Stats`)
    .setThumbnail(client.user.displayAvatarURL)
    .addField(`<a:greenbut:725284803087433789>Bot Owners <a:ArrowRed:709946130766757990>`, owners.join("\n"), false) 
    .addField(`<a:greenbut:725284803087433789>Library <a:ArrowRed:709946130766757990>`, `Discord.js - v12.2.0`, false)
    //.addField(`<a:greenbut:725284803087433789>Memory Usage:`, (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB", false) 
    .addField(`<a:greenbut:725284803087433789>Servers Count <a:ArrowRed:709946130766757990>`, client.guilds.size.toLocaleString(), false)
    .addField(`<a:greenbut:725284803087433789>Users Count <a:ArrowRed:709946130766757990>`, client.users.size.toLocaleString(), false) 
    //.addField(`<a:greenbut:725284803087433789>Shards Count:`, `Uninplemented`, false)
    .addField(`<a:greenbut:725284803087433789>Uptime <a:ArrowRed:709946130766757990>`, uptime.join(", "), false) 
    message.channel.send(embed) 
  } 
} 