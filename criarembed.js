
const Discord = require("discord.js"); /*criado por nãoexisto#0001*/
const inlinereply = require('discord-reply'); /*criado por nãoexisto#0001*/
 
exports.run = (client, message, args) => {
 
    const { guild } = message /*criado por nãoexisto#0001*/
 
    const icon = guild.iconURL() /*criado por nãoexisto#0001*/
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply(`:negado: **| Você não tem a permissão de \`Gerenciar mensagens.\`**`); /*criado por nãoexisto#0001*/
 
 
    const embed = `:e_wPencil: **| ${message.author} , em qual chat vai ser a embed?**`
    message.lineReply(embed).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                const embed = `:off: **| ${message.author} ,  você não mencionou um chat válido!**`
                return message.lineReply(embed); /*criado por nãoexisto#0001*/
 
            } else {
                const embed = `:e_wPencil: **| ${message.author} , Qual vai ser a descrição?** `
                message.lineReply(embed).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content
                    
                        const embed = `:e_wPencil: **| ${message.author} , Qual vai ser o titulo da sua embed ?**`
                        message.lineReply(embed).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1}) /*criado por nãoexisto#0001*/
                            .on('collect', c => {
                                title = c.content
 
                                const embed1 = `:verificado: **| ${message.author} , Sua embed foi criada com sucesso!**`
                                message.lineReply(embed1)
 
                                let embed = new Discord.MessageEmbed()
 
                                .setColor('YELLOW')
                                .setFooter(`${message.author.username}`)
                                .setTitle(title)
                                .setThumbnail(icon)
                                .setTimestamp()
                                .setDescription(desc)
 
                                canal.send(embed) /*criado por nãoexisto#0001*/
 
                            })
                        }) /*criado por nãoexisto#0001*/
                    })
                })
            } /*criado por nãoexisto#0001*/
        }) /*criado por nãoexisto#0001*/
    })  /*criado por nãoexisto#0001*/
 
}
