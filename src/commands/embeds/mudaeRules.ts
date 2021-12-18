import { ButtonInteraction, Interaction, Client, Collector, Message, MessageActionRow, MessageButton, MessageEmbed, MessageManager, Collection, Guild, Channel,} from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'mudaeRules',
    aliases: ['mudaeRules', 'mr'],
    category: 'configuration',
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],  

    callback: async ({ message, client, interaction: msgInt, channel, args, user }) => {
        message.delete()
        const row = new MessageActionRow()
        // .addComponents(
        //     new MessageButton()
        //     .setCustomId('mudae_ping')
        //     .setLabel('・Mudae Ping')
        //     .setStyle('SUCCESS')
        //     .setEmoji('🃏'),
        // )

        const embed = new MessageEmbed()
            .setAuthor('・ ✦ — GIID MUDAE REGULATIONS')
            .setColor('#FFA976')
            .setDescription('Berikut beberapa aturan yang wajib kalian taati ketika ingin main <@!432610292342587392> diantaranya:\n\nー 1. 〃Setiap orang memiliki hak untuk claim husbu/waifu/kakera dari hasil gacha diri sendiri.\n\nー 2. 〃Tidak diperboleh meng-claim husbu/waifu/kakera hasil gacha orang lain tanpa izin terlebih dahulu.\n\nー 3. 〃Pergunakan channel sesuai dengan fungsinya.\n\nー 4. 〃Kalian bisa mention <@&910516787030929478> untuk keperluan yang dibutuhkan misalnya free waifu/husbu/kakera dan lain sebagainya.\n\nー 5. 〃Aturan bersifat komprehensif\n\nー 6. 〃Bila ada pertanyaan atau keluh kesah terkait <@!432610292342587392> bisa hubungi <@472030702465056769>\n\nSilahkan pilih menu di bawah untuk mendapatkan role <@&910516787030929478>\n\n')
            await message.channel.send(
                { 
                    embeds: [embed],
                    // components: [row]
                }
            )
    }
} as ICommand