import { Message, MessageActionRow, MessageButton, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    names: 'partnershipRules',
    category: 'configuration',
    aliases: ['pr'],
    description: 'Sends an Embed about partnership regulations',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: async ({ message, text, client }) => {
        message.delete()
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('Terms of Service')
            .setURL('https://discord.com/terms')
            .setStyle('LINK')
        )
        .addComponents(
            new MessageButton()
            .setLabel('Discord Guidelines')
            .setURL('https://discord.com/guidelines')
            .setStyle('LINK')
        )

        const embed = new MessageEmbed()
        .setAuthor('・ ✦ — GIID PARTNERSHIP RULES')
        .setColor('#FFA976')
        .setDescription('Berikut ada beberapa aturan yang wajib kalian taati bila ingin partnership diantaranya:\n\n1. Server mematuhi [Discord Terms of Service](https://discord.com/terms) dan [Community Guidelines](https://discord.com/guidelines).\n\n2. Mempunyai anggota/member minimal 300 orang (tidak termasuk bot).\n\n3. Server tidak mengandung konten **NSFW**.\n\n4. Tidak ada drama atau masalah dengan server lainnya.\n\n5. Server memiliki channel khusus partnership.\n\n6. Mudah diajak kerja sama baik berupa Event, Giveaway, dan sebagainya.\n\n7. Bila tertarik untuk menjalin partnership bisa DM ke <@&909613158182842409>')
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