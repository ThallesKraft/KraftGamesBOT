
const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {

    let autor = message.author;


    let autor_money = await db.fetch(`money_${message.guild.id}_${autor.id}`)
    if(autor_money == null) autor_money = 600;
        
    if(autor_money <= 600) {
        return message.channel.send(` ${autor}Você não tem dinheiro suficiente! Uma viagem custa \`600\` zoris.`);
    };

    var lugar = ['Paris', 'Nova York', 'Rio de janeiro', 'Pernambuco', 'Estados Unidos da América', 'Inglaterra']
    let lugarrandom = lugar[Math.floor(Math.random() * lugar.length)]

    let sorte = Math.floor(Math.random() * 4) + 1;
        
    if(sorte == 2) {

        
        let amount = 600;
        
        let moneyEmbed = new Discord.MessageEmbed()
        .setTitle(`Você viajou para ${lugarrandom}`)
        .setColor("RANDOM")
       
        message.channel.send(`${autor}`, moneyEmbed);
        db.subtract(`money_${message.guild.id}_${autor.id}`, amount);
        db.set(`via_${message.guild.id}_${autor.id}`, Date.now());


    }


} 
