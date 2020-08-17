const Discord = require('discord.js')
const { get } = require('../constructors/sqlite.js')

module.exports = {
  name: "balance",
  aliases: ["bal"],
  description: "displays the user's balance.",
  execute: async(client, message, args, data, db) => {
   
    let user = message.guild.members.get(member => args.length && message.mentions.users.size < 1 && member.user.username.toLowerCase().startsWith(args.join(" ").toLowerCase())) || client.users.get(args[0]) || message.mentions.users.first() || message.author
    
    //if we got an user by name, we must access to the user property 
    if (user.username === undefined) user = user.user
    
    data = await get(message, user)
    
    let logs = []
    
    data.logs.map((x, y) => {
      if (y < 10) logs.push(x)
    })
    
    let embed = new Discord.RichEmbed()
    .setColor(process.env.PINK)
    .setTitle(`<:cash:710084161850835024> ${user.username}'s Balance: <:cash:710084161850835024>`)
    .setDescription(`${user} you currently have <:CoinPng:726377100046630915> **__${data.coins.toFixed(2)}__** <:CoinPng:726377100046630915> coins.\n\nIf you want to earn some coins to buy members then do \`-find\`|\`-f\`.\n\n<a:poke_money:726377166098399282> you can buy members For your server By : <a:poke_money:726377166098399282>\n<a:poke_money:726377166098399282> \`-ad [Coins] [Message]\` <a:poke_money:726377166098399282>`)
    //.setThumbnail(user.displayAvatarURL)
    .addField(`**__Dont want coins by Joining Server ?__** `, `<:dot:708360553952837665>Contact : \`DynamoYT#1000\` To buy coins :) \n<:dot:708360553952837665>you can vote the bot **__[Vote Users+]()__** and get 1 coins!\n<:dot:708360553952837665>Buy Lottery Ticket To test Your Luck : \`-ticket\`.`, false) 
    .addField(`<a:announcement:708359787863343114> **__Transactions__** <a:announcement:708359787863343114>`, logs.length == 0 ? "none" : logs.join("\n"))
    message.channel.send(embed) 
  } 
} 