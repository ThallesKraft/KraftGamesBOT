const discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  name: "sus",
  description: "Use esse comando para mandar alguém para o espaço.",
  usage: ".sus <@user>",
  category: ".diversão ",
  run: async (client, message, args) => {
    const user = message.mentions.users.first()
    const imp = [true, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
    const crewmate = crew[Math.floor(Math.random() * crew.length)];
    
    if(!user) {
      return message.channel.send(`${message.author} Por favor, mencione um usuário válido para expulsar!`)
    }
    
    const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`)
    
    const embed = new discord.MessageEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
      .setTitle(`${message.author.username} decidiu ejetar ${user.username}`)
      .setFooter(message.author.username)
      .setColor("BLACK")
      .setDescription(`[Clique aqui para baixar a imagem](${data.url})`)
      .setImage(`${data.url}`)
      .setTimestamp();

    message.channel.send(embed);
  }
}
