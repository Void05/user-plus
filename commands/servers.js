const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "find",
  description: "displays 3 servers to join in and gain coins.",
  aliases: ["f"],
  execute: async(client, message, args, data, db) => {
   
    let orders = await db.startsWith(`orders_`, { sort: ".data" })
    
    let length = 1
    
    orders = orders.filter(x => x.data > 0 && client.guilds.get(x.ID.split("_")[1]) && client.guilds.get(x.ID.split("_")[1]).members.get(message.author.id) === undefined)
    
    let embed = new Discord.RichEmbed()
    .setColor(config.embedColor)
    .setTitle(`__Servers to join and Earn Coins__`)
    .setDescription(`You'll get 1 coins per server joined,  if you leave before 3 days have passed you will lose 2 coins.\n\n<a:hypesquad:717959998466162769> **__List Of Servers__** <a:hypesquad:717959998466162769>`)
       for (let i = 0;i < orders.length;i++) {
     
         let handler = true
         
      	if (length > 3) {} else {
 
        	let id = orders[i].ID.split("_")[1]
        
        	let guild = client.guilds.get(orders[i].ID.split("_")[1]).name
        
       	  let code = await db.fetch(`code_${id}`)
        
          
       		await client.fetchInvite("https://discord.gg/" + code)
          .then(link => { 
           // console.log(link.code)
            if (link.code === null) handler = false 
          })
          .catch(error => {
            handler = false 
          }) 
          
          await new Promise(resolve => setTimeout(resolve, 1))
          
        	if (handler) {
        		let description = await db.fetch(`description_${id}`)
        
        		embed.addField(`<:dot:708360553952837665> **__${guild}__** <:dot:708360553952837665>`, description, false)
       			length++
        } 
      } 
    } 
 
    embed.addField(`<:dot:708360553952837665><:dot:708360553952837665> **__People+ Support Server:__** <:dot:708360553952837665><:dot:708360553952837665>`, `**__[Galaxy Giveaways](https://discord.gg/8K625YF)__**`, false)
    
    embed.addField(`There is no servers to join ?`, `There probably isn't any guild available for you to join, Try after 5 mins later`, false)
    
    message.channel.send(embed)  
  } 
} 