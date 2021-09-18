
const Discord = require('discord.js');
const ms = require('ms')
exports.run = (client, message, args) => {


          const user = message.mentions.members.first() ||message.guild.members.cache.get(args[0]);
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.inlineReply("Não tenho permissão administrativas!")
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.inlineReply('Você é fraco lhe falta permissão para usar esse comando')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.inlineReply('Membro não encontrado.')
        if(!role) return message.inlineReply('Vip não encontrado.')
        if(!time) return message.inlineReply('Por favor coloque um tempo valido ex: 1d, 1h, 1m, 5s')
        
    let role1 =
    message.guild.roles.cache.find(r => r.name == args[1]) ||
    message.guild.roles.cache.find(r => r.id == args[1]) ||
    message.mentions.roles.first() || 
    args.join(" ");

    if (!role1) return message.reply('Para poder executar o comando, tem que mencionar um cargo!')

    const vipmessage = new Discord.MessageEmbed()
        .setTitle(":heart: Vip Adicionado :money_with_wings:")
        .setDescription(`**⭐⭐⭐⭐⭐Vip adicionado⭐⭐⭐⭐⭐**`)
        .addField(`Adicionado por`, `${message.author}`)
        .addField(`Duração`, `${time}`)
        .addField(`Vip`, `${role}`)
        .setFooter("", client.user.avatarURL())
        .setColor(`#ff0000`)
        .setTimestamp();

     user.roles.add(role);
   
    message.channel.send(vipmessage)

setTimeout(async () => {
  await Member.roles.remove(role)
  message.channel.send(`**${Member} O tempo do seu vip esgotou!.**`)
}, ms(time))
}; 
 