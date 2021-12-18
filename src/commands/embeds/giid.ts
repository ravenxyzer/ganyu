import { Message, MessageEmbed, MessageActionRow, MessageButton, Guild } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    name: 'giid',
    category: 'configuration',
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    Permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: async ({ message, text, guild }) => {
        message.delete()
        const embed = new MessageEmbed()
        .setAuthor('・ ✦ — GENSHIN IMPACT ID')
        .setColor('#FFA976')
        .setThumbnail(guild.iconURL({dynamic: true}))
        .setDescription("・**Who are we?** ー adalah server berbasis komunitas yang didedikasikan untuk semua mengenai Genshin Impact dan lainnya. Temukan bantuan dan panduan untuk eksplorasi, artifact build, dan lainnya.\n\nー 〃**What we have**\n\n・**Unique Roles.** ー dapatkan berbagai jenis role berdasarkan perkembangan dan pencapaian akun anda saat bermain Genshin Impact!\n\n・**Events & Giveaways.** ー ambil bagian dalam berbagai events yang kami adakan memenangkan hadiah atau just for fun! Dari Weekly Spiral Abyss Speedrun sampai Quiz umum mengenai Genshin Impact.\n\n・**Bots.** ー gunakan berbagai aneka bot seperti Mudae, Epic RPG, OwO, Tatsu, dan lainnya. Oh dan, kami juga mempunyai bot buatan sendiri!\n\n・**Others.** ー kami menyediakan berbagai channel-channel untuk topik seperti Anime & Memes, Virtual Youtubers, Honkai Impact 3, dan lainnya! Oh, don't forget the custom voice channel.\n\n・Mengobrol tentang apa pun dengan kami! dan mungkin anda akan menemukan pendamping yang baik seperti Paimon 🙂")
        // .setImage("https://cdn.discordapp.com/attachments/781005483314118656/899224726512230410/GenshinImpactID_Banner.gif")
        // .setFields()
        // .setFooter()
        await message.channel.send({embeds: [embed]});
        
    }
} as ICommand