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
    names: 'partnershipRules',
    category: 'configuration',
    aliases: ['pr'],
    description: 'Sends an Embed about partnership regulations',
    minArgs: 0,
    guildOnly: true,
    requiredPermissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    callback: ({ message, text, client }) => __awaiter(void 0, void 0, void 0, function* () {
        message.delete();
        const row = new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setLabel('Terms of Service')
            .setURL('https://discord.com/terms')
            .setStyle('LINK'))
            .addComponents(new discord_js_1.MessageButton()
            .setLabel('Discord Guidelines')
            .setURL('https://discord.com/guidelines')
            .setStyle('LINK'));
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor('・ ✦ — GIID PARTNERSHIP RULES')
            .setColor('#FFA976')
            .setDescription('Berikut ada beberapa aturan yang wajib kalian taati bila ingin partnership diantaranya:\n\n1. Server mematuhi [Discord Terms of Service](https://discord.com/terms) dan [Community Guidelines](https://discord.com/guidelines).\n\n2. Mempunyai anggota/member minimal 300 orang (tidak termasuk bot).\n\n3. Server tidak mengandung konten **NSFW**.\n\n4. Tidak ada drama atau masalah dengan server lainnya.\n\n5. Server memiliki channel khusus partnership.\n\n6. Mudah diajak kerja sama baik berupa Event, Giveaway, dan sebagainya.\n\n7. Bila tertarik untuk menjalin partnership bisa DM ke <@&909613158182842409>');
        // .setFields()
        // .setFooter()
        yield message.channel.send({
            embeds: [embed],
            components: [row]
        });
    })
};
