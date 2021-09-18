
const Discord = require("discord.js");

exports.run = (client, message, args) => {

let canalsugestão = message.guild.channels.cache.find(ch => ch.id === "867820464578756628");

let naosei0 = new Discord.MessageEmbed()
.setTitle(`Sistema de Sugestão`)
.setColor(`#FFFFFF`)
.setDescription(`:setinha: ${message.author} Olhe a sua dm e siga as intruções do bot para fazer a sugestão!`)
.setFooter(`Reaja na reação abaixo para deletar essa mensagem.`)

message.channel.send(`${message.author}`, naosei0).then(msg => {
  msg.react("🗑️")

  const a1 = (reaction, user) => reaction.emoji.name ==='🗑️' && user.id === message.author.id
             const b1 = msg.createReactionCollector(a1, { time: 300000 });

             b1.on("collect", c1 => {
             msg.delete(naosei0)
             c1.remove(message.author.id)
          })
      })

let naosei = new Discord.MessageEmbed()
.setTitle(`Sistema de Sugestão`)
.setDescription(`**Qual a suau sugestão?**`)
.setAuthor(`📑 Pergunta 1`)
.setFooter(`Reaja com 🗑️ para apagar essa mensagem.`)
.setColor(`#FFFFFF`)

message.author.send(`${message.author}`, naosei).then(msg => {
  msg.react("🗑️") //-

  const a1 = (reaction, user) => reaction.emoji.name ==='🗑️' && user.id === message.author.id
             const b1 = msg.createReactionCollector(a1, { time: 300000 });

             b1.on("collect", c1 => {
             msg.delete(naosei)
             c1.remove(message.author.id)
          })
      })


message.author.createDM().then(channel => {
channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
  .on("collect", message => {
    let sugestão = message.content;

message.author.send(`Sugestão enviada com sucesso.`)

let legal = new Discord.MessageEmbed()
.setTitle(`Sugestão de ${message.author.username}`)
.addField(`Sugestão:`, `\`\`\`${sugestão}\`\`\``)
canalsugestão.send(legal)
})
})
} 