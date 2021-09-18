const { Client, Message, Role, Collector } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "rollcreate",
    author: "zeni",

    run: async(client, message, args) => {
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.inlineReply('🚨 | Desculpe, mas você não tem permissão para isso.')
        let rname = args.join(" ")

        if (!rname) message.inlineReply('Coloque um nome para o cargo!')
        else {
        message.guild.roles.create({
            data: {
                name: rname,
            }}).then(async Role=> {
            message.channel.send(`✅ | ${message.author} Cargo  criado com sucesso: ${Role}`)
        

        })
    }
    } //Comando feito por: ThallesKraft
}