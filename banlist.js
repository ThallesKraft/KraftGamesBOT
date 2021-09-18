const { MessageEmbed, DiscordAPIError } = require("discord.js")//ignore isso aqui, tava querendo fazer embed mas fiquei com preguiça 
module.exports = {
  name: "bans",
  aliases: ["listban", "list-ban", "banimentos"],
  //by baliza hehehe :)
  run: async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Você não possui permissão de \`Administrador\` bobão!`)
   const bybaliza = message.guild.fetchBans()
   const baliza_color = "DARK BLUE"
   const baliza_d = (await bybaliza).map((baliza) => baliza.user.tag).join("\n") || "\`\`\`Ninguém foi banido\`\`\`"
    const bybaliza2 = new MessageEmbed()
    .setTitle('🚨 | Lista de banidos')
    .setDescription(baliza_d)
    .setColor(baliza_color)
    .setFooter(`${client.user.username}#${client.user.discriminator}`, client.user.displayAvatarURL({dinamyc : true}))
    .setTimestamp(new Date())
    
    message.channel.send(bybaliza2)
    //by ThallesKraft hehehe :)
  }
  }