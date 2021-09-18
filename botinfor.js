
const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()  
    .setColor("BLUE") 
    .setDescription(` `)
    .setTimestamp()
    .setThumbnail('')
    .setFooter(`Enviado por ${message.author.username}`)
    .addFields(
        {
            name: '🤖 __Eu sou:__',
            value: `\`${client.user.tag}\``,
            inline: false
        },
        {
            name: '💢 __Servidores:__',
            value: `\`${client.guilds.cache.size}/100\``,
            inline: false
        },
        {
            name: '🍀 __Canais:__',
            value: `\`${client.channels.cache.size}\``,
            inline: false
        },
        {
            name: '💁 __Usuários:__',
            value: `\`${client.users.cache.size}\``,
            inline: false
        },
        {
            name: '🏓 __Meu ping:__',
            value: `\`${Math.round(client.ws.ping)}\` ms`,
            inline: false
        },
        {
            name: '🛠️ __Criador:__',
            value: '<@814068290607251487>',
            inline: false
        },
        {
            name: '🔗  __*Meu servidor:*__',
            value: 'https://discord.gg/DEAG9xYjvA',
            inline: false
        },
    )
    message.channel.send(`${message.author}`, embed);
}