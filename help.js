const Discord = require("discord.js");

module.exports = {
    name: "help com reação by ferinha",
    description: "clique na reação, e a msg será editada :)",
    author: "ferinha heher",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`Painel de comandos`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Veja meus comandos:

\n🔗 Utilidade \n⚙ Moderação \n🤣 Diversão \n👑 Econômia
⠀`)
    .setFooter(`${message.author.tag}`)
    .setColor("YELLOW")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      msg.react("◀️")
      msg.react("🔗")
      msg.react("⚙")
      msg.react("🤣")
      msg.react("👑")

      let filtro0 = (r, u) => r.emoji.name === '◀️' && u.id === message.author.id;
      let filtro1 = (r, u) => r.emoji.name === '🔗' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '⚙' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '🤣' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '👑' && u.id === message.author.id;
      

      let coletor0 = msg.createReactionCollector(filtro0);
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);

      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let ferinha = new Discord.MessageEmbed()
      .setTitle(`Painel de comandos`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`Veja meus comandos:

\n🔗 Utilidade \n⚙ Moderação \n🤣 Diversão \n👑 Econômia
⠀`)
      .setFooter(`${message.author.tag}`)
      .setColor("YELLOW")   
        
     
        msg.edit(`${message.author}`, ferinha)
      })


      coletor.on("collect", c => { //embed do painel de utilidade (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`🔗 Utilidade 🔗`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
        k!calculadora
        k!servericon
        k!serverinfo
        k!avatar
        k!bug
        k!sugestão
        k!banner
        k!ping
        k!botadd
        k!botinfor\n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor2.on("collect", c => { //embed do painel de moderação (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`⚙ Moderação ⚙`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
        k!banlist
        k!ban
        k!kick
        k!mute
        k!setautorole
        k!setentrada
        k!setsaida
        k!setmsgdel
        k!setmsgedit
        k!lock
        k!unlock
        k!addvip @user <tempo> @cargo
        k!rolecreate
        k!addrole
        k!roleremv
        k!clear
        k!dm
        k!nick
        k!unban
       \n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor3.on("collect", c => { //embed do painel de diversão (editada)

        let ferinha = new Discord.MessageEmbed()
        .setTitle(`🤣 Diversão 🤣`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
        k!bolsonaro
        k!8ball
        k!junin
        k!kiss
        k!hug
        k!slap
        k!ship
        k!faustão
        k!luffy
        k!piada
        k!sus
        k!pergunta
        k!avatar
        k!superman
        k!hackman
        k!meme
        k!otaku
        k!ataque\n⠀`)
        .setColor("GREEN")

        msg.edit(`${message.author}`, ferinha)
      })

      coletor4.on("collect", c => { //embed de outros cmds (editada)

        let ferauwu = new Discord.MessageEmbed()
        .setTitle(`👑 Econômia 👑`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`
k!pay
k!daily
k!perfil
k!top money
              BETA
\n⠀`)
        .setColor("BLUE")

        msg.edit(`${message.author}`, ferauwu)
      })
    })
  }
}