"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    name: 'mudaeRules',
    aliases: ['mudaeRules', 'mr'],
    category: 'configuration',
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, client, interaction: msgInt, channel, args, user }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const row = new discord_js_1.MessageActionRow();
        // .addComponents(
        //     new MessageButton()
        //     .setCustomId('mudae_ping')
        //     .setLabel('・Mudae Ping')
        //     .setStyle('SUCCESS')
        //     .setEmoji('🃏'),
        // )
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID MUDAE REGULATIONS')
            .setColor('#FFA976')
            .setDescription('Berikut beberapa aturan yang wajib kalian taati ketika ingin main <@!432610292342587392> diantaranya:\n\nー 1. 〃Setiap orang memiliki hak untuk claim husbu/waifu/kakera dari hasil gacha diri sendiri.\n\nー 2. 〃Tidak diperboleh meng-claim husbu/waifu/kakera hasil gacha orang lain tanpa izin terlebih dahulu.\n\nー 3. 〃Pergunakan channel sesuai dengan fungsinya.\n\nー 4. 〃Kalian bisa mention <@&910516787030929478> untuk keperluan yang dibutuhkan misalnya free waifu/husbu/kakera dan lain sebagainya.\n\nー 5. 〃Aturan bersifat komprehensif\n\nー 6. 〃Bila ada pertanyaan atau keluh kesah terkait <@!432610292342587392> bisa hubungi <@472030702465056769>\n\nSilahkan pilih menu di bawah untuk mendapatkan role <@&910516787030929478>\n\n');
        yield message.channel.send({
            embeds: [embed],
            // components: [row]
        });
    })
};
