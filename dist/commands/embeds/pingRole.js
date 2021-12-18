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
    name: 'pingRoleEmbed',
    category: 'configuration',
    aliases: ['pre'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID PING ROLES')
            .setColor('#FFA976')
            .setDescription('Silahkan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n> 🤝 ・ <@&910169062510833704>\nPing untuk mendapatkan notifikasi terkait Partnership Server Genshin Impact ID\n\n> 🔥 ・ <@&910303931333238814>\nPing untuk mendapat notifikasi konten terbaru dari Content Creator GIID\n\n> 🎉 ・ <@&910854269064843316>\nPing untuk mendapatkan notifikasi Giveaway\n\n> 🛐 ・ <@&909621805986230302>\nPing untuk mendapatkan notifikasi terkait spiral abyss\n\n> 🍥 ・ <@&911193934053654538>\nPing untuk mendapatkan notifikasi terkait anime, manga, dan sejenisnya.\n\n> 🐰 ・ <@&911837444708655194>\nPing untuk mendapatkan notifikasi terkait Virtual Youtubers');
        // .setFields()
        // .setFooter()
        yield message.channel.send({ embeds: [embed] });
    })
};
