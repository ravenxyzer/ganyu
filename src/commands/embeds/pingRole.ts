import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'pingRoleEmbed',
    category: 'configuration',
    aliases: ['pre'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: async ({ message, text }) => {
        message.delete()
        const embed = new MessageEmbed()
        .setAuthor('・ ✦ — GIID PING ROLES')
        .setColor('#FFA976')
        .setDescription('Silahkan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n> 🤝 ・ <@&910169062510833704>\nPing untuk mendapatkan notifikasi terkait Partnership Server Genshin Impact ID\n\n> 🔥 ・ <@&910303931333238814>\nPing untuk mendapat notifikasi konten terbaru dari Content Creator GIID\n\n> 🎉 ・ <@&910854269064843316>\nPing untuk mendapatkan notifikasi Giveaway\n\n> 🛐 ・ <@&909621805986230302>\nPing untuk mendapatkan notifikasi terkait spiral abyss\n\n> 🍥 ・ <@&911193934053654538>\nPing untuk mendapatkan notifikasi terkait anime, manga, dan sejenisnya.\n\n> 🐰 ・ <@&911837444708655194>\nPing untuk mendapatkan notifikasi terkait Virtual Youtubers')
        // .setFields()
        // .setFooter()
        await message.channel.send({ embeds: [embed]});
    }
} as ICommand