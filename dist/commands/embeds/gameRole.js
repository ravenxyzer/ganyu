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
    name: 'gameRole',
    category: 'configuration',
    aliases: ['gr'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID GAME ROLES')
            .setColor('#FFA976')
            .setDescription('Silakan mengambil role yang anda inginkan untuk mendapatkan notifikasi sesuai dengan role yang dipilih.\n\n> <:Genshin_Impact:910879454631452692> ・ <@&909622094814388254>\nPing untuk merekrut Party Genshin Impact\n\n> <:Honkai_Impact:910885561181552641> ・ <@&909600627280187402>\nPing untuk pemain Honkai Impact 3rd\n\n> <:Mobile_Legends:910879482854916097> ・ <@&909600003197132821>\nPing untuk pemain Mobile Legends : Bang Bang\n\n> <:Valorant:910886919464943641> ・ <@&909600531431952434>\nPing untuk pemain Valorant\n\n> <:Minecraft:910887582378901555> ・ <@&909600734956359750>\nPing untuk pemain Minecraft');
        // .setFields()
        // .setFooter()
        message.channel.send({ embeds: [embed] });
    })
};
