const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Pink Development Yardım Menüsü")
.setDescription("Burayı Kendiniz Doldurun")//Bu Arada Her Hangi Birşey Yazarken Şunu Yapabilirsiniz Örnek:!ban: etiketlediginiz kişiyi banlar shift+enter felan yapmayın yanına \n Koyarak Devam edin O otamatik Shift+Enter Sayar Bilginize
.setFooter("Hazır Boş Altyapı V13")
.setImage("https://media.discordapp.net/attachments/918509555284074516/931659181889568799/Pink_Development.gif")
message.reply({embeds: [embed]})


},

name: "yardım",
description: "Yardım Menüsü Gösterir.",
aliases: [],
kategori: "yardım",
usage: "",
}