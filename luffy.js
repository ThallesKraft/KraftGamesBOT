module.exports = {

    name: 'luffy',

    run: async (client, message, args) => {

 let name = ('Luffy');
 let user = message.author       

 let imagens = [
    "https://64.media.tumblr.com/a8dff7fbbb10b08f7369f59c77d2255e/934e002b558196f4-32/s400x600/680156a2012e36a302fa793110f5fc64e3172aa4.png",
    "https://i.pinimg.com/originals/48/51/d0/4851d00d687ab2582185de57908f8206.jpg",
    "https://cdn140.picsart.com/318499880112201.jpg",
    "https://64.media.tumblr.com/22df863b828ac8cd8b2aea32dd846f56/tumblr_pdbvok814d1wtbdtio7_1280.jpg",
    "https://66.media.tumblr.com/190f0a88e6dbddeaf99a7a384a221b93/tumblr_pj89h9lQc71w0po92_540.jpg",
    "https://64.media.tumblr.com/ec94642b03747c6667759d9cebd0d093/f50bd8226be0afc0-b7/s640x960/dffdb120debdaf4f22f6a0f441155584a5ae16f5.jpg",
    "https://i.pinimg.com/originals/63/53/1b/63531b0c77289598f3cc96e7440cb6ba.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1aYL2bCoaGfhSEASYh_2zoLiVgN3c6IB2A&usqp=CAU"
 ]

 let imagem = imagens[Math.floor(Math.random() * imagens.length)]

 let avatar = {avatar: imagem}

 let frases = [
    "Eu sou o homem que vai se tornar o rei dos piratas!",
    "Eu não quero conquistar nada, só acho que a pessoa com mais liberdade do mundo é o rei dos piratas!",
    "Eu não sei usar espadas, não sei navegar, também não sei cozinhar e não sei mentir, o que eu sei, é que dependo dos meus amigos se quiser continuar vivendo!",
    "Eu tenho um sonho, que é ser o rei dos piratas. Não me importo de morrer para realizar esse sonho.",
    "Saanji, quero comida.",
    "Se nós morrermos aqui, quem é que vai acabar com ele.",
    "Você dormiu 3 dias, 3 dias?Quer dizer que perdi 15 refeições",
    "Quem diz que não pode ser feito nunca deve interromper aquele que está fazendo",
 ]

 let mensagem = frases[Math.floor(Math.random() * frases.length)]

 message.channel.createWebhook(name, avatar).then(webhook => { 
 webhook.send(mensagem).then(() => webhook.delete())})
    }
}