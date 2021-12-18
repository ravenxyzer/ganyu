import { Message, MessageEmbed, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'rules',
    aliases: ['rule'],
    category: 'configuration',
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    Permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: async ({ message, text }) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('Terms of Service')
            .setURL('https://discord.com/terms')
            .setStyle('LINK')
        )
        .addComponents(
            new MessageButton()
            .setLabel('Community Guidelines')
            .setURL('https://discord.com/guidelines')
            .setStyle('LINK')
        )

        message.delete()
        const embed = new MessageEmbed()
        .setAuthor('・ ✦ — GIID RULES')
        .setColor('#FFA976')
        .setDescription('Demi ketertiban dan kenyamanan bersama berikut ada beberapa aturan yang wajib kalian taati nih diantaranya:\n\n1. Patuhi [Discord Terms of Service](https://discord.com/terms) dan [Community Guidelines](https://discord.com/guidelines).\n\n2. Bersikap baik dan sopan saat berinteraksi.\n\n3. Gunakan channel dan bot secara bijak.\n\n4. Tidak diperbolehkan untuk toxic atau spam.\n\n5. Konten bersifat NSFW sangat dilarang keras.\n\n6. Bukan sarana untuk membahas isu politik dan isu SARA.\n\n7. Menyebarkan link yang mencurigakan konsekuensi BAN.\n\n8. Peraturan bersifat komprehensif.\n\nJadikan server ini sebagai sarana untuk kita menjalin persaudaraan yang baik terhadap semuanya.')
        // .setFields()
        // .setFooter()
        await message.channel.send(
            { 
            embeds: [embed],
            components: [row]
            }
        );
        
    }
} as ICommand