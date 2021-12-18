import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'customRoleRules',
    category: 'configuration',
    aliases: ['crr', 'customRoleRule'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: async ({ message, text }) => {
        message.delete()
        const embed = new MessageEmbed()
        .setAuthor('・ ✦ — GIID CUSTOM ROLE RULES')
        .setColor('#FFA976')
        .setDescription('Booster diberikan keuntungan untuk memodifikasi satu role dari slot yang tersedia.\nDengan ketentuan sebagai berikut:\n\n1. Setiap booster hanya dapat memilih 1 custom-role per akunnya.\n\n2. Booster dapat memodifikasi nama berserta warna dari custom-role yang dipilih.\n\n3. Custom-role hanya bisa bertahan selama 20 hari, bila waktu habis maka secara otomatis role tersebut akan dicabut.\n\n4. Perpanjangan custom-role diperbolehkan bila masih bagian dari booster server.\n\n5. Penamaan custom-role harus sopan dan tidak menyinggung.')
        // .setFields()
        // .setFooter()
        message.channel.send({ embeds: [embed]});
    }
} as ICommand