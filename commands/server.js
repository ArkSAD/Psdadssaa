const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name} `, message.guild.iconURL)
        .setColor("#fdff00")
        .addField('> 🔸 - Owner:', message.guild.owner, true)
        .addField('> 🔸 - Region:', message.guild.region, true)
        .addField('> 🔸 - AFK:', `${message.guild.afkChannel || 'None'}`, true)
        .setThumbnail(sicon)
        .addField('> 🔸 - Members: ', message.guild.memberCount, true)
        .addField('> 🔸 - ID:', message.guild.id, true)
        .addField('> 🔸 - Bots:', checkBots(message.guild), true)
        .addField('> 🔸 - Channels:', `Text : ( ${message.guild.channels.filter(a => a.type === 'text').size} ) \n   Voice : ( ${message.guild.channels.filter(a => a.type === 'voice').size} ) `, true)
        .addField('> 🔸 - Other:', `Roles ( ${message.guild.roles.size}) \n Emojis ( ${message.guild.emojis.size} ) \n  ${message.guild.emojis.map(m => m).join('  ')}   `,true)
        .addField('> 🔸 - Created:', message.guild.createdAt.toDateString(), true)
        .setFooter('Guild created at:')
        .setTimestamp()
.setFooter(`Akon`, 'https://cdn.discordapp.com/attachments/651395372039667723/654497495979917327/Akon1.png')      
        .setTimestamp(message.guild.createdAt);

    return message.channel.send(serverembed);
}
