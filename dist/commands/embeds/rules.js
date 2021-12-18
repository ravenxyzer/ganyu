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
            .setLabel('Terms of Service')
            .setURL('https://discord.com/terms')
            .setStyle('LINK'))
            .addComponents(new discord_js_1.MessageButton()
            .setLabel('Community Guidelines')
            .setURL('https://discord.com/guidelines')
            .setStyle('LINK'));
        message.delete();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID RULES')
            .setColor('#FFA976')
            .setDescription('Demi ketertiban dan kenyamanan bersama berikut ada beberapa aturan yang wajib kalian taati nih diantaranya:\n\n1. Patuhi [Discord Terms of Service](https://discord.com/terms) dan [Community Guidelines](https://discord.com/guidelines).\n\n2. Bersikap baik dan sopan saat berinteraksi.\n\n3. Gunakan channel dan bot secara bijak.\n\n4. Tidak diperbolehkan untuk toxic atau spam.\n\n5. Konten bersifat NSFW sangat dilarang keras.\n\n6. Bukan sarana untuk membahas isu politik dan isu SARA.\n\n7. Menyebarkan link yang mencurigakan konsekuensi BAN.\n\n8. Peraturan bersifat komprehensif.\n\nJadikan server ini sebagai sarana untuk kita menjalin persaudaraan yang baik terhadap semuanya.');
        // .setFields()
        // .setFooter()
        yield message.channel.send({
            embeds: [embed],
            components: [row]
        });
    })
};
