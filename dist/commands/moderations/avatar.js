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
    category: 'Avatar',
    aliases: ['avatar', 'av'],
    description: 'Sends an avatar',
    expectedArgs: '<target>',
    minArgs: 0,
    guildOnly: true,
    callback: ({ message, text }) => __awaiter(void 0, void 0, void 0, function* () {
        const user = message.mentions.users.first() || message.author;
        const authId = user.id;
        const authAv = user.avatar;
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(`${user.username}'s Avatar`)
            .setImage('https://cdn.discordapp.com/avatars/' + authId + '/' + authAv + '?size=2048')
            .setColor('#ddc1b1')
            .setFooter(user.tag, user.displayAvatarURL({ dynamic: true, size: 512 }));
        return embed;
    })
};
