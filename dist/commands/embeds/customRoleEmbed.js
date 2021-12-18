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
    name: 'customRoleEmbed',
    category: 'configuration',
    aliases: ['cre'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — CUSTOM ROLES')
            .setColor('#FFA976')
            .setDescription('Booster diberikan keuntungan untuk memodifikasi satu role dari slot yang tersedia.\nDengan ketentuan sebagai berikut:\n\nー 〃1. Setiap booster hanya dapat memilih 1 custom-role per akunnya.\n\nー 〃2. Booster dapat memodifikasi nama berserta warna dari custom-role yang dipilih.\n\nー 〃3. Custom-role hanya bisa bertahan selama 20 hari, bila waktu habis maka secara otomatis role tersebut akan dicabut.\n\nー 〃4. Perpanjangan custom-role diperbolehkan bila masih bagian dari booster server.\n\nー 〃5. Penamaan custom-role harus sopan dan tidak menyinggung.');
        // .setFields()
        // .setFooter()
        message.channel.send({ embeds: [embed] });
    })
};
