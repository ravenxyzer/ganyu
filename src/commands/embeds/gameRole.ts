import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'gameRole',
    category: 'configuration',
    aliases: ['gr'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: async ({ message, text }) => {
        message.delete()
        const embed = new MessageEmbed()
        .setAuthor('・ ✦ — GIID GAME ROLES')
        .setColor('#FFA976')
        .setDescription('Silakan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n> <:Genshin_Impact:910879454631452692> ・ <@&909622094814388254>\nPing untuk merekrut Party Genshin Impact\n\n> <:Honkai_Impact:910885561181552641> ・ <@&909600627280187402>\nPing untuk pemain Honkai Impact 3rd\n\n> <:Mobile_Legends:910879482854916097> ・ <@&909600003197132821>\nPing untuk pemain Mobile Legends : Bang Bang\n\n> <:Valorant:910886919464943641> ・ <@&909600531431952434>\nPing untuk pemain Valorant\n\n> <:Minecraft:910887582378901555> ・ <@&909600734956359750>\nPing untuk pemain Minecraft')
        // .setFields()
        // .setFooter()
        message.channel.send({ embeds: [embed]});
    }
} as ICommand