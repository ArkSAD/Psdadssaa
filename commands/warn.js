const Discord = require('discord.js')
const moment = require('moment')
module.exports.run = async (bot, message, args) => {


  let  user  =  message.mentions.users.first();
  let  reason  =  message.content.split(' ').slice(2).join(' ');
  message.delete();
  if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('Your Dont Have Permission' );
  if(!user)  return  message.channel.send("> :x: - Please Again \`\#?warn @someone <Reason>\`\  ")
  if(!reason)  return  message.channel.send("> :x: - Really ? Where  Reason  ")
  let  reportembed  =  new  Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL) 
  .setTitle(`> 🔸 - Warned User`)
.addField("> \`\#\`\  Warned  User:",   `: - ${user}   \`\ID :\`\  ${user.id}`)
.addField('> \`\#\`\ Warned  By:',`: - ${message.author.username} \`\ID :\`\ ${message.author.id}`)
.addField('> \`\#\`\ Reason:',  ` : - ${reason}`,  true)
.addField("> \`\#\`\ Room Warn:",`: - ${message.channel.name} - \`\ID Channel :\`\ ${message.channel.id}`)
.setFooter(`Akon`, 'https://cdn.discordapp.com/attachments/651395372039667723/654497495979917327/Akon1.png')      
.setTimestamp()
.setColor('#fdff00')
let incidentchannel = message.guild.channels.find(`name`, "warn");
if(!incidentchannel) return message.channel.send("Please Create Room \`\ warn \`\ ");
incidentchannel.send(reportembed);
message.reply(`> - ✅ Done Warn : ${user} **`).then(msg  =>  msg.delete(3000));
user.send(`**Your Have Warned  \`\Server :\`\ ${message.guild.name} \`\Reason :\`\ ${reason} **`)
}
