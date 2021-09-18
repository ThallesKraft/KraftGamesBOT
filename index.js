

const mySecret = process.env['TOKEN']
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Novo ping em: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 
const enmap = require('enmap');
const {token, prefix} = require('./config.json');

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    //const "https://discord.gg/PEdmSZzCAv";

    const fera = message.content.slice(prefix.length).trim().split(/ +/g);
    const ferinha/*https://discord.gg/PEdmSZzCAv*/ = fera.shift().toLowerCase();
    const feraemoji = "🎫";

    if(ferinha/*https://discord.gg/PEdmSZzCAv*/ == "ticket-setup") {
        // ticket-setup #canal

        let feraa = message.mentions.channels.first();
        if(!feraa) return message.reply("`k!ticket-setup #canal`");

        let ferinha_zika = await feraa.send(new Discord.MessageEmbed()
            .setTitle("Sistema de ticket")
            .setDescription("[Reaja para abrir um ticket!]")
            .setFooter("Sistema de ticket by ThallesKraft")
            .setColor("RANDOM")
        );

        ferinha_zika.react(feraemoji);
        settings.set(`${message.guild.id}-ticket`, ferinha_zika.id);

        message.channel.send("Sistema de ticket configurado!")
    }

    if(ferinha/*https://discord.gg/PEdmSZzCAv*/ == "close") {
        if(!message.channel.name.includes("ticket-")) return message.channel.send("Você não pode utilizar esse comando aqui!")
        message.channel.delete();
    }
});
client.on('ready', () => {
    console.log('ready')
});

client.on('messageReactionAdd', async (reaction, user) => {
  const feraemoji = "🎫";
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;

    let feraa = await settings.get(`${reaction.message.guild.id}-ticket`);

    if(!feraa) return;

    if(reaction.message.id == feraa && reaction.emoji.name == feraemoji) {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async feraa => {
            feraa.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Boas vindas ao seu ticket").setDescription("[Utilize k!close para fechar]").setColor("RANDOM"));
            
        })
    }
});



client.login(process.env.TOKEN); 

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

 const args = message.content
     .trim().slice(config.prefix.length)
     .split(/ +/g);
 const command = args.shift().toLowerCase();

 try {
     const commandFile = require(`./commands/${command}.js`)
     commandFile.run(client, message, args);
 } catch (err) {
 console.error('Erro:' + err);

 message.channel.send(`**❌ | Olá ${message.author} este comando não existe. Por favor ultilize \`${config.prefix}help\` para obter ajuda!**`);

}
}); 


client.on("message", message => {

    if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    return message.channel.send(`**👋 | Olá ${message.author}, veja meus comandos com ${config.prefix}help!**`)
    }
    });
    
    client.on("ready", () => {

    let ferinha = [

        `Atualmente em ${client.guilds.cache.size} servidores`,
        `Peça ajuda com: ${config.prefix}help`,
        `Gerenciando ${client.users.cache.size} pessoas`,
        `Criado por ThallesKraft #6066`,
        `Versao : b.1.16`
      ],
      fera = 0;
    setInterval( () => client.user.setActivity(`${ferinha[fera++ % ferinha.length]}`, {
          type: "PLAYING" //mais tipos: WATCHING / LISTENING
        }), 1000 * 120); 
    client.user
        .setStatus("online")
        .catch(console.error);
  console.log("Estou pronto(a) para ser utilizado(a)!")
  }); 








const db = require("quick.db");

client.on("guildMemberAdd",  async (member) => {
  let ferinha_autorole = db.get(`ferinha_autorole_${member.guild.id}`);
  if (!ferinha_autorole === null) return;
  member.roles.add(ferinha_autorole)
});


