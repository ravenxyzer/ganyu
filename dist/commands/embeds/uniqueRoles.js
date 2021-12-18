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
    name: 'uniqueRoles',
    aliases: ['ur', 'uniqueRole'],
    category: 'configuration',
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    Permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID UNIQUE ROLES')
            .setColor('#FFA976')
            .setDescription("Hi, Travelers.\n**Genshin Impact ID** punya role-role unik loh. Role ini didapatkan berdasarkan progress kalian di Genshin Impact. Berikut beberapa role unik tersebut diantaranya:\n\nー <@&912649568146042881> 〃 Genshin Impact Party - Trusted Coop Helper\nBantu teman-teman di GIID dalam hal terkait genshin untuk mendapatkan role ini!\n\nー <@&912648485755572295> 〃  1.000.000+ Damages\nBagikan screenshoot montage 1 Juta Damage atau lebih untuk mendapatkan role ini!\n\nー <@&912649449782788156> 〃 Have sigils more than you needed\nBagikan screenshoot 3 Toko Sigil yang sudah diborong untuk mendapatkan role ini!\n\nー <@&912671578280591370> 〃 Excellent Characters Build\nBagikan screenshoot 3 build karakter terbaik kalian untuk mendapatkan role ini!\n\nー <@&912649442165932042> 〃 Kaeya, Lisa, and Amber are max level\nBagikan screenshoot level 3 karakter di atas untuk mendapatkan role ini!\n\nー <@&912655359959781388> 〃 Did 1000+ leylines\nBagikan screenshoot achievement Penyelesaian Leyline untuk mendapatkan role ini!\n\nー <@&912649294262177822> 〃 100% All Maps\nBagikan screenshoot map kalian untuk mendapatkan role ini!\n\nー <@&912655270973440010> 〃 25+ Characters Max Friendship Level\nBagikan screenshoot Friendship Level karakter (achievement/hoyolab) untuk mendapatkan role ini!\n\nー <@&912642428710842369> 〃 36 Stars Spiral Abyss\nBagikan screenshoot Progress Spiral Abyss kalian untuk mendapatkan role ini!\n\nCatatan: Kirimkan bukti progress kalian di <#915180174750916618> dengan format: 'unique-role' yang diminta + bukti foto. Terima Kasih");
        // .setFields()
        // .setFooter()
        yield message.channel.send({ embeds: [embed] });
    })
};
