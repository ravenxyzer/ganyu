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
    name: 'rules',
    aliases: ['rule'],
    category: 'configuration',
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    Permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        const row = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setLabel('Discord ToS')
            .setURL('https://discord.com/terms')
            .setStyle('LINK'))
            .addComponents(new discord_js_1.MessageButton()
            .setLabel('Discord Guidelines')
            .setURL('https://discord.com/guidelines')
            .setStyle('LINK'));
        message.delete();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID RULES')
            .setColor('#FFA976')
            .setDescription('Demi ketertiban dan kenyamanan bersama berikut ada beberapa aturan yang wajib kalian taati nih diantaranya:\n\n✧ 1. Patuhi dan ikuti [Discord Terms of Service](https://discord.com/terms) dan [Discord Community Guidelines](https://discord.com/guidelines).\n\n✧ 2. Bersikap sopan dan baik saat berinteraksi sesama member GIID.\n\n✧ 3. Gunakan channel dan bot secara bijak.\n\n✧ 4. Tidak diperkenankan untuk spamming dan self-promoting tanpa izin terlebih dahulu.\n\n✧ 5. Konten bersifat NSFW sangat dilarang keras konsekuensi BAN permanent.\n\n✧ 6. Bukan sarana untuk membahas isu politik dan isu SARA.\n\n✧ 7. Peraturan bersifat komprehensif dan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.\n\nJadikan server ini sebagai sarana untuk kita menjalin persaudaraan yang baik terhadap semuanya.');
        // .setFields()
        // .setFooter()
        yield message.channel.send({
            embeds: [embed],
            components: [row]
        });
    })
};
