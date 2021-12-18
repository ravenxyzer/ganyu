import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'tier',
    category: 'configuration',
    aliases: ['tl'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: async ({ message, text }) => {
        message.delete()
        const embed = new MessageEmbed()
        .setAuthor('・ ✦ — GIID TIER LEVELS')
        .setColor('#FFA976')
        .setDescription('Berikut merupakan tier level yang ada di Genshin Impact ID.\n\nー <@&910743956449558569> 〃 Tier level 1\nDidapatkan seketika setelah bergabung ke server Genshin Impact ID\n\nー <@&909649305068011560> 〃 Tier level 2\nDidapatkan ketika anda mencapai level 5 | `900` xp.\n\nー <@&909649459674251275> 〃 Tier level 3\nDidapatkan ketika anda mencapai level 10 | `3.150` xp.\n\nー <@&909649452783009812> 〃 Tier level 4\nDidapatkan ketika anda mencapai level 20 | `11.400` xp.\n\nー <@&909649448152465439> 〃 Tier level 5\nDidapatkan ketika anda mencapai level 30 | `24.650` xp.\n\nー <@&909649446684475412> 〃 Tier level 6\nDidapatkan ketika anda mencapai level 50 | `66.150` xp.\n\nー <@&909649444948029470> 〃 Tier level 7\nDidapatkan ketika anda mencapai level 70 | `127.650` xp.\n\nー <@&909649438333620275> 〃 Tier level 8\nDidapatkan ketika anda level 100 | `257.400` xp.\n\nCek level kalian dengan perintah "ar!m stats" di <#909518413506949150>.')
        // .setFields()
        // .setFooter()
        message.channel.send({ embeds: [embed]});
    }
} as ICommand