const Discord = require('discord.js')
const moment = require('moment')
module.exports.run = async (client, message, args) => {


    if(!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`
    var api = `${Math.round(client.ping)}`
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor("#fdff00")
.addField('> - Time Taken:',msg + " ms ")
.setFooter(`Akon`, 'https://cdn.discordapp.com/attachments/651395372039667723/654497495979917327/Akon1.png')      
.setTimestamp()
.addField('> - WebSocket:',api + " ms   ")
message.channel.send({embed:embed});
}


      
          
                