client.on("guildMemberAdd", (member) => {

  let ferinha_canal_de_boas_vindas = db.get(`ferinha_boas_vindas_${member.guild.id}`);
  let ferinha_contador = member.guild.memberCount;
  let ferinha_servidor = member.guild.name;

  if (!ferinha_canal_de_boas_vindas) return;

  let msg_embed_ferinha = new Discord.MessageEmbed() //mensagem embed
  .setAuthor(`${member.user.tag}`, member.user.avatarURL())
  .setDescription(`Boas Vindas ${member.user} ao servidor **${ferinha_servidor}**! \nAtualmente estamos com \`${ferinha_contador}\` membros!`)
  .setColor("RANDOM")
  .setThumbnail(member.user.avatarURL());

  let msg_not_embed_ferinha = `Boas Vindas ${member.user}! \nAtualmente estamos com \`${ferinha_contador}\` membros!`; //mensagem não embed

  client.channels.cache.get(ferinha_canal_de_boas_vindas).send(msg_embed_ferinha)
});


client.on("guildMemberRemove", (member) => {

  let ferinha_canal_de_saida = db.get(`ferinha_saída_${member.guild.id}`);
  let ferinha_contador = member.guild.memberCount;

  if (!ferinha_canal_de_saida) return;

  let msg_embed_ferinha = new Discord.MessageEmbed() //mensagem embed
  .setAuthor(`${member.user.tag}`, member.user.avatarURL())
  .setDescription(`O usuário ${member.user} saiu do servidor! \nAtualmente estamos com \`${ferinha_contador}\` membros!`)
  .setColor("RANDOM")
  .setThumbnail(member.user.avatarURL());

  let msg_not_embed_ferinha = `O usuário ${member.user} saiu do servidor! \nAtualmente estamos com \`${ferinha_contador}\` membros!`; //mensagem não embed

  client.channels.cache.get(ferinha_canal_de_saida).send(msg_embed_ferinha)
});


client.on("messageDelete", async (message) => {


  let ferinha_canal = db.get(`ferinha_msg_del_${message.guild.id}`);
  if (!ferinha_canal === null) return;

  if (message.author.bot) return;

  let ferinha_author = message.author;
  let ferinha_canal_2 = message.channel;
  let ferinha_msg_del = message.content;

  let ferinha_msg_embed = new Discord.MessageEmbed()
  .setTitle(`🗑 Mensagem excluída`)
  .setColor("RANDOM")
  .addFields(
    {
      name: `Autor da mensagem`,
      value: ferinha_author,
      inline: false
    },
    {
      name: `Canal`,
      value: ferinha_canal_2,
      inline: false
    },
    {
      name: `Mensagem`,
      value: `\`\`\`${ferinha_msg_del}\`\`\``,
      inline: false
    }
  )
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL());

  client.channels.cache.get(ferinha_canal).send(ferinha_msg_embed)
});





client.on("messageUpdate", async (message, oldMessage) => {
  let ferinha_canal = db.get(`ferinha_msg_edit_${message.guild.id}`);
  if (!ferinha_canal === null) return;

  if (message.author.bot) return;

  let ferinha_author = message.author;
  let ferinha_canal_2 = message.channel;
  let ferinha_msg_antiga = message.content;
  let ferinha_msg_editada = oldMessage.content;

  let ferinha_embed = new Discord.MessageEmbed()
  .setTitle(`📝 Mensagem editada`)
  .setColor("RANDOM")
  .addFields(
    {
      name: `Autor da mensagem`,
      value: ferinha_author,
      inline: false
    },
    {
      name: `Canal`,
      value: ferinha_canal_2,
      inline: false
    },
    {
      name: `Mensagem antiga`,
      value: `\`\`\`${ferinha_msg_antiga}\`\`\``,
      inline: false
    },
    {
      name: `Mensagem editada`,
      value: `\`\`\`${ferinha_msg_editada}\`\`\``,
      inline: false
    }
  )
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setFooter(message.guild.name, message.guild.iconURL());

  client.channels.cache.get(ferinha_canal).send(ferinha_embed)
});


 
 
