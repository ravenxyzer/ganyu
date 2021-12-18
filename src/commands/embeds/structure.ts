import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'structure',
    category: 'configuration',
    aliases: ['str'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: async ({ message, text }) => {
        message.delete()
        const embed = new MessageEmbed()
        .setAuthor('・ ✦ — GIID ADMINISTRATION STRUCTURE')
        .setColor('#FFA976')
        .setDescription('Berikut merupakan penjelasan dari struktur administrasi di Genshin Impact ID.\n\nー <@&909642715086610462> 〃 GIID Official Bot\nMerupakan bot resmi dari server Genshin Impact ID.\n\nー <@&909438424635809832> 〃 Administrator\nMerupakan orang-orang yang memiliki kekuasaan tertinggi dalam mengembangkan serta mengurus segala kepentingan server.\n\nー <@&909440113006751765> 〃 Server Manager\nMerupakan orang-orang yang membantu Administrator dalam mengembangkan serta mengurus server.\n\nー <@&909613158182842409> 〃 Partnership Manager\nMerupakan orang-orang yang mengurus serta mengatur segala keperluan partnership.\n\nー <@&910052712115240990> 〃 Server Security\nMerupakan seseorang yang mengawasi segala aktifitas server.\n\nー <@&909783019601158194> 〃 Gender Verificator\nMerupakan orang yang diberi kepercayaan untuk memverifikasi seseorang yang ingin claim role <@&910146913351925780>.')
        // .setFields()
        // .setFooter()
        message.channel.send({ embeds: [embed]});
    }
} as ICommand