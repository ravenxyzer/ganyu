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
    name: 'customRoleRules',
    category: 'configuration',
    aliases: ['crr', 'customRoleRule'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID CUSTOM ROLE RULES')
            .setColor('#FFA976')
            .setDescription('Booster diberikan keuntungan untuk memodifikasi satu role dari slot yang tersedia.\nDengan ketentuan sebagai berikut:\n\n1. Setiap booster hanya dapat memilih 1 custom-role per akunnya.\n\n2. Booster dapat memodifikasi nama berserta warna dari custom-role yang dipilih.\n\n3. Custom-role hanya bisa bertahan selama 20 hari, bila waktu habis maka secara otomatis role tersebut akan dicabut.\n\n4. Perpanjangan custom-role diperbolehkan bila masih bagian dari booster server.\n\n5. Penamaan custom-role harus sopan dan tidak menyinggung.');
        // .setFields()
        // .setFooter()
        message.channel.send({ embeds: [embed] });
    })
};
