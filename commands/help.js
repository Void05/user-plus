const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "help",
  aliases: ["help"],
  description: "displays the bot commands list.",
  execute: async(client, message, args, data, db) => {
          let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ".";
    let text = []
    
    let owners = ["710417938796249109"] 
    
    client.commands.map(x => {
      if (!x.description.includes("owner") || owners.includes(message.author.id)) text.push(`**__${prefix}${x.name} - [${x.aliases ? x.aliases : "none"}]__**:\n${x.description}`)
    }) 
    
    let embed = new Discord.RichEmbed()
    .setColor(config.embedColor)
    .setTitle(`${client.user.username} Commands List`)
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`
    <:dot:708360553952837665>\`-bal\` : To get your balance\n**Usage:** \`-bal\`
    <:dot:708360553952837665>\`-find\` : To find some server to join and get coins\n**Usage:** \`-find\`
    <:dot:708360553952837665>\`-pay\` : To pay some coins to user\n**Usage:** \`-pay [User] [Coins]\`
    <:dot:708360553952837665>\`-ad\` : To buy members for your server\n**Usage:** \`-ad [Coins] [Any message]\`
    <:dot:708360553952837665>\`-check\` : To check that you can leave joined server safely without lossing coins\n**Usage:** \`-check\`
    <:dot:708360553952837665>\`-daily\` : To get daily coins\n**Usage:** \`-daily\`
    <:dot:708360553952837665>\`-ticket\` : To buy lottery ticket of 5 coins\n**Usage:** \`-ticket\`
    <:dot:708360553952837665>\`-help\` : To get help message\n**Usage:** \`-help\`
    <:dot:708360553952837665>\`-invite\` : To invite the bot to your server\n**Usage:** \`-invite\`
    <:dot:708360553952837665>\`-report\` : To report any Bug In the bot\n**Usage:** \`-report\`
    <:dot:708360553952837665>\`Support\`=> **__[Support Server]()__** | **__[Invite The Bot]()__** | **__[Vote for Bot]()__**`)
    .setFooter(`${config.botName} bot`)
    message.channel.send(embed).catch(e => message.channel.send(`Uh, an error :s`)) 
  }
} 