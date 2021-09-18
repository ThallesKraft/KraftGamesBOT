
const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name : 'tempmute',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Você é fraco lhe falta permissão para usar esse comando')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send('Membro não encontrado.')
        if(!time) return message.channel.send('Por favor coloque um tempo.')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Cargo mutado não encontrado, criando cargo...')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                let embed = new Discord.MessageEmbed()
                .setTitle("\`Mutado\` :dizzy:")
                .setDescription(`💥 | Mutado: ${Member.displayName}\n:suporte_SBM: | Adm: ${message.author}\n🕰️ | Tempo: ${time}`)
                .setFooter("Mutado lol", message.author.displayAvatarURL({format:"png"}))
                .setColor("BLACK")
                .setTimestamp()

                message.channel.send(embed)
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        let mennyf = new Discord.MessageEmbed()
                .setTitle("\`Mutado\` :dizzy:")
                .setDescription(`💥 | Mutado: ${Member.displayName}\n:suporte_SBM: | Adm: ${message.author}\n🕰️ | Tempo: ${time}`)
                .setFooter("Mutado lol", message.author.displayAvatarURL({format:"png"}))
                .setColor("BLACK")
                .setTimestamp()
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} Ja esta mutado.`)
        await Member.roles.add(role2)
        message.channel.send(mennyf)

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send(`**${Member.displayName} agora esta desmutado.**`)
        }, ms(time))
    }
} //!ᵛᵘˡᵍᵒLc né vida#0001  
