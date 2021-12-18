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
    name: 'rolesInfo',
    category: 'configuration',
    aliases: ['roles'],
    description: 'Sends an Embed',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID ADMINISTRATION STRUCTURE')
            .setColor('#FFA976')
            .setDescription('Berikut merupakan penjelasan dari struktur administrasi di Genshin Impact ID.\n\n ・ <@&909642715086610462>\nMerupakan bot official dari server Genshin Impact ID.\n\n ・ <@&909438424635809832>\nMerupakan Administrator yang mengembangkan serta mengurus segala kepentingan server.\n\n ・ <@&909440113006751765>\nMerupakan Moderator yang membantu Administrator dalam mengembangkan serta mengurus server.\n\n ・ <@&909613158182842409>\nMerupakan Partnership Manager yang mengurus serta mengatur segala keperluan partnership.\n\n ・ <@&909783019601158194>\nMerupakan orang yang diberi kepercayaan untuk memverifikasi seseorang yang ingin claim role <@&910146913351925780>.\n\n ・ <@&910052712115240990>\nMerupakan seseorang yang mengawasi segala aktifitas server / Server Security.');
        // .setFields()
        // .setFooter()
        message.channel.send({ embeds: [embed] });
    })
};